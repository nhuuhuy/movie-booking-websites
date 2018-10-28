import { Injectable } from '@angular/core';
import { Action, Store } from '@ngrx/store';
import { Movie } from '../../../models/movie';
/**
 * For each action type in an action group, make a simple
 * enum object for all of this group's action types.
 */
export enum ClassActionTypes {
  FETCH_MOVIES = '[Movies] fetch movies',
  FETCH_MOVIES_DONE = '[Movies] fetch movies done',
  GET_TRAILER = '[Movies] get trailer',
  GET_TRAILER_DONE = '[Movies] get trailer done',
  SEARCH_MOVIES = '[Movies] search movie',
  SEARCH_MOVIES_DONE = '[Movies] search movie done'
}

/**
 * Every action is comprised of at least a type and an optional
 * payload. Expressing actions as classes enables powerful
 * type checking in reducer functions.
 */
export class FetchMovies implements Action {
  readonly type = ClassActionTypes.FETCH_MOVIES;

  constructor() { }
}

export class FetchMoviesDone implements Action {
  readonly type = ClassActionTypes.FETCH_MOVIES_DONE;

  constructor(public payload: Movie[]) { }
}

export class GetTrailer implements Action {
  readonly type = ClassActionTypes.GET_TRAILER;

  constructor(public payload: string) { }
}
export class SearchMovies implements Action {
  readonly type = ClassActionTypes.SEARCH_MOVIES;

  constructor(public payload: string) { }
}
export class SearchMoviesDone implements Action {
  readonly type = ClassActionTypes.SEARCH_MOVIES_DONE;

  constructor(public payload: Movie[]) { }
}
/**
 * Export a type alias of all actions in this action group
 * so that reducers can easily compose action types
 */
export type ClassActions
            = FetchMovies
            | FetchMoviesDone
            | GetTrailer
            | SearchMovies
            | SearchMoviesDone
            ;
