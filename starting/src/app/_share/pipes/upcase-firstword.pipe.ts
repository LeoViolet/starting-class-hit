import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'upcaseFirstword'
})
export class UpcaseFirstwordPipe implements PipeTransform {

  transform(value: string): unknown {
    return value.replace(/\b\w/g, char => char.toLocaleUpperCase());
  }

}
