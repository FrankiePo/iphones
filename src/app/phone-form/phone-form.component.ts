import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TypesService } from "../shared/model/type/types.service";
import {PhoneState, PhoneType} from "../shared/constants";
import { ColorsService } from "../shared/model/color/colors.service";
import { SizesService } from "../shared/model/size/sizes.service";
import { StatesService } from "../shared/model/state/states.service";
import { IPhone } from "../shared/model/iphone";
import { IType } from "../shared/model/type/itype";
import { IState } from "../shared/model/state/istate";
import { IColor } from "../shared/model/color/icolor";
import { ISize } from "../shared/model/size/isize";


export interface IAvailable {
  sizes: ISize[],
  colors: IColor[],
  states: IState[],
}

@Component({
  selector: 'app-phone-form',
  templateUrl: './phone-form.component.html',
  styleUrls: ['./phone-form.component.css'],
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PhoneFormComponent implements OnInit {
  phoneGroupForm: FormGroup;
  types: IType[];
  private chosenType: IType;
  private chosenPhone: IPhone;
  available: IAvailable;
  descriptions: string[];
  constructor(
    private formBuilder: FormBuilder,
    private typesService: TypesService,
    private colorsService: ColorsService,
    private sizesService: SizesService,
    private statesService: StatesService,
  ) {
    this.types = this.typesService.getTypes();
  }

  ngOnInit() {
    this.setNewType(PhoneType.I4S);
    this.setDescriptions(this.chosenPhone.state);

    this.phoneGroupForm = this.formBuilder.group(this.chosenPhone);
    this.phoneGroupForm.get('type').valueChanges.subscribe((type: PhoneType) => {
      this.setNewType(type);
      const newChosenPhone = Object.assign(this.chosenPhone);
      delete newChosenPhone.type;
      this.phoneGroupForm.patchValue(newChosenPhone, {onlySelf: true, emitEvent: false});
    });
    ['size', 'color', 'state'].forEach(key => {
      this.phoneGroupForm.get(key).valueChanges.subscribe((data) => {
        this.chosenPhone = Object.assign(this.chosenPhone, {[key]: data});
      });
    });
    this.phoneGroupForm.get('state').valueChanges.subscribe(
      state => this.setDescriptions(state)
    );
    this.phoneGroupForm.valueChanges.subscribe(form => console.log(form));
  }
  private setNewType(newType: PhoneType) {
    this.chosenType = this.typesService.getType(newType);
    this.chosenPhone = {
      type: this.chosenType.type,
      size: this.chosenType.availableSizes[0],
      color: this.chosenType.availableColors[0],
      state: this.chosenType.availableStates[0],
    };
    this.available = {
      sizes: this.sizesService.getSizes(this.chosenType.availableSizes),
      colors: this.colorsService.getColors(this.chosenType.availableColors),
      states: this.statesService.getStates(this.chosenType.availableStates),
    };
  }
  private setDescriptions(state: PhoneState) {
    this.descriptions = this.statesService.getState(state).desc;
  }
}
