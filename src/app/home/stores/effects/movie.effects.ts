import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Action } from '@ngrx/store';
import { Actions, Effect } from '@ngrx/effects';
import { switchMap } from 'rxjs/operators';
import * as MovieActions from '../actions/movie.actions';
import { MoviesService } from '../../../services/movies.service';

@Injectable()
export class MovieEffects {
  @Effect()
  MovieDetail$: Observable<Action> = this.actions$
    .ofType(MovieActions.MovieActionTypes.getMovieDetail)
    .pipe(
      switchMap(
        (actions: MovieActions.GetMovieDetail) => {
        return this.movieService.GetMoviesDetail(actions.payload).map(res => new MovieActions.GetMovieSuccess(res));
      })
    );

  constructor(private actions$: Actions, private movieService: MoviesService ) {}
}
