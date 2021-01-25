import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'examplePipe'
})
export class ExamplePipe implements PipeTransform {
  transform(value: unknown, ...args: unknown[]): unknown {
    return value == null ? 'Input is null' : JSON.stringify(value);
  }
}
