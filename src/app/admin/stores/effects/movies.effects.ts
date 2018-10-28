import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Action } from '@ngrx/store';
import { Actions, Effect } from '@ngrx/effects';
import {switchMap} from 'rxjs/operators';
import { MoviesService } from '../../../services/movies.service';
import * as MoviesActions from '../actions/movies.actions';

@Injectable()
export class MoviesEffects {
  @Effect() fetchMovies$: Observable<Action> = this.actions$.ofType(MoviesActions.MoviesActionTypes.GET_MOVIES).pipe(
    switchMap((
      (actions: MoviesActions.GetMovies) => {
        return this.movieService.GetMovies().map(
          res => new MoviesActions.GetMoviesSuccess(res)
        );
      }
    )
  ));
  @Effect() addMovie$: Observable<Action> = this.actions$.ofType(MoviesActions.MoviesActionTypes.ADD_MOVIE).pipe(
    switchMap((
      (actions: MoviesActions.AddMovie) => {
        return this.movieService.AddMovie(actions.payload).map(
          res => new MoviesActions.AddMovieSuccess(res)
        );
      }
    )
  ));
  @Effect() editMovie$: Observable<Action> = this.actions$.ofType(MoviesActions.MoviesActionTypes.EDIT_MOVIE).pipe(
    switchMap((
      (actions: MoviesActions.EditMovie) => {
        return this.movieService.UpdateMovie(actions.payload).map(
          res => {
           return new MoviesActions.EditMovieSuccess(res);
          }
        );
      }
    )
  ));
  @Effect() deleteMovie$: Observable<Action> = this.actions$.ofType(MoviesActions.MoviesActionTypes.DELETE_MOVIE).pipe(
    switchMap((
      (actions: MoviesActions.DeleteMovie) => {
        return this.movieService.DeleteMovie(actions.payload).map(
          res => {
           return new MoviesActions.DeleteMovieSuccess(actions.payload);
          }
        );
      }
    )
  ));
  constructor(
    private actions$: Actions,
    private movieService: MoviesService
  ) {}
}
