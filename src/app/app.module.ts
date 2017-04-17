import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { CallFormComponent } from './call-form/call-form.component';
import { PhoneFormComponent } from './phone-form/phone-form.component';
import { TypesService } from "./shared/model/type/types.service";
import { ColorsService } from "./shared/model/color/colors.service";
import { SizesService } from "./shared/model/size/sizes.service";
import { StatesService } from "./shared/model/state/states.service";

@NgModule({
  declarations: [
    AppComponent,
    CallFormComponent,
    PhoneFormComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    ReactiveFormsModule,
  ],
  providers: [
    TypesService,
    ColorsService,
    SizesService,
    StatesService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
