import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-callback-form',
  templateUrl: './callback-form.component.html',
  styleUrls: ['./callback-form.component.scss']
})
export class CallbackFormComponent {
  callbackForm : FormGroup= new FormGroup({
    "name": new FormControl<string>("", Validators.required),
    "phone": new FormControl<string>("", [Validators.pattern("[0-9]{11}")])
  })

  submit(){
    console.log(this.callbackForm.value);
    this.callbackForm.reset();
  }

  shouldShowErrorForFiled(fieldName: string): boolean {
    const control = this.callbackForm.controls[fieldName];
    return control.invalid && control.touched
  }
}
