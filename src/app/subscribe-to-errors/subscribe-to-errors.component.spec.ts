import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscribeToErrorsComponent } from './subscribe-to-errors.component';

describe('SubscribeToErrorsComponent', () => {
  let component: SubscribeToErrorsComponent;
  let fixture: ComponentFixture<SubscribeToErrorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubscribeToErrorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubscribeToErrorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
