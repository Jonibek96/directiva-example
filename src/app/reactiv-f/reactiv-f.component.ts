import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {promise} from "selenium-webdriver";

@Component({
  selector: 'app-reactiv-f',
  templateUrl: './reactiv-f.component.html',
  styleUrls: ['./reactiv-f.component.css']
})
export class ReactivFComponent implements  OnInit{
  charsCount = 5;
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
  form:FormGroup;
  ngOnInit(){
  this.form = new FormGroup({
    user: new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email],this.checkemail),
      pass: new FormControl('', [Validators.required, this.charsLength.bind(this)]),
    }),
    country: new FormControl('tj'),
    answer: new FormControl('no')
  });
  }

  onSubmit(){
    console.log(this.form);
  }

  charsLength(control: FormControl){
    if (control.value.length <= this.charsCount){
      return{
        'errorLength': true
      };
    }
    return null;
  }

  checkemail(control: FormControl): Promise<any>{
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'test@mail.ru'){
          resolve({
            'emailIsUsed': true
          });
        }else{
          resolve(null);
        }
      },2000);
    });
  }
}


