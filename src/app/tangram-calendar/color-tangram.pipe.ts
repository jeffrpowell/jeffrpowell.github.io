import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'colorTangram'
})
export class ColorTangramPipe implements PipeTransform {

  transform(value: string): string {
    return value.split("").map(c => {
      if (c === '.') {
        return `<pre class="tangram tangram-char-blank">  </pre>`;
      }
      else {
        return `<pre class="tangram tangram-char-${c}">  </pre>`;
      }
    }).join("");
  }

}
