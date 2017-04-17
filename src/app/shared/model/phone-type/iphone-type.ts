import { PhoneColor, PhoneSize, PhoneState, PhoneType } from "../../constants";

export interface IPhoneType {
  name: string;
  smallName: string;
  type: PhoneType,
  availableColors: PhoneColor[];
  availableSizes: PhoneSize[];
  availableStates: PhoneState[];
}
