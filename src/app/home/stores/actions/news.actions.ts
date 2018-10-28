import { Action } from '@ngrx/store';

/**
 * For each action type in an action group, make a simple
 * enum object for all of this group's action types.
 */
export enum NewsActionTypes {
  FETCH_NEWS = '[News] Fetch news',
  FETCH_NEWS_SUCCESS = '[News] Fetch news success',
  FETCH_NEWS_LIST = '[News] Fetch news list',
  FETCH_NEWS_LIST_SUCCESS = '[News] Fetch news list success',
  FETCH_NEWS_DETAIL = '[News] Fetch news detail',
  FETCH_NEWS_DETAIL_SUCCESS = '[News] Fetch news detail success'
}

/**
 * Every action is comprised of at least a type and an optional
 * payload. Expressing actions as classes enables powerful
 * type checking in reducer functions.
 */
export class FetchNews implements Action {
  readonly type = NewsActionTypes.FETCH_NEWS;

  constructor(public payload: any) { }
}

export class FetchNewsSuccess implements Action {
  readonly type = NewsActionTypes.FETCH_NEWS_SUCCESS;

  constructor(public payload: any) { }
}
export class FetchNewsList implements Action {
  readonly type = NewsActionTypes.FETCH_NEWS_LIST;

  constructor(public payload: any) { }
}

export class FetchNewsListSuccess implements Action {
  readonly type = NewsActionTypes.FETCH_NEWS_LIST_SUCCESS;

  constructor(public payload: any) { }
}
export class FetchNewsDetail implements Action {
  readonly type = NewsActionTypes.FETCH_NEWS_DETAIL;

  constructor(public payload: any) { }
}

export class FetchNewsDetailSuccess implements Action {
  readonly type = NewsActionTypes.FETCH_NEWS_DETAIL_SUCCESS;

  constructor(public payload: any) { }
}

/**
 * Export a type alias of all actions in this action group
 * so that reducers can easily compose action types
 */
export type NewsActions
            = FetchNews
            | FetchNewsSuccess
            | FetchNewsDetail
            | FetchNewsDetailSuccess
            | FetchNewsList
            | FetchNewsListSuccess;
