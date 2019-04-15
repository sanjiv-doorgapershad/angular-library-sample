import { NgModule } from '@angular/core';
import { Sample1LibComponent } from './sample1-lib.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';

@NgModule({
  declarations: [Sample1LibComponent, HelloWorldComponent],
  imports: [
  ],
  exports: [
    Sample1LibComponent,
    HelloWorldComponent
  ]
})
export class Sample1LibModule { }
