import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipeTransform',
  standalone: true
})
export class PipeTransformPipe implements PipeTransform {

  transform(value:string,date:string='FullDate'):string {
    if (!value || value.length != 14 ) {
      return 'Invalid input';
    }
     const year = value.substring(1, 3); 
     const month = value.substring(3, 5); 
     const day = value.substring(5, 7);
 
     switch (date) {
       case 'YY':
         return year;
       case 'MM':
         return month;
       case 'DD':
         return day;
       case 'FullDate':
         return `${day}-${month}-${'19' + year}`;
       default:
         return 'Invalid date part';
     }
  }

}
