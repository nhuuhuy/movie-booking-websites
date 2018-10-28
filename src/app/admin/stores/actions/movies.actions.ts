import { Action } from '@ngrx/store';
import { Movie } from '../../../models/movie';

/**
 * For each action type in an action group, make a simple
 * enum object for all of this group's action types.
 */
export enum MoviesActionTypes {
  GET_MOVIES = '[Movies] Get movies',
  GET_MOVIES_SUCCESS = '[Movies] Get movies success',
  EDIT_MOVIE = '[Movies] Edit movies',
  EDIT_MOVIE_SUCCESS = '[Movies] Edit movies success',
  DELETE_MOVIE =  '[Movies] Delete movie',
  DELETE_MOVIE_SUCCESS =  '[Movies] Delete movie success',
  ADD_MOVIE = '[Movies] Addd movie',
  ADD_MOVIE_SUCCESS = '[Movies] Add movie success'
}

/**
 * Every action is comprised of at least a type and an optional
 * payload. Expressing actions as classes enables powerful
 * type checking in reducer functions.
 */
export class GetMovies implements Action {
  readonly type = MoviesActionTypes.GET_MOVIES;

  constructor() { }
}

export class GetMoviesSuccess implements Action {
  readonly type = MoviesActionTypes.GET_MOVIES_SUCCESS;

  constructor(public payload: Movie[]) { }
}
export class AddMovie implements Action {
  readonly type = MoviesActionTypes.ADD_MOVIE;

  constructor(public payload: Movie) { }
}

export class AddMovieSuccess implements Action {
  readonly type = MoviesActionTypes.ADD_MOVIE_SUCCESS;

  constructor(public payload: Movie) { }
}
export class EditMovie implements Action {
  readonly type = MoviesActionTypes.EDIT_MOVIE;

  constructor(public payload: Movie) { }
}

export class EditMovieSuccess implements Action {
  readonly type = MoviesActionTypes.EDIT_MOVIE_SUCCESS;

  constructor(public payload: Movie) { }
}

export class DeleteMovie implements Action {
  readonly type = MoviesActionTypes.DELETE_MOVIE;

  constructor(public payload: number) { }
}

export class DeleteMovieSuccess implements Action {
  readonly type = MoviesActionTypes.DELETE_MOVIE_SUCCESS;

  constructor(public payload: number) { }
}
/**
 * Export a type alias of all actions in this action group
 * so that reducers can easily compose action types
 */
export type MoviesActions
            = GetMovies
            | GetMoviesSuccess
            | AddMovie
            | AddMovieSuccess
            | EditMovie
            | EditMovieSuccess
            | DeleteMovie
            | DeleteMovieSuccess;
