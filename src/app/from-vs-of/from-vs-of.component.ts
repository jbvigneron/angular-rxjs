import { Component } from '@angular/core';
import { Observable, of, from } from 'rxjs';

@Component({
  templateUrl: './from-vs-of.component.html',
  styleUrls: ['./from-vs-of.component.scss']
})
export class FromVsOfComponent {
  of$: Observable<number[]>;
  from$: Observable<number>;

  constructor() {
    this.of$ = of([1, 2, 3]);
    this.of$.subscribe(res => console.log('of', res));

    this.from$ = from([1, 2, 3]);
    this.from$.subscribe(res => console.log('from', res));
  }
}
