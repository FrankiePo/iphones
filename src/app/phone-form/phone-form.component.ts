import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PhoneTypesService } from "../shared/model/phone-type/phone-types.service";
import { PhoneType } from "../shared/constants";
import { ColorsService } from "../shared/model/color/colors.service";
import { SizesService } from "../shared/model/size/sizes.service";
import { StatesService } from "../shared/model/state/states.service";
import { IPhone } from "../shared/model/iphone";
import { IPhoneType } from "../shared/model/phone-type/iphone-type";
import { IState } from "../shared/model/state/istate";
import { IColor } from "../shared/model/color/icolor";
import { ISize } from "../shared/model/size/isize";

@Component({
  selector: 'app-phone-form',
  templateUrl: './phone-form.component.html',
  styleUrls: ['./phone-form.component.css']
})
export class PhoneFormComponent implements OnInit {
  phoneGroupForm: FormGroup;
  private chosenType: IPhoneType;
  private chosenPhone: IPhone;
  constructor(
    private fb: FormBuilder,
    private pts: PhoneTypesService,
    private clr: ColorsService,
    private sz: SizesService,
    private st: StatesService,
  ) {}

  ngOnInit() {
    this.setNewType(PhoneType.I4S);
    this.phoneGroupForm = this.fb.group(this.chosenPhone);
    this.phoneGroupForm.valueChanges.subscribe((data: IPhone) => {
      if (this.chosenPhone.type !== data.type) {
        this.setNewType(data.type);
      } else {
        this.chosenPhone = data;
      }
    });
  }
  setNewType(newType: PhoneType) {
    this.chosenType = this.pts.getType(newType);
    this.chosenPhone = {
      type: this.chosenType.type,
      size: this.chosenType.availableSizes[0],
      color: this.chosenType.availableColors[0],
      state: this.chosenType.availableStates[0],
    };
  }
  getTypes() {
    return this.pts.getTypes();
  }
  getAvailableSizes(): ISize[] {
    return this.chosenType.availableSizes.map(sz => this.sz.getSize(sz));
  }
  getAvailableColors(): IColor[] {
    return this.chosenType.availableColors.map(clr => this.clr.getColor(clr));
  }
  getAvailableStates(): IState[] {
    return this.chosenType.availableStates.map(st => this.st.getState(st));
  }
  getDescriptions(): string[] {
    return this.st.getState(this.chosenPhone.state).desc;
  }
}
