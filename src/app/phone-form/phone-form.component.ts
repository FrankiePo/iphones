import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TypesService } from "../shared/model/type/types.service";
import { PhoneState, PhoneType } from "../shared/constants";
import { ColorsService } from "../shared/model/color/colors.service";
import { SizesService } from "../shared/model/size/sizes.service";
import { StatesService } from "../shared/model/state/states.service";
import { IType } from "../shared/model/type/itype";
import { IAvaiable } from "../shared/model/iavaiable";


function getFirstAvailable(available: IAvaiable) {
  return {
    size: available.sizes[0].id,
    color: available.colors[0].id,
    state: available.states[0].id,
  };
}

@Component({
  selector: 'app-phone-form',
  templateUrl: './phone-form.component.html',
  styleUrls: ['./phone-form.component.css'],
})
export class PhoneFormComponent implements OnInit {
  phoneGroupForm: FormGroup;
  types: IType[];
  available: IAvaiable;
  descriptions: string[];
  constructor(
    private formBuilder: FormBuilder,
    private typesService: TypesService,
    private colorsService: ColorsService,
    private sizesService: SizesService,
    private statesService: StatesService,
  ) {
    this.types = this.typesService.getTypes();
    this.updateType(this.types[0].type);
  }

  ngOnInit() {
    const phone = Object.assign({}, getFirstAvailable(this.available), {type: this.types[0].type});
    this.phoneGroupForm = this.formBuilder.group(phone);
    this.phoneGroupForm.get('type').valueChanges.subscribe((type: PhoneType) => {
      this.updateType(type);
      this.phoneGroupForm.patchValue(getFirstAvailable(this.available), {onlySelf: true, emitEvent: false});
    });
    this.phoneGroupForm.get('state').valueChanges.subscribe(
      state => this.setDescriptions(state)
    );
    this.phoneGroupForm.valueChanges.subscribe(form => console.log(form));
  }
  private updateType(type: PhoneType) {
    const chosenType = this.typesService.getType(type);
    this.available = {
      sizes: this.sizesService.getSizes(chosenType.availableSizes),
      colors: this.colorsService.getColors(chosenType.availableColors),
      states: this.statesService.getStates(chosenType.availableStates),
    };
    this.descriptions = this.available.states[0].desc;
  }
  private setDescriptions(state: PhoneState) {
    this.descriptions = this.statesService.getState(state).desc;
  }
}
