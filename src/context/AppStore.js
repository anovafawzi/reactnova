import React from 'react';

// imports all context here
import AppContext from './AppContext';

// imports all reducers and types here
// import { userReducer, loaderReducer, sampleReducer } from '../reducers';
// import { UserAction, SampleAction, LoaderAction } from '../constants/ActionList';

// import custom hooks
import { useUser, useLoader, useSampleData } from '../hooks';

const AppStore = props => {
  // use all reducers here
  //const [userState, dispatchUser] = useReducer(userReducer, {});
  //const [loaderState, dispatchLoader] = useReducer(loaderReducer, {});
  //const [sampleDataState, dispatchSampleData] = useReducer(sampleReducer, {});

  // import all custom hooks for all context domain here
  const [loaderObject] = useLoader();
  const [userObject] = useUser();
  const [sampleDataObject] = useSampleData(loaderObject);

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
        isShowLoader: loaderObject.state.isShowLoader,

        // user domain
        loggedInUser: userObject.state.userLoginModel,
        userLogin: userObject.userLogin,
        userLogout: userObject.userLogout,

        // sample data domain
        getSampleData: sampleDataObject.getSampleData,
        sampleData: sampleDataObject.state.sampleData,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export default AppStore;
