import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RangeMapComponent } from './range-map.component';

describe('RangeMapComponent', () => {
  let component: RangeMapComponent;
  let fixture: ComponentFixture<RangeMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RangeMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RangeMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
