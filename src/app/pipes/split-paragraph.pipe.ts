import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'splitParagraph',
    standalone: true
})
export class SplitParagraphPipe implements PipeTransform {
  transform(value: string): string[] {
    return value.split('\n');
  }
}
