import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'carFilter'
})
export class CarFilterPipe implements PipeTransform {

  transform(carList, search: string, field: string) {
    if(carList.length === 0 || search === ''){
      return carList;
    }
   return carList.filter(car => car[field].toLowerCase().indexOf(search.toLowerCase()) !== -1);
  }

}
