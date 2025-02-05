import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customCurrency',
  standalone: true
})
export class CustomCurrencyPipe implements PipeTransform {

  transform(value: number, currency: string = 'ج.م'): string {
    return `${value.toLocaleString()} ${currency}`;
  }

}
