import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { LayoutLibModule } from '../../../layout-lib/src/lib/layout-lib.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    LayoutLibModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
