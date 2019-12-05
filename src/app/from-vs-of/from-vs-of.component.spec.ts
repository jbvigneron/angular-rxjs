import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FromVsOfComponent } from './from-vs-of.component';

describe('FromVsOfComponent', () => {
  let component: FromVsOfComponent;
  let fixture: ComponentFixture<FromVsOfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FromVsOfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FromVsOfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
