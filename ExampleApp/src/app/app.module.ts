import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ExampleLibraryModule } from 'example-library';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ExampleLibraryModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
