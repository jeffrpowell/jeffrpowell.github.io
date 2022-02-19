import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sentenceCase'
})
export class SentenceCasePipe implements PipeTransform {

  transform(value: string): string {
    return value.charAt(0).toUpperCase() + value.substring(1);
  }

}
