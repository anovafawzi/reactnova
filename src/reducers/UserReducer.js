import { UserAction } from '../constants/ActionList';

const userLogin = (userLoginModel, state) => {
  return { ...state, userLoginModel };
}

const userLogout = (state) => {
  return { ...state };
}

export const userReducer = (state, action) => {
  switch (action.type) {
    case UserAction.USER_LOGIN:
      return userLogin(action.userLoginModel, state);
    case UserAction.USER_LOGOUT:
      return userLogout(state);
    default:
      return state;
  }
};
