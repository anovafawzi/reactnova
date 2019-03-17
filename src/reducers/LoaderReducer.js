import { LoaderAction } from '../constants/ActionList';

const showLoader = (isShowLoader, state) => {
  return { ...state, isShowLoader };
}

const hideLoader = (isShowLoader, state) => {
  return { ...state, isShowLoader };
}

export const loaderReducer = (state, action) => {
  switch (action.type) {
    case LoaderAction.SHOW_LOADER:
      return showLoader(action.isShowLoader, state);
    case LoaderAction.HIDE_LOADER:
      return hideLoader(action.isShowLoader, state);
    default:
      return state;
  }
};
