import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { IUser } from "../shared/model/iuser";

@Component({
  selector: 'app-call-form',
  templateUrl: './call-form.component.html',
  styleUrls: ['./call-form.component.css']
})
export class CallFormComponent implements OnInit {
  user: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.user = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      tel: ['', [Validators.required, Validators.minLength(2)]],
    });
  }
  onSubmit({ value, valid }: { value: IUser, valid: boolean }) {
    console.log(value, valid);
  }

}
