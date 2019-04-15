import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Sample1LibComponent } from './sample1-lib.component';

describe('Sample1LibComponent', () => {
  let component: Sample1LibComponent;
  let fixture: ComponentFixture<Sample1LibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Sample1LibComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Sample1LibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
