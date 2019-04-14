# Custom Hooks

This folder contains all the custom hooks that consume the store variable (doesn't matter if its from redux store or react context API).

## But why?

I'm planning to make the same characteristics which is when you need a part of store variable, just load from the domain that you needed only. Probably example will help.

This is UserHooks.js where we can import useUser to use it
```react
import { useContext } from 'react';
import AppContext from '../context/AppContext';

export const useUser = () => {
  const context = useContext(AppContext);
  const { loggedInUser, userLogin, userLogout } = context;

  return [
    loggedInUser, userLogin, userLogout
  ];
}
```
As you can see, we only load the current state and methods that belongs to the user domain. And to use it, we can simply import the useUser hooks like here in Login.js
```react
// load user hooks
import { useUser } from '../../../hooks';

const Login = () => {
    const [loggedInUser, userLogin, userLogout] = useUser(); // IMPORT HERE

    useEffect(() => {
      console.log(loggedInUser); // WE CAN GET THE GLOBAL STATE VALUE HERE
    }, []);

    return (
      <div className="app flex-row align-items-center">
        <Container>
          <Row className="justify-content-center">
            <Col md="8">
              <CardGroup>
                <Card className="p-4">
                  <CardBody>
                    <Formik
                        onSubmit={(values, actions) => {
                            userLogin(values); // WE CALL ONE OF THE METHOD HERE
                        }}
                        ...
```

## Redux usage

I will create the redux example on the redux branch. But the basic is the same, just edit the UserHooks.js and load it from redux store.
