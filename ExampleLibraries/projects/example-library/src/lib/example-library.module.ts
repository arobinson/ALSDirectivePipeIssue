import { NgModule } from '@angular/core';
import { ExampleDirective } from './example.directive';
import { ExamplePipe } from './example.pipe';



@NgModule({
  declarations: [ExampleDirective, ExamplePipe],
  imports: [
  ],
  exports: [ExampleDirective, ExamplePipe]
})
export class ExampleLibraryModule { }
