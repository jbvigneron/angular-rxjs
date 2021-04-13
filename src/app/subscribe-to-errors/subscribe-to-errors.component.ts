import { Component } from '@angular/core';
import { Observable, throwError } from 'rxjs';

@Component({
  templateUrl: './subscribe-to-errors.component.html'
})
export class SubscribeToErrorsComponent {
  onError$: Observable<string>;

  constructor() {
    this.onError$ = throwError('Accès interdit');
    this.onError$.subscribe({ error: console.error });
  }
}
