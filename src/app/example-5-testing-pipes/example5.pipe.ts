import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'formatFileSize'
})
export class FormatFileSizePipe implements PipeTransform {
  transform(sizeInBytes: number, longForm: boolean): string {
    return `test`;
  }
}