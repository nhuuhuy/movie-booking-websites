import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Action } from '@ngrx/store';
import { Actions, Effect } from '@ngrx/effects';
import { switchMap } from 'rxjs/operators';
import * as NewsActions from '../actions/news.actions';
import { NewsService } from '../../../services/news.service';

@Injectable()
export class NewsEffects {
  @Effect()
  news$: Observable<Action> = this.actions$
    .ofType(NewsActions.NewsActionTypes.FETCH_NEWS)
    .pipe(
      switchMap(
        (actions: NewsActions.FetchNews) => {
        return this.newsService.getNews(actions.payload).map(res => new NewsActions.FetchNewsSuccess(res));
      })
    );
  @Effect()
  newsList$: Observable<Action> = this.actions$
    .ofType(NewsActions.NewsActionTypes.FETCH_NEWS_LIST)
    .pipe(
      switchMap(
        (actions: NewsActions.FetchNewsList) => {
        return this.newsService.getNewsList(actions.payload.page, actions.payload.perpage).map(res => new NewsActions.FetchNewsListSuccess(res));
      })
    );
    @Effect()
    newsDetail$: Observable<Action> = this.actions$
      .ofType(NewsActions.NewsActionTypes.FETCH_NEWS_DETAIL)
      .pipe(
        switchMap(
          (actions: NewsActions.FetchNewsDetail) => {
          return this.newsService.getNewDetail(actions.payload).map(
            res => new NewsActions.FetchNewsDetailSuccess(res));
        })
      );
  constructor(private actions$: Actions, private newsService: NewsService ) {}
}
