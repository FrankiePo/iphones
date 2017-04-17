import { Injectable } from '@angular/core';
import { ISize } from "./isize";
import { PhoneSize } from "../../constants";

@Injectable()
export class SizesService {
  private sizes: ISize[];
  constructor() {
    this.sizes = [
      {
        id: PhoneSize.GB8,
        value: 8,
        name: "8gb",
      }, {
        id: PhoneSize.GB16,
        value: 16,
        name: "16gb",
      }, {
        id: PhoneSize.GB32,
        value: 32,
        name: "32gb",
      }, {
        id: PhoneSize.GB64,
        value: 64,
        name: "64gb",
      }, {
        id: PhoneSize.GB128,
        value: 128,
        name: "128gb",
      }, {
        id: PhoneSize.GB256,
        value: 256,
        name: "256gb",
      }
    ];
  }
  getSizes(): ISize[] {
    return this.sizes;
  }
  getSize(id: PhoneSize): ISize {
    return this.sizes[id];
  }

}
