import { Component, OnDestroy } from '@angular/core';
import { fromEvent, Subscription } from 'rxjs';
import { map, pairwise } from 'rxjs/operators';

@Component({
  templateUrl: './duration.component.html',
  styleUrls: ['./duration.component.scss']
})
export class DurationComponent implements OnDestroy {
  subscription: Subscription;

  constructor() {
    this.subscription = fromEvent(document, 'click').pipe(
      map(() => Date.now()),
      pairwise(),
      map(([before, after]) => (after - before))
    ).subscribe(console.log);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
