import { NgModule } from '@angular/core';
import { LayoutLibComponent } from './layout-lib.component';
import { OneColumnLayoutComponent } from './one-column-layout/one-column-layout.component';
import { TwoColumnLayoutComponent } from './two-column-layout/two-column-layout.component';

@NgModule({
  declarations: [LayoutLibComponent, OneColumnLayoutComponent, TwoColumnLayoutComponent],
  imports: [
  ],
  exports: [
    LayoutLibComponent,
    OneColumnLayoutComponent,
    TwoColumnLayoutComponent
  ]
})
export class LayoutLibModule { }
