import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipe'
})
export class PipePipe implements PipeTransform {
  transform(hodnota: string): string {
    const omezeni = 6;
    const zakonceni = '/..';
    if (hodnota.length > omezeni) { return hodnota.substring(0, omezeni) + zakonceni; } else { return hodnota; }
  }

}
