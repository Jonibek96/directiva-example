import {Injectable} from "@angular/core";

@Injectable ()
export class Servicerout {

  cars = [
    {
      name: 'Ford',
      id: 1,
      color: 'red',
      year: 2017
    },
    {
      name: 'Audi',
      id: 2,
      color: 'blue',
      year: 2011
    },
    {
      name: 'Lada',
      id: 3,
      color: 'white',
      year: 2013
    },
    {
      name: 'Bently',
      id: 4,
      color: 'yellow',
      year: 2015
    }
  ];
}
