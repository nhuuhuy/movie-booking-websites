import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Action } from '@ngrx/store';
import { Actions, Effect } from '@ngrx/effects';
import { switchMap } from 'rxjs/operators';
import { UserService } from '../../../services/user.service';
import * as UserActions from '../actions/user.actions';

@Injectable()
export class UserEffects {
  @Effect()
  login$: Observable<Action> = this.actions$
    .ofType(UserActions.UserActionTypes.LOGIN)
    .pipe(
      switchMap(
        (actions: UserActions.Login) => {
        return this.userService.login(actions.payload).map(res => {
          if (typeof res === 'string') {
            localStorage.removeItem('userLogin');
            return new UserActions.LoginFail(res);
          } else {
            localStorage.setItem('userLogin', JSON.stringify(res));
            return new UserActions.LoginSuccess(res);
          }
        });
      })
    );
    @Effect()
  register$: Observable<Action> = this.actions$
    .ofType(UserActions.UserActionTypes.REGISTER)
    .pipe(
      switchMap(
        (actions: UserActions.Register) => {
        return this.userService.createUser(actions.payload).map(res => {
            return new UserActions.RegisterSuccess();
        });
      })
    );
    @Effect()
  getHistory$: Observable<Action> = this.actions$
    .ofType(UserActions.UserActionTypes.GET_HISTORY)
    .pipe(
      switchMap(
        (actions: UserActions.GetHistory) => {
        return this.userService.getBookingHistory(actions.payload).map(res => {
          return new UserActions.GetHistorySuccess(res);
        });
      })
    );
    @Effect()
    updateProfile$: Observable<Action> = this.actions$
      .ofType(UserActions.UserActionTypes.UPDATE_PROFILE)
      .pipe(
        switchMap(
          (actions: UserActions.UpdateProfile) => {
          return this.userService.updateUser(actions.payload).map(res => {
          if (typeof res === 'string') {
            localStorage.removeItem('userLogin');
            return new UserActions.UpdateProfileFail();
          } else {
            localStorage.setItem('userLogin', JSON.stringify(res));
            return new UserActions.UpdateProfileSuccess(res);
          }
          });
        })
      );
  constructor(private actions$: Actions, private userService: UserService) {}
}
