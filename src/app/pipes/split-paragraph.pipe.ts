import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'splitParagraph',
  standalone: true,
})
export class SplitParagraphPipe implements PipeTransform {
  transform(value: string | undefined): string[] | [] {
    if (value) {
      return value
        .split('\n')
        .filter((paragraph) => paragraph !== '')
        .map((paragraph) => paragraph.trim());
    }

    return [];
  }
}
