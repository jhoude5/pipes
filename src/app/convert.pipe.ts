import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convert',
  standalone: true
})
export class ConvertPipe implements PipeTransform {
  
  transform(value: any, ...args: any[]): any {
    if (!value) {
      return value;
    }
    return (value * 1.609);
  }

}
