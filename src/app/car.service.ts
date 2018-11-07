import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";

@Injectable ()
export class CarService {
public host = 'http://localhost:3000/cars';
  constructor (private http: HttpClient){
  }
  getCars(){
     return this.http.get(this.host).map((response) => response)
       .catch((error) => {
         return Observable.throw('Сервер недоступна! Побробуйте позже');
       });
  }

  getTitle(){
    return this.http.get('http://localhost:3000/title')
      .delay(2000)
      .map((data: any) => data.value);
  }

  addCars(carNmae: string){
    const data ={
      name: carNmae,
      color: 'blue'
    };
    return this.http.post(this.host, data).map((response) => response);
  }

  chengColor (car: any, color: string){
    car.color = color;
  return this.http.put(this.host + '/' + car.id, car);
  }

  deleteCar(car: any){
    return this.http.delete(this.host + '/' + car.id);
  }
}
