import { Injectable } from '@angular/core';
import { Action, Store } from '@ngrx/store';
import { User } from '../../models/user';

/**
 * For each action type in an action group, make a simple
 * enum object for all of this group's action types.
 */
export enum UserActionTypes {
  LOGIN = '[User] login',
  LOGIN_SUCCESS = '[User] login success',
  LOGIN_FAIL = '[User] login fail',
  LOGOUT = '[User] logout',
  REGISTER = '[User] register',
  REGISTER_SUCCESS = '[User] register success',
  GET_HISTORY = '[User] get history',
  GET_HISTORY_SUCCESS = '[User] get history success',
  UPDATE_PROFILE = '[User] update profile',
  UPDATE_PROFILE_SUCCESS = '[User] update profile success',
  UPDATE_PROFILE_FAIL = '[User] update profile fail'

}

/**
 * Every action is comprised of at least a type and an optional
 * payload. Expressing actions as classes enables powerful
 * type checking in reducer functions.
 */
export class Login implements Action {
  readonly type = UserActionTypes.LOGIN;

  constructor(public payload: User) { }
}
export class LoginSuccess implements Action {
  readonly type = UserActionTypes.LOGIN_SUCCESS;

  constructor(public payload: User) { }
}
export class LoginFail implements Action {
  readonly type = UserActionTypes.LOGIN_FAIL;
  constructor(public payload: string) { }
}
export class Register implements Action {
  readonly type = UserActionTypes.REGISTER;

  constructor(public payload: any) { }
}
export class RegisterSuccess implements Action {
  readonly type = UserActionTypes.REGISTER_SUCCESS;

  constructor() { }
}
export class Logout implements Action {
  readonly type = UserActionTypes.LOGOUT;

  constructor() { }
}
export class GetHistory implements Action {
  readonly type = UserActionTypes.GET_HISTORY;

  constructor(public payload: string) { }
}
export class GetHistorySuccess implements Action {
  readonly type = UserActionTypes.GET_HISTORY_SUCCESS;

  constructor(public payload: any) { }
}
export class UpdateProfile implements Action {
  readonly type = UserActionTypes.UPDATE_PROFILE;

  constructor(public payload: User) { }
}
export class UpdateProfileSuccess implements Action {
  readonly type = UserActionTypes.UPDATE_PROFILE_SUCCESS;

  constructor(public payload: User) { }
}
export class UpdateProfileFail implements Action {
  readonly type = UserActionTypes.UPDATE_PROFILE_FAIL;

  constructor() { }
}
/**
 * Export a type alias of all actions in this action group
 * so that reducers can easily compose action types
 */
export type UserActions
            = Login
            | LoginSuccess
            | LoginFail
            | Register
            | RegisterSuccess
            | Logout
            | GetHistory
            | GetHistorySuccess
            | UpdateProfile
            | UpdateProfileSuccess
            | UpdateProfileFail
            ;
