import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent  {
  @ViewChild('form') form: NgForm;
  defaultCountre = 'tj';
  defoultAnswer = 'no';
  randEmail = "wfm@gmail.com";

  answer = [
   {
     type: 'yes',
     text: 'Да'
   },
   {
     type: 'no',
     text: 'Нет'
   }
 ];
  formdata ={};
  isSubmit = false;
  addRandEmail(){
    this.form.form.patchValue({
      user:{email: this.randEmail}
    });
  }
  submitForm(){
    this.isSubmit =true;
    this.formdata = this.form.value;
    this.form.reset();
  }

}
