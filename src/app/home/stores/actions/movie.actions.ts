import { Action } from '@ngrx/store';
import { Movie } from '../../../models/movie';

/**
 * For each action type in an action group, make a simple
 * enum object for all of this group's action types.
 */
export enum MovieActionTypes {
  getMovieDetail = '[Movie] get movie detail',
  getMovieSuccess = '[Movie] get movie success'
}

/**
 * Every action is comprised of at least a type and an optional
 * payload. Expressing actions as classes enables powerful
 * type checking in reducer functions.
 */
export class GetMovieDetail implements Action {
  readonly type = MovieActionTypes.getMovieDetail;

  constructor(public payload: string) { }
}

export class GetMovieSuccess implements Action {
  readonly type = MovieActionTypes.getMovieSuccess;

  constructor(public payload: Movie) { }
}

/**
 * Export a type alias of all actions in this action group
 * so that reducers can easily compose action types
 */
export type MovieActions
            = GetMovieDetail
            | GetMovieSuccess;
