import { ISize } from "./size/isize";
import { IColor } from "./color/icolor";
import { IState } from "./state/istate";

export interface IAvaiable {
  sizes: ISize[],
  colors: IColor[],
  states: IState[],
}
