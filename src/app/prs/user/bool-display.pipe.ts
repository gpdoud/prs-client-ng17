import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'boolDisplay',
  standalone: true
})
export class BoolDisplayPipe implements PipeTransform {

  transform(bool: boolean): string {
    return bool ? "Yes" : "No";
  }

}
