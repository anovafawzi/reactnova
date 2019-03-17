import React from 'react';

export default React.createContext({
  isShowLoader: false,

  loggedInUser: {},
  userLogin: userLoginModel => {},
  userLogout: () => {},

  getSampleData: () => {},
  sampleData: {},
});
