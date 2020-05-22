import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Movie } from './movie';
import { map } from 'rxjs/operators';

@Component({
  templateUrl: './swapi.component.html',
  styleUrls: ['./swapi.component.scss']
})
export class SwapiComponent {
  movies$: Observable<Movie[]>;
  loading = true;

  constructor(http: HttpClient) {
    const url = 'https://swapi.dev/api/films/?format=json';

    this.movies$ = http.get<any>(url).pipe(
      map(response => response.results),
      map(results =>
        results.map(
          result => new Movie(
            result.title,
            result.episode_id,
            result.director,
            result.release_date.substring(0, 4))
        )
      )
    );
  }
}
