import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TypesService } from "../shared/model/type/types.service";
import { PhoneType } from "../shared/constants";
import { ColorsService } from "../shared/model/color/colors.service";
import { SizesService } from "../shared/model/size/sizes.service";
import { StatesService } from "../shared/model/state/states.service";
import { IPhone } from "../shared/model/iphone";
import { IType } from "../shared/model/type/itype";
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
  private chosenType: IType;
  private chosenPhone: IPhone;
  constructor(
    private fb: FormBuilder,
    private pts: TypesService,
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
        this.phoneGroupForm.patchValue(this.chosenPhone);
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
  get types() {
    return this.pts.getTypes();
  }
  get availableSizes(): ISize[] {
    return this.chosenType.availableSizes.map(sz => this.sz.getSize(sz));
  }
  get availableColors(): IColor[] {
    return this.chosenType.availableColors.map(clr => this.clr.getColor(clr));
  }
  get availableStates(): IState[] {
    return this.chosenType.availableStates.map(st => this.st.getState(st));
  }
  get descriptions(): string[] {
    console.log("-- Again Descriptions");
    return this.st.getState(this.chosenPhone.state).desc;
  }
}
