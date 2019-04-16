import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutLibComponent } from './layout-lib.component';

describe('LayoutLibComponent', () => {
  let component: LayoutLibComponent;
  let fixture: ComponentFixture<LayoutLibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LayoutLibComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
