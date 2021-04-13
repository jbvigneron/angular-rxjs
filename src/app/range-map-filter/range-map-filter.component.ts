import { Component } from '@angular/core';
import { Observable, range } from 'rxjs';
import { map, filter } from 'rxjs/operators';

@Component({
  templateUrl: './range-map-filter.component.html'
})
export class RangeMapFilterComponent {
  range$: Observable<number>;

  constructor() {
    this.range$ = range(0, 10).pipe(
      map(n => n * n),
      filter(n => n % 2 === 0)
    );

    this.range$.subscribe(console.log);
  }
}
