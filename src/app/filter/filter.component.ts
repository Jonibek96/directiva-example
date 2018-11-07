import { Component, OnInit } from '@angular/core';
import 'rxjs/Rx';
import {Observable} from "rxjs/Observable";

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent  {
  searchCar= '';
cars = [
  {name: 'Ford', descr: 'wfm 1'},
  {name: 'Mazda', descr: 'wfm 2'},
  {name: 'Bently', descr: 'wfm 3'},
  {name: 'Audi', descr: 'wfm 4'},
  {name: 'mersades', descr: 'wfm 5'},
  {name: 'Lada', descr: 'wfm 6'},
  ];

  asyncTitle = Observable.of('Async of 3 second').delay(3000);
  addCar(){
    this.cars.push({
      name: 'New Car',
      descr: 'wfm'
    });
  }
}
