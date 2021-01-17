import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipe'
})
export class PipePipe implements PipeTransform {
  transform(hodnota: string, omezeni: number, zakonceni: string): string {

    const fullLenght = hodnota.length + zakonceni.length;

    if (hodnota.length < omezeni) { return hodnota; } else if (zakonceni.length >= omezeni)
    { return zakonceni.substring(0, omezeni); } else if (fullLenght > omezeni)
    { return hodnota.substring(0, omezeni - zakonceni.length) + zakonceni; }
    }
}
