import { Action } from '@ngrx/store';
import { User } from '../../../models/user';

/**
 * For each action type in an action group, make a simple
 * enum object for all of this group's action types.
 */
export enum UsersActionTypes {
  GET_USERS = '[Users] Get users',
  GET_USERS_SUCCESS = '[Users] Get users success',
  ADD_USER = '[Users] Add user',
  ADD_USER_SUCCESS = '[Users] Add user success',
  EDIT_USER = '[Users] Edit user',
  EDIT_USER_SUCCESS = '[Users] Edit user success',
  DELETE_USER = '[Users] Delte user',
  DELETE_USER_SUCCESS = '[Users] Delte user success',
  SELECT_USER = '[Users] Select user',
  LOGIN = '[User] login',
  LOGIN_SUCCESS = '[User] login success',
  LOGIN_FAIL = '[User] login fail',
  LOGOUT = '[User] logout',
}

/**
 * Every action is comprised of at least a type and an optional
 * payload. Expressing actions as classes enables powerful
 * type checking in reducer functions.
 */
export class GetUsers implements Action {
  readonly type = UsersActionTypes.GET_USERS;

  constructor() { }
}

export class GetUSersSuccess implements Action {
  readonly type = UsersActionTypes.GET_USERS_SUCCESS;

  constructor(public payload: User[]) { }
}

export class AddUser implements Action {
  readonly type = UsersActionTypes.ADD_USER;

  constructor(public payload: User) { }
}

export class AddUserSuccess implements Action {
  readonly type = UsersActionTypes.ADD_USER_SUCCESS;

  constructor(public payload: User) { }
}
export class EditUser implements Action {
  readonly type = UsersActionTypes.EDIT_USER;

  constructor(public payload: User) { }
}

export class EditUserSuccess implements Action {
  readonly type = UsersActionTypes.EDIT_USER_SUCCESS;

  constructor(public payload: User) { }
}
export class DeleteUser implements Action {
  readonly type = UsersActionTypes.DELETE_USER;

  constructor(public payload: string) { }
}

export class DeleteUserSuccess implements Action {
  readonly type = UsersActionTypes.DELETE_USER_SUCCESS;

  constructor(public payload: string) { }
}
export class SelectUser implements Action {
  readonly type = UsersActionTypes.SELECT_USER;

  constructor(public payload: User) { }
}
export class Login implements Action {
  readonly type = UsersActionTypes.LOGIN;

  constructor(public payload: User) { }
}
export class LoginSuccess implements Action {
  readonly type = UsersActionTypes.LOGIN_SUCCESS;

  constructor(public payload: User) { }
}
export class LoginFail implements Action {
  readonly type = UsersActionTypes.LOGIN_FAIL;
  constructor(public payload: string) { }
}
export class Logout implements Action {
  readonly type = UsersActionTypes.LOGOUT;

  constructor() { }
}
/**
 * Export a type alias of all actions in this action group
 * so that reducers can easily compose action types
 */
export type UsersActions
            = GetUsers
            | GetUSersSuccess
            | AddUser
            | AddUserSuccess
            | EditUser
            | EditUserSuccess
            | DeleteUser
            | DeleteUserSuccess
            | SelectUser
            | Logout
            | Login
            | LoginSuccess
            | LoginFail;
