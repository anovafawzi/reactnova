import { useContext } from 'react';
import AppContext from '../context/AppContext';

export const useUser = () => {
  const context = useContext(AppContext);
  const { loggedInUser, userLogin, userLogout } = context;

  return [
    loggedInUser, userLogin, userLogout
  ];
}
