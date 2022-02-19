import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'listRandom'
})
export class ListRandomPipe implements PipeTransform {

  transform(value: string[]): string {
    if (!value || value.length == 0) {
      return "";
    }
    let sortKeys : number[] = [];
    let mapping : Map<number, string> = new Map();
    value.forEach(i => {
      let r : number = Math.random();
      sortKeys.push(r);
      mapping.set(r, i);
    })
    sortKeys.sort((i1, i2) => i1 - i2);
    return sortKeys.map(r => mapping.get(r)).reduce((prev, next) => prev + ", " + next);
  }

}
