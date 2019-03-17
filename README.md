# Reactnova

React base for working web application, it use several library used:
- Latest react version, mainly use [Hooks!]
- [CoreUI for React]
- State management: [Context API] or Redux (Work in progress)
- Form management: [Formik] or [Final-form]
- REST: [Axios]
- Layout: [SASS]
- I18n: [React-intl-universal]

### Installation

We used Yarn or NPM to install, we use Yarn as example here.

On root folder, install the dependencies and devDependencies and start the server.

```sh
cd reactnova
yarn install
yarn start
```

### Build for production

```sh
yarn build
```

### Run test

We use enzyme now, later we will add [Cypress] as well

```sh
yarn test
```

### Development

This repository still on development, `master` branch basically use context API for the state management, and `master-redux` using Redux (d'oh).

## Context API explanation (equivalent of redux)

### Store
Store here basically created the application context provider, to make it simple I only make one context for the whole application. Because of that we need to listed all the state and function that will be used in the entire application here. To make it more tidy, each domain will be created its own hooks and loaded on this store file `AppStore.js`. These are the initialization.

```react
import React from 'react';

// imports all context here
import AppContext from './AppContext';

// import custom hooks
import { useUser, useLoader, useSampleData } from '../hooks';

const AppStore = props => {
  // import all custom hooks for all context domain here
  const [loaderObject] = useLoader();
  const [userObject] = useUser();
  const [sampleDataObject] = useSampleData(loaderObject);

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
```

### Actions
Action on this application will look like action that based on `Redux`, however we will make it as a custom hooks and will be loaded on the store `AppStore.js`. This is the example for `useUser` custom action hooks.

```react
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
```

### Reducers
This is pretty straightforward, we can use reducer to switch between the action type and pass the state value.

```react
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
```

### combineReducers
To explain the combineReducers and what the equivalent with the app, it basically separated by context. There are some example to combine the multiple context just like this.

```react
const root = (
  <MyContext.Provider value='world'>
    <ThemeContext.Provider value='red'>
      <OuterComponent />
    </ThemeContext.Provider>
  </MyContext.Provider>
)
```

But I'm not so dig into that, so in the `AppStore.js` you can see the context only one but use multiple reducers (custom hooks) to make it more consise and manageable.

### Custom hooks for separating context domain

In `hooks` folder,  there are currently three hooks created.
| Hooks | Import | Description |
| ------ | ------ | ------ |
| Loader Hooks | `useLoader` | To connect with application loading spinner |
| User Hooks | `useUser` | All methods related with user domain (login, logout, register, etc) |
| Sample Data Hooks | `useSampleData` | Example on simple data context domain |

## What's included

Beside the default files from [CoreUI for React], I have extend to my own folder management to manage the context, store, reducers, locales, constants, etc. You'll see something like this:

```
reactnova
├── public/          #static files
│   ├── assets/      #assets
│   └── index.html   #html temlpate
│
├── src/             #project root
│   ├── components/  #custom components (custom)
│   ├── constants/   #constants files (custom)
│   ├── context/     #hold all contexts (custom)
│   ├── hooks/       #custom hooks (custom)
│   ├── lib/         #library extend (custom)
│   ├── locales/     #locales files (custom)
│   ├── reducers/    #reducers files (custom)
│   ├── containers/  #container source
│   ├── scss/        #user scss/css source
│   ├── views/       #views source
│   ├── AppContainer.js #container to separate useContext call with the main App (custom)
│   ├── App.js
│   ├── App.test.js
│   ├── index.js
│   ├── _nav.js      #sidebar config
│   └── routes.js    #routes config
│
└── package.json
```

## Todos

 - Add `redux` version
 - Complete `formik` example
 - Add `final-form` example
 - Add `cypress` example
 - Add more documentation

### Author
Contact me at anovafawzi@gmail.com or go to my [website].

   [Hooks!]: <https://reactjs.org/docs/hooks-intro.html>
   [CoreUI for React]: <https://coreui.io/react/>
   [Context API]: <https://reactjs.org/docs/context.html>
   [Formik]: <https://jaredpalmer.com/formik/>
   [Final-form]: <https://github.com/final-form/react-final-form>
   [Axios]: <https://github.com/axios/axios>
   [SASS]: <https://sass-lang.com/>
   [Cypress]: <https://www.cypress.io/>
   [React-intl-universal]: <https://github.com/alibaba/react-intl-universal>
   [website]: <https://anova.id>
