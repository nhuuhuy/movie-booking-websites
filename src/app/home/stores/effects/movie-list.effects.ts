import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Action } from '@ngrx/store';
import { Actions, Effect } from '@ngrx/effects';
import {switchMap} from 'rxjs/operators';
import { MoviesService } from '../../../services/movies.service';
import * as MovieListActions from '../actions/movie-list.actions';

@Injectable()
export class MovieListEffects {
  @Effect() fetchMovies$: Observable<Action> = this.actions$.ofType(MovieListActions.ClassActionTypes.FETCH_MOVIES).pipe(
    switchMap((
      (actions: MovieListActions.FetchMovies) => {
        return this.movieService.GetMovies().map(
          res => new MovieListActions.FetchMoviesDone(res)
        );
      }
    )
  ));

  constructor(
    private actions$: Actions,
    private movieService: MoviesService
  ) {}
}
