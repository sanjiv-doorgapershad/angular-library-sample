import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { Sample1LibModule } from 'sample1-lib';
import { LayoutLibModule } from 'layout-lib';


// import { Sample1LibModule } from '../../../sample-library/projects/sample1-lib/src/lib/sample1-lib.module';
// import { LayoutLibModule } from '../../../sample-library/projects/layout-lib/src/lib/layout-lib.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Sample1LibModule,
    LayoutLibModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
