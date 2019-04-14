import { useContext } from 'react';
import AppContext from '../context/AppContext';

export const useLoader = () => {
  const context = useContext(AppContext);
  const { isShowLoader, showLoader, hideLoader } = context;

  return [
    isShowLoader, showLoader, hideLoader
  ];
}
