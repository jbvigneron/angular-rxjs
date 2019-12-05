import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';

@Component({
  templateUrl: './subscribe-async.component.html',
  styleUrls: ['./subscribe-async.component.scss']
})
export class SubscribeAsyncComponent {
  onNext$: Observable<string>;

  constructor() {
    this.onNext$ = of('Hello world !');
  }
}
