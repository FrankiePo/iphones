import { Injectable } from '@angular/core';
import { IState } from "./istate";
import { PhoneState } from "../../constants";

@Injectable()
export class StatesService {
  private states: IState[];
  constructor() {
    this.states = [
      {
        id: PhoneState.WORKING,
        name: "Рабочий",
        desc: [
          "Телефон включается",
          "Есть царапины или не работает часть функций",
        ]
      }, {
        id: PhoneState.EXCELENT,
        name: "Отличное",
        desc: [
          "Телефон работает",
          "Небольшие царапины",
        ]
      }, {
        id: PhoneState.NEW,
        name: "Как новый",
        desc: [
          "Телефон полностью исправен",
          "Нет царапин и потертостей",
        ]
      }
    ]
  }
  getStates(ids: PhoneState[]): IState[] {
    return this.states.filter(({ id }) => ids.indexOf(id) >= 0);
  }
  getState(st: PhoneState): IState {
    return this.getStates([st])[0];
  }
}
