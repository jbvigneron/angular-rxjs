import { Component } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { range } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  templateUrl: './range-map.component.html'
})
export class RangeMapComponent {
  range$: Observable<number>;

  constructor() {
    this.range$ = range(0, 10).pipe(
      map(n => n * n)
    );

    this.range$.subscribe(console.log);
  }
}
