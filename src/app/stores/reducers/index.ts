import { ActionReducerMap,   createSelector,
  createFeatureSelector, } from '@ngrx/store';
import * as fromUser from './user.reducers';

  export interface AppState {
    user: fromUser.UserState;
  }
  export const reducers: ActionReducerMap<AppState> = {
    user : fromUser.userReducer,
  };

export const getAppState = createFeatureSelector<AppState>(
  'app'
);

// export const getUserLoginState = createSelector(
//   getAppState,
//   (state: AppState) => state.user
// );
// export const login = createSelector(
//   getUserLoginState,
//   fromUser.loginSuccess
// );
// export const checkAdmin = createSelector(
//   getUserLoginState,
//   fromUser.checkAdmin
// );
// export const getUser = createSelector(
//   getUserLoginState,
//   fromUser.getUser
// );


