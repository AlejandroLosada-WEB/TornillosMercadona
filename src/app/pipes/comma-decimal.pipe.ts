
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'commaDecimal'
})
export class CommaDecimalPipe implements PipeTransform {

  transform(value: any): any {
    (value)? value=value.toFixed(2).replace(".",","): value="" ;
    
    return value;
  }

}
