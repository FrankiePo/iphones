import { PhoneColor, PhoneSize, PhoneState, PhoneType } from "../constants";

export interface IPhone {
  type: PhoneType,
  size: PhoneSize,
  color: PhoneColor,
  state: PhoneState,
}
