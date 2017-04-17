import { PhoneColor, PhoneSize, PhoneState, PhoneType } from "../../constants";

export interface IType {
  name: string;
  smallName: string;
  type: PhoneType,
  availableColors: PhoneColor[];
  availableSizes: PhoneSize[];
  availableStates: PhoneState[];
}
