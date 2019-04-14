import { useReducer } from 'react';
import { userReducer } from '../reducers';
import { UserAction } from '../constants/ActionList';

export const useUserActions = (loader) => {
  const [state, dispatch] = useReducer(userReducer, {});

  const userLogin = userLoginModel => {
    loader.showLoader();

    // do login here
    dispatch({ type: UserAction.USER_LOGIN, userLoginModel });

    loader.hideLoader();
  }

  const userLogout = () => {
    loader.showLoader();

    // do logout here
    dispatch({ type: UserAction.USER_LOGOUT });

    loader.hideLoader();
  }

  return [{
    state,
    userLogin,
    userLogout,
  }];
}
