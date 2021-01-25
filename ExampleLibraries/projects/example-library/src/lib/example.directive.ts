import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[libExampleDirective]'
})
export class ExampleDirective {

  constructor() { }

  @HostBinding('style.color') color = 'red';

}
