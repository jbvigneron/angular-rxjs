import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RangeMapFilterComponent } from './range-map-filter.component';

describe('RangeMapFilterComponent', () => {
  let component: RangeMapFilterComponent;
  let fixture: ComponentFixture<RangeMapFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RangeMapFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RangeMapFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
