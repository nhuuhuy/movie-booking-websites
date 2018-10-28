import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Action } from '@ngrx/store';
import { Actions, Effect } from '@ngrx/effects';
import {switchMap} from 'rxjs/operators';
import { UserService } from '../../../services/user.service';
import * as UsersAction from '../actions/users.actions';

@Injectable()
export class UsersEffects {
  @Effect() fetchUsers$: Observable<Action> = this.actions$.ofType(UsersAction.UsersActionTypes.GET_USERS).pipe(
    switchMap((
      (actions: UsersAction.GetUsers) => {
        return this.userService.getAllUser().map(
          res => {
            res = res.filter(user => user.TaiKhoan);
            return new UsersAction.GetUSersSuccess(res);
          }
        );
      }
    )
  ));
  @Effect()
  login$: Observable<Action> = this.actions$
    .ofType(UsersAction.UsersActionTypes.LOGIN)
    .pipe(
      switchMap(
        (actions: UsersAction.Login) => {
        return this.userService.login(actions.payload).map(res => {
          if (typeof res === 'string') {
            localStorage.removeItem('userLogin');
            return new UsersAction.LoginFail(res);
          } else {
            localStorage.setItem('userLogin', JSON.stringify(res));
            return new UsersAction.LoginSuccess(res);
          }
        });
      })
    );
   @Effect() addUser$: Observable<Action> = this.actions$.ofType(UsersAction.UsersActionTypes.ADD_USER).pipe(
    switchMap((
      (actions: UsersAction.AddUser) => {
        return this.userService.createUser(actions.payload).map(
          res => {
            return  new UsersAction.AddUserSuccess(res);
            }
        );
      }
    )
  ));
  @Effect() editUser$: Observable<Action> = this.actions$.ofType(UsersAction.UsersActionTypes.EDIT_USER).pipe(
    switchMap((
      (actions: UsersAction.EditUser) => {
        return this.userService.updateUser(actions.payload).map(
          res => new UsersAction.EditUserSuccess(res)
        );
      }
    )
  ));
  @Effect() deleteUser$: Observable<Action> = this.actions$.ofType(UsersAction.UsersActionTypes.DELETE_USER).pipe(
    switchMap((
      (actions: UsersAction.DeleteUser) => {
        return this.userService.deleteUser(actions.payload).map(
          res => {
           return new UsersAction.DeleteUserSuccess(actions.payload);
          }
        );
      }
    )
  ));
  constructor(
    private actions$: Actions,
    private userService: UserService
  ) {}
}
