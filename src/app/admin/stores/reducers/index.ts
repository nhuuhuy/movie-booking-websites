import { ActionReducerMap,   createSelector,
  createFeatureSelector, } from '@ngrx/store';
import * as fromUsers from './users.reducers';
import * as fromMovies from './movies.reducers';

  export interface AdminState {
    movies: fromMovies.MoviesState;
    users: fromUsers.UsersState;
  }
  export const reducers: ActionReducerMap<AdminState> = {
    movies : fromMovies.moviesReducer,
    users : fromUsers.usersReducer,
  };

  export const getAdminState = createFeatureSelector<AdminState>(
    'adminpage'
  );
  export const getMoviesState = createSelector(
    getAdminState,
    (state: AdminState) => state.movies
  );
  export const getMovies = createSelector(
    getMoviesState,
    fromMovies.getMovies
  );
  export const getMoviesSuccess = createSelector(
    getMoviesState,
    fromMovies.getMoviesSuccess
  );
  export const getUsersState = createSelector(
    getAdminState,
    (state: AdminState) => state.users
  );
  export const getUsers = createSelector(
    getUsersState,
    fromUsers.getUsers
  );
  export const getUsersSuccess = createSelector(
    getUsersState,
    fromUsers.getUsersSuccess
  );
  export const login = createSelector(
    getUsersState,
    fromUsers.getUser
  );
  export const checkAdmin = createSelector(
    getUsersState,
    fromUsers.checkAdmin
  );
