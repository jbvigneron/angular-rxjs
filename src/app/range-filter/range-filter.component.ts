import { Component } from '@angular/core';
import { Observable, range } from 'rxjs';
import { filter } from 'rxjs/operators';

@Component({
  templateUrl: './range-filter.component.html',
  styleUrls: ['./range-filter.component.scss']
})
export class RangeFilterComponent {
  range$: Observable<number>;

  constructor() {
    this.range$ = range(0, 10).pipe(
      filter(n => n % 2 === 0)
    );

    this.range$.subscribe(console.log);
  }
}
