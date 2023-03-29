import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-callback-form',
  templateUrl: './callback-form.component.html',
  styleUrls: ['./callback-form.component.scss']
})
export class CallbackFormComponent {
  callbackForm : FormGroup;
  constructor(){
    this.callbackForm = new FormGroup({
      "name": new FormControl<string>("", Validators.required),
      "phone": new FormControl<string>("", [Validators.pattern("[0-9]{11}")])
    })
  }

  submit(){
    console.log(this.callbackForm);
    this.callbackForm.reset();
  }
}
