import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

type FormValue =  {
  name: FormControl<string>,
  phone: FormControl<string>;
}

@Component({
  selector: 'app-callback-form',
  templateUrl: './callback-form.component.html',
  styleUrls: ['./callback-form.component.scss']
})
export class CallbackFormComponent {
  isShowErrors = false;

  callbackForm : FormGroup<FormValue> = new FormGroup<FormValue>({
    name: new FormControl<string>("", { nonNullable: true, validators: Validators.required }),
    phone: new FormControl("", { nonNullable: true, validators: [Validators.required, Validators.pattern("[0-9]{11}")]})
  })

  constructor() {}

  submit(){
    if (this.callbackForm.invalid) {
      this.callbackForm.markAllAsTouched();
      this.isShowErrors = true;
      return;
    }

    console.log(this.callbackForm.value);
    this.callbackForm.reset();
  }
}
