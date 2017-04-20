import { Injectable } from '@angular/core';
import {IColor} from "./icolor";
import {PhoneColor} from "../../constants";

@Injectable()
export class ColorsService {
  private colors: IColor[];
  constructor() {
    this.colors = [
      {
        id: PhoneColor.BLACK,
        code: '#000000',
        name: 'Black',
      }, {
        id: PhoneColor.WHITE,
        code: '#ffffff',
        name: 'White',
      }, {
        id: PhoneColor.GOLD,
        code: '#ffd967',
        name: 'Gold',
      }, {
        id: PhoneColor.SPACE_GREY,
        code: '#7e7e7e',
        name: 'Space Grey',
      }, {
        id: PhoneColor.PINK,
        code: '#8e007a',
        name: 'Pink',
      }
    ];
  }
  getColors(ids: PhoneColor[]): IColor[] {
    return this.colors.filter(({ id }) => ids.indexOf(id) >= 0);
  }
  getColor(id: PhoneColor): IColor {
    return this.getColors([id])[0];
  }
}
