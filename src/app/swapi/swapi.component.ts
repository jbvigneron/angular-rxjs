import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Movie } from './movie';
import { map, tap } from 'rxjs/operators';
import { ResultMovies } from './result';

@Component({
  templateUrl: './swapi.component.html',
  styleUrls: ['./swapi.component.scss']
})
export class SwapiComponent {
  movies$: Observable<Movie[]>;
  loading = true;

  constructor(http: HttpClient) {
    const url = 'https://swapi.dev/api/films/?format=json';

    this.movies$ = http.get<ResultMovies>(url).pipe(
      tap(() => this.loading = false),
      map(response => response.results),
      map(movies => movies.sort((a, b) => a.episode_id - b.episode_id)) // réordonner les films par n° d'épisode
    );
  }
}
