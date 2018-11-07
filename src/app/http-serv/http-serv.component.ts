import { Component, OnInit } from '@angular/core';
import {CarService} from "../car.service";

interface Cars {
  name: string;
  color: string;
  id: number;
}
@Component({
  selector: 'app-http-serv',
  templateUrl: './http-serv.component.html',
  styleUrls: ['./http-serv.component.css']
})
export class HttpServComponent implements OnInit{
  color = [
    'red',
    'blue',
    'yellow',
    'pink',
    'orange'
  ];
  cars: Cars[] = [];
  carName:string = '';
  title;
  constructor(private carService: CarService) {}

  ngOnInit(){
    this.title = this.carService.getTitle();
  }

  loadCars(){
    this.carService
     .getCars()
     .subscribe((cars: Cars[]) => {
      this.cars = cars
     }, (error) => {
       alert(error);
     }
     );
  }

  // loadCars(){
  //  this.cars = this.carService.getCars()
  // }

  addCars(){
    this.carService.addCars(this.carName)
      .subscribe((car: Cars) => {
        this.cars.push(car);
      });
    this.carName = '';
  }

  getRandColor(){
    const num = Math.round(Math.random() * (this.color.length - 1));
    return this.color[num];
  }
  setNewColor(car: Cars){
    this.carService.chengColor(car, this.getRandColor())
      .subscribe((data) => console.log(data));
  }
  deleteCar(car: Cars){
    this.carService.deleteCar(car)
      .subscribe((data) => {
        this.cars = this.cars.filter(c => c.id !== car.id);
      });
  }

}
