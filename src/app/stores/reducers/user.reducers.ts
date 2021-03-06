import * as Actions from '../actions';
import { User } from '../../models/user';

export interface UserState {
    user: User;
    authenticated: boolean;
    register: boolean;
    error: string;
    admin: boolean;
    history: any;
    load: boolean;
}

const initialState: UserState = {
    user: null,
    authenticated: false,
    register: false,
    error: '',
    admin: false,
    history: [],
    load: false,
};

export function userReducer(state = initialState, action: Actions.UserActions ): UserState {
  switch (action.type) {
    case Actions.UserActionTypes.LOGIN: {
      return {
       ...state
      };
    }
    case Actions.UserActionTypes.LOGIN_SUCCESS: {
      return {
        ...state,
        user: action.payload,
        authenticated: true,
        admin: action.payload.MaLoaiNguoiDung === 'QuanTri' ? true : false
      };
    }
    case Actions.UserActionTypes.LOGIN_FAIL: {
      return {
        ...state,
        error: action.payload
      };
    }
    default: {
      return state;
    }
  }
}
export const login = (state: UserState) => state;
export const loginSuccess = (state: UserState) => state.authenticated;
export const getUser = (state: UserState) => state.user;
export const checkAdmin = (state: any) => state.user.admin;

