import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';

@Component({
  templateUrl: './subscribe.component.html',
  styleUrls: ['./subscribe.component.scss']
})
export class SubscribeComponent {
  onNext$: Observable<string>;

  constructor() {
    this.onNext$ = of('Hello world !');
    this.onNext$.subscribe(console.log);
  }
}
