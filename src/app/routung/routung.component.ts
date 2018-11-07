import { Component, OnInit } from '@angular/core';
import {Servicerout} from "../servicerout";

@Component({
  selector: 'app-routung',
  templateUrl: './routung.component.html',
  styleUrls: ['./routung.component.css']
})
export class RoutungComponent implements OnInit {
  cars = [];
  constructor(private service: Servicerout) { }

  ngOnInit() {
    this.cars = this.service.cars;
  }


}
