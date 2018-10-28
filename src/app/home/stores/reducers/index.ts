import { ActionReducerMap,   createSelector,
  createFeatureSelector, } from '@ngrx/store';
import * as fromMovieList from './movie-list.reducers';
import * as fromUser from './user.reducers';
import * as fromNews from './news.reducers';
import * as fromMovie from './movie.reducers';

  export interface HomeState {
    movies: fromMovieList.MovieListState;
    user: fromUser.UserState;
    movie: fromMovie.MovieState;
    news: fromNews.NewsState;
  }
  export const reducers: ActionReducerMap<HomeState> = {
    movies : fromMovieList.movieListReducer,
    user : fromUser.userReducer,
    movie: fromMovie.movieReducer,
    news: fromNews.newsReducer
  };

export const getHomeState = createFeatureSelector<HomeState>(
  'homepage'
);

export const getMoviesState = createSelector(
  getHomeState,
  (state: HomeState) => state.movies
);

export const fetchMovies = createSelector(getMoviesState, fromMovieList.fetchMovies);
export const fetchMoviesSuccess = createSelector(getMoviesState, fromMovieList.fetchMoviesSuccess);
export const searchMovie = createSelector(getMoviesState, fromMovieList.searchMovie);
export const getUserLoginState = createSelector(
  getHomeState,
  (state: HomeState) => state.user
);
export const login = createSelector(
  getUserLoginState,
  fromUser.loginSuccess
);
export const checkAdmin = createSelector(
  getUserLoginState,
  fromUser.checkAdmin
);
export const getUser = createSelector(
  getUserLoginState,
  fromUser.getUser
);
export const register = createSelector(
  getUserLoginState,
  fromUser.registerSuccess
);
export const bookingHistory = createSelector(
  getUserLoginState,
  fromUser.bookingHistory
);
export const getMovieState = createSelector(
  getHomeState,
  (state: HomeState) => state.movie
);

export const getMovieDetail = createSelector(
  getMovieState,
  fromMovie.getMovieSuccess
);
export const getMovie = createSelector(
  getMovieState,
  fromMovie.getMovie
);
export const getNewsState = createSelector(
  getHomeState,
  (state: HomeState) => state.news
);
export const fetchNews = createSelector(
  getNewsState,
  fromNews.newsList
);
export const newsLoad = createSelector(
  getNewsState,
  fromNews.newsLoad
);
export const fetchNewsList = createSelector(
  getNewsState,
  fromNews.newsPage
);
export const loadNewsPage = createSelector(
  getNewsState,
  fromNews.loadingNews
);
export const newsDetail = createSelector(
  getNewsState,
  fromNews.newsDetail
);
