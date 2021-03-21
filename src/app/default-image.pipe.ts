import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'defaultImage'
})
export class DefaultImagePipe implements PipeTransform {

  transform(value: any): any {
    if(value===" " || value.length ===0)
    return './assets/zeneddine.jpg';
    //.substring(9);
    else {
      return value;
    }
  }

}
