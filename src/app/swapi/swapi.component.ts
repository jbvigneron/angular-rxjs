import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Movie } from './movie';
import { map, tap } from 'rxjs/operators';

@Component({
  templateUrl: './swapi.component.html',
  styleUrls: ['./swapi.component.scss']
})
export class SwapiComponent {
  movies$: Observable<Movie[]>;
  loading = true;

  constructor(http: HttpClient) {
    const url = 'https://swapi.co/api/films/?format=json';

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

    this.movies$.subscribe({
      complete: () => {
        this.loading = false;
        console.log('Flux reçu');
      }
    });
  }
}
