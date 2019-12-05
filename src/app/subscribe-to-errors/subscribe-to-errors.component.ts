import { Component } from '@angular/core';
import { Observable, throwError } from 'rxjs';

@Component({
  templateUrl: './subscribe-to-errors.component.html',
  styleUrls: ['./subscribe-to-errors.component.scss']
})
export class SubscribeToErrorsComponent {
  onError$: Observable<string>;

  constructor() {
    this.onError$ = throwError('Accès interdit');

    this.onError$.subscribe(null, console.error);
  }
}
