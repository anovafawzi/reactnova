import { useReducer } from 'react';
import { loaderReducer } from '../reducers';
import { LoaderAction } from '../constants/ActionList';

export const useLoaderActions = () => {
  const [state, dispatch] = useReducer(loaderReducer, {});

  const showLoader = () => {
    dispatch({ type: LoaderAction.SHOW_LOADER, isShowLoader: true });
  }

  const hideLoader = () => {
    dispatch({ type: LoaderAction.HIDE_LOADER, isShowLoader: false });
  }

  return [{
    state,
    showLoader,
    hideLoader,
  }];
}
