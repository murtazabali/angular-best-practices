import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sampleCheck',
})
export class SampleCheckPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    console.log('SampleCheckPipe')
    return 'test: ' + value.toUpperCase();
  }

}
