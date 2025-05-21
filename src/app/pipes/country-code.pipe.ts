import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'countryCode'
})
export class CountryCodePipe implements PipeTransform {

  transform(value: number, country?: String): String { // making country optional by using '?'
    let code = "+ 91"
    if(country == "USA") code ="+1 "
    return code+value;
  }

}
