import { useReducer } from 'react';
import { userReducer } from '../reducers';
import { UserAction } from '../constants/ActionList';

export const useUser = () => {
  const [state, dispatch] = useReducer(userReducer, {});

  const userLogin = userLoginModel => {
    dispatch({ type: UserAction.USER_LOGIN, userLoginModel });
  }

  const userLogout = () => {
    dispatch({ type: UserAction.USER_LOGOUT });
  }

  return [{
    state,
    userLogin,
    userLogout,
  }];
}
