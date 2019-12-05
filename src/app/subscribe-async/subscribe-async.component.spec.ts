import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscribeAsyncComponent } from './subscribe-async.component';

describe('SubscribeAsyncComponent', () => {
  let component: SubscribeAsyncComponent;
  let fixture: ComponentFixture<SubscribeAsyncComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubscribeAsyncComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubscribeAsyncComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
