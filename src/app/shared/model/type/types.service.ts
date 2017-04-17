import { Injectable } from '@angular/core';
import { IType } from "./itype";
import { PhoneColor, PhoneType, PhoneState, PhoneSize } from "../../constants";

@Injectable()
export class TypesService {
  private phoneTypes: IType[];
  constructor() {
    this.phoneTypes = [
      {
        name: 'iPhone 4S',
        smallName: '4S',
        type: PhoneType.I4S,
        availableColors:  [PhoneColor.BLACK, PhoneColor.WHITE],
        availableSizes:   [PhoneSize.GB8, PhoneSize.GB16, PhoneSize.GB32, PhoneSize.GB64],
        availableStates:  [PhoneState.WORKING, PhoneState.EXCELENT, PhoneState.NEW],
      },
      {
        name: 'iPhone 5',
        smallName: '5',
        type: PhoneType.I5,
        availableColors:  [PhoneColor.BLACK, PhoneColor.WHITE, PhoneColor.GOLD, PhoneColor.PINK],
        availableSizes:   [PhoneSize.GB16, PhoneSize.GB32, PhoneSize.GB64],
        availableStates:  [PhoneState.WORKING, PhoneState.EXCELENT, PhoneState.NEW],
      },
      {
        name: 'iPhone 5C',
        smallName: '5C',
        type: PhoneType.I5C,
        availableColors:  [PhoneColor.BLACK, PhoneColor.WHITE],
        availableSizes:   [PhoneSize.GB8, PhoneSize.GB16, PhoneSize.GB32],
        availableStates:  [PhoneState.WORKING, PhoneState.EXCELENT, PhoneState.NEW],
      },
      {
        name: 'iPhone 5S',
        smallName: '5S',
        type: PhoneType.I5S,
        availableColors:  [PhoneColor.BLACK, PhoneColor.WHITE],
        availableSizes:   [PhoneSize.GB16, PhoneSize.GB32, PhoneSize.GB64],
        availableStates:  [PhoneState.WORKING, PhoneState.EXCELENT, PhoneState.NEW],
      },
      {
        name: 'iPhone 6',
        smallName: '6',
        type: PhoneType.I6,
        availableColors:  [PhoneColor.BLACK, PhoneColor.WHITE],
        availableSizes:   [PhoneSize.GB16, PhoneSize.GB64, PhoneSize.GB128],
        availableStates:  [PhoneState.WORKING, PhoneState.EXCELENT, PhoneState.NEW],
      },
      {
        name: 'iPhone 6 Plus',
        smallName: '6 Plus',
        type: PhoneType.I6PLUS,
        availableColors:  [PhoneColor.BLACK, PhoneColor.WHITE],
        availableSizes:   [PhoneSize.GB16, PhoneSize.GB64, PhoneSize.GB128],
        availableStates:  [PhoneState.WORKING, PhoneState.EXCELENT, PhoneState.NEW],
      },
      {
        name: 'iPhone 6S',
        smallName: '6S',
        type: PhoneType.I6S,
        availableColors:  [PhoneColor.BLACK, PhoneColor.WHITE],
        availableSizes:   [PhoneSize.GB16, PhoneSize.GB32, PhoneSize.GB64, PhoneSize.GB128],
        availableStates:  [PhoneState.WORKING, PhoneState.EXCELENT, PhoneState.NEW],
      },
      {
        name: 'iPhone 6S Plus',
        smallName: '6S Plus',
        type: PhoneType.I6SPLUS,
        availableColors:  [PhoneColor.BLACK, PhoneColor.WHITE],
        availableSizes:   [PhoneSize.GB16, PhoneSize.GB32, PhoneSize.GB64, PhoneSize.GB128],
        availableStates:  [PhoneState.WORKING, PhoneState.EXCELENT, PhoneState.NEW],
      },
      {
        name: 'iPhone SE',
        smallName: 'SE',
        type: PhoneType.ISE,
        availableColors:  [PhoneColor.BLACK, PhoneColor.WHITE],
        availableSizes:   [PhoneSize.GB16, PhoneSize.GB64],
        availableStates:  [PhoneState.WORKING, PhoneState.EXCELENT, PhoneState.NEW],
      },
      {
        name: 'iPhone 7',
        smallName: '7',
        type: PhoneType.I7,
        availableColors:  [PhoneColor.BLACK, PhoneColor.WHITE],
        availableSizes:   [PhoneSize.GB32, PhoneSize.GB128, PhoneSize.GB256],
        availableStates:  [PhoneState.WORKING, PhoneState.EXCELENT, PhoneState.NEW],
      },
      {
        name: 'iPhone 7 Plus',
        smallName: '7 Plus',
        type: PhoneType.I7PLUS,
        availableColors:  [PhoneColor.BLACK, PhoneColor.WHITE],
        availableSizes:   [PhoneSize.GB32, PhoneSize.GB128, PhoneSize.GB256],
        availableStates:  [PhoneState.WORKING, PhoneState.EXCELENT, PhoneState.NEW],
      },
    ];
  }
  getTypes(): IType[] {
    return this.phoneTypes;
  }
  getType(wantedType: PhoneType): IType {
    return this.phoneTypes.filter(({ type }) => type === wantedType)[0];
  }
}
