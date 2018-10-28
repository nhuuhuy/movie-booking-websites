import * as Actions from '../actions';
import { User } from '../../../models/user';

export interface UsersState {
  users: User[];
  loading: boolean;
  user: User;
  currentUser: User;
  error: any;
  admin: boolean;
}

const initialState: UsersState = {
  users: [],
  loading: false,
  user: new User(),
  currentUser: new User(),
  error: null,
  admin: false,
};

export function usersReducer(
  state = initialState,
  action: Actions.UsersActions
): UsersState {
  switch (action.type) {
    case Actions.UsersActionTypes.GET_USERS: {
      return {
        ...state,
        loading: true
      };
    }
    case Actions.UsersActionTypes.GET_USERS_SUCCESS: {
      return {
        ...state,
        loading: false,
        users: action.payload
      };
    }
    case Actions.UsersActionTypes.ADD_USER_SUCCESS: {
      return {
        ...state,
        users: [...state.users, action.payload]
      };
    }
    case Actions.UsersActionTypes.EDIT_USER_SUCCESS: {
      return {
        ...state,
        users: state.users.map(item => {
          return item.TaiKhoan === action.payload.TaiKhoan
            ? Object.assign({}, item, action.payload)
            : item;
        })
      };
    }
    case Actions.UsersActionTypes.DELETE_USER_SUCCESS: {
      return {
        ...state,
        users: state.users.filter(user => user.TaiKhoan !== action.payload)
      };
    }
    case Actions.UsersActionTypes.SELECT_USER: {
      return {
        ...state,
        user: action.payload
      };
    }
    case Actions.UsersActionTypes.LOGIN: {
      return {
        ...state
      };
    }
    case Actions.UsersActionTypes.LOGIN_SUCCESS: {
      return {
        ...state,
        currentUser: action.payload,
        admin: action.payload.MaLoaiNguoiDung === 'QuanTri' ? true : false
      };
    }
    case Actions.UsersActionTypes.LOGIN_FAIL: {
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

export const getUsers = (state: UsersState) => state.loading;
export const getUsersSuccess = (state: UsersState) => state.users;
export const getUser = (state: UsersState) => state.currentUser;
export const checkAdmin = (state: UsersState) => state.admin;
