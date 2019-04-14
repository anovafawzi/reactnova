import React from 'react';

// imports all context here
import AppContext from './AppContext';

// imports all reducers and types here
// import { userReducer, loaderReducer, sampleReducer } from '../reducers';
// import { UserAction, SampleAction, LoaderAction } from '../constants/ActionList';

// import actions
import {
  useUserActions,
  useLoaderActions,
  useSampleDataActions
} from '../actions';

const AppStore = props => {
  // use all reducers here
  //const [userState, dispatchUser] = useReducer(userReducer, {});
  //const [loaderState, dispatchLoader] = useReducer(loaderReducer, {});
  //const [sampleDataState, dispatchSampleData] = useReducer(sampleReducer, {});

  // import all custom hooks for all context domain here
  const [LoaderActions] = useLoaderActions();
  const [UserActions] = useUserActions(LoaderActions);
  const [SampleDataActions] = useSampleDataActions(LoaderActions);

  // put all actions here, and dispatch!
  // const userLogin = userLoginModel => {
  //   dispatchUser({ type: UserAction.USER_LOGIN, userLoginModel });
  // }

  // const userLogout = () => {
  //   dispatchUser({ type: UserAction.USER_LOGOUT });
  // }

  // const showLoader = () => {
  //   dispatchLoader({ type: LoaderAction.SHOW_LOADER, isShowLoader: true });
  // }

  // const hideLoader = () => {
  //   dispatchLoader({ type: LoaderAction.HIDE_LOADER, isShowLoader: false });
  // }

  // const getSampleData = () => {
  //   loaderObject.showLoader();
  //   Api.get('people/')
  //     .then(response => {
  //       dispatchSampleData({ type: SampleAction.GET_SAMPLE_DATA, sampleData: response });
  //       loaderObject.hideLoader();
  //     })
  //     .catch(error => {
  //       console.log(error);
  //       loaderObject.hideLoader();
  //     });
  // }

  return (
    <AppContext.Provider
      value={{
        // loader domain
        isShowLoader: LoaderActions.state.isShowLoader,
        showLoader: LoaderActions.showLoader,
        hideLoader: LoaderActions.hideLoader,

        // user domain
        loggedInUser: UserActions.state.userLoginModel,
        userLogin: UserActions.userLogin,
        userLogout: UserActions.userLogout,

        // sample data domain
        getSampleData: SampleDataActions.getSampleData,
        sampleData: SampleDataActions.state.sampleData,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export default AppStore;
