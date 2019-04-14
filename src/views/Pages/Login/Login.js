import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button, Card, CardBody, CardGroup, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row, FormFeedback } from 'reactstrap';
import intl from 'react-intl-universal';
import { Formik, ErrorMessage } from 'formik';
import * as Yup from 'yup';

// load user hooks
import { useUser } from '../../../hooks';

const loginSchema = Yup.object().shape({
  username: Yup.string()
    .email('Invalid email')
    .required('Required'),
  password: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
});

const Login = () => {
    const [loggedInUser, userLogin, userLogout] = useUser();

    useEffect(() => {
      console.log(loggedInUser);
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
                        // initialValues={{ username: 'test@test.com', password: 'asdasdasd' }}
                        onSubmit={(values, actions) => {
                            // setTimeout(() => {
                            //     alert(JSON.stringify(values, null, 2));
                            //     actions.setSubmitting(false);
                            //     }, 1000);
                            console.log(values);
                            userLogin(values);
                        }}
                        validationSchema={loginSchema}
                        render={props => (
                            <Form onSubmit={props.handleSubmit}>
                                <h1>{intl.get('label.login')}</h1>
                                <p className="text-muted">{intl.get('label.signInToYourAccount')}</p>
                                <InputGroup className="mb-3">
                                  <InputGroupAddon addonType="prepend">
                                      <InputGroupText>
                                      <i className="icon-user"></i>
                                      </InputGroupText>
                                  </InputGroupAddon>
                                  <Input
                                      type="text"
                                      placeholder={intl.get('field.emailAddress')}
                                      autoComplete="username"
                                      value={props.values.username}
                                      name="username"
                                      onChange={props.handleChange}
                                      invalid={props.errors.username !== undefined}
                                  />
                                  <FormFeedback className="help-block">{props.errors.username}</FormFeedback>
                                </InputGroup>
                                <InputGroup className="mb-4">
                                  <InputGroupAddon addonType="prepend">
                                      <InputGroupText>
                                      <i className="icon-lock"></i>
                                      </InputGroupText>
                                  </InputGroupAddon>
                                  <Input
                                      type="password"
                                      placeholder={intl.get('field.password')}
                                      autoComplete="current-password"
                                      value={props.values.password}
                                      name="password"
                                      onChange={props.handleChange}
                                      invalid={props.errors.password !== undefined}
                                  />
                                  <FormFeedback className="help-block">{props.errors.password}</FormFeedback>
                                </InputGroup>
                                <Row>
                                <Col xs="6">
                                    <Button color="primary" type="submit" className="px-4">{intl.get('label.login')}</Button>
                                </Col>
                                <Col xs="6" className="text-right">
                                    <Button color="link" className="px-0">{intl.get('label.forgotPassword')}</Button>
                                </Col>
                                </Row>
                            </Form>
                        )}
                    />
                  </CardBody>
                </Card>
                <Card className="text-white bg-primary py-5 d-md-down-none" style={{ width: '44%' }}>
                  <CardBody className="text-center">
                    <div>
                      <h2>Sign up</h2>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua.</p>
                      <Link to="/register">
                        <Button color="primary" className="mt-3" active tabIndex={-1}>Register Now!</Button>
                      </Link>
                    </div>
                  </CardBody>
                </Card>
              </CardGroup>
            </Col>
          </Row>
        </Container>
      </div>
    );
}

export default Login;
