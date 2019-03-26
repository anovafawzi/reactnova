import React, { useState } from 'react';
import {
  Badge,
  Button,
  ButtonDropdown,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Col,
  Collapse,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Fade,
  Form,
  FormGroup,
  FormText,
  FormFeedback,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Label,
  Row,
} from 'reactstrap';
import NumberFormat from 'react-number-format';
import Datetime from 'react-datetime';
import moment from 'moment';

import 'react-dates/initialize';
// styles for react-dates
import 'react-dates/lib/css/_datepicker.css';
import {
  DateRangePicker,
  SingleDatePicker,
  DayPickerRangeController
} from 'react-dates';


// styles for react-datetime
import 'react-datetime/css/react-datetime.css';

const SampleForm = () => {
  const [timeout, setTimeOut] = useState(300);
  const [fadeIn, setFadeIn] = useState(true);
  const [collapse, setCollapse] = useState(true);

  const [reactDatesDate, setReactDatesDate] = useState({
    startDate: null,
    endDate: null
  });
  const [startDate, setStartDate] = useState(moment());
  const [endDate, setEndDate] = useState(moment());
  const [focusedInput, setFocusedInput] = useState(null);

  const toggle = () => {
    setCollapse(!collapse);
  }

  const toggleFade = () => {
    setFadeIn(!fadeIn);
  }

  const setDateRange = ({newStartDate, newEndDate}) => {
    console.log({newStartDate, newEndDate});
    setStartDate(newStartDate);
    setEndDate(newEndDate);
  }

  return (
    <React.Fragment>
      <div className="animated fadeIn">
        <Row>
          <Col xs="12" md="6">
            <Fade timeout={timeout} in={fadeIn}>
              <Card>
                <CardHeader>
                  <i className="fa fa-edit"></i>Formik Example
                  <div className="card-header-actions">
                    <Button color="link" className="card-header-action btn-setting"><i className="icon-settings"></i></Button>
                    <Button color="link" className="card-header-action btn-minimize" data-target="#collapseExample" onClick={toggle}><i className="icon-arrow-up"></i></Button>
                    <Button color="link" className="card-header-action btn-close" onClick={toggleFade}><i className="icon-close"></i></Button>
                  </div>
                </CardHeader>
                <Collapse isOpen={collapse} id="collapseExample">
                  <CardBody>
                    <Form className="form-horizontal">
                      <Row>
                        <Col xs="12">
                          <FormGroup>
                            <Label htmlFor="name">Simple textbox</Label>
                            <Input invalid type="text" id="name" placeholder="Enter your name" required />
                            <FormFeedback>Houston, we have a problem...</FormFeedback>
                            {/* OR USE THIS <div className="invalid-field">Houston, we have a problem...</div> */}
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                        <Col xs="12">
                          <FormGroup row>
                            <Col md="12">
                              <Label htmlFor="name">Simple textbox with prepended and appended icon</Label>
                              <InputGroup>
                                <InputGroupAddon addonType="prepend">
                                  <InputGroupText>
                                    <i className="fa fa-euro"></i>
                                  </InputGroupText>
                                </InputGroupAddon>
                                <Input invalid type="text" id="input3-group1" name="input3-group1" placeholder=".." />
                                <InputGroupAddon addonType="append">
                                  <InputGroupText>.00</InputGroupText>
                                </InputGroupAddon>
                              </InputGroup>
                              <div className="help-block invalid-field">Please provide a valid information</div>
                            </Col>
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                        <Col xs="12">
                          <FormGroup>
                            <Label htmlFor="name">Number textbox</Label>
                            <NumberFormat
                              className={'is-invalid form-control'}
                              value={2323.423}
                              displayType={'input'}
                              allowNegative={true}
                              disabled={false}
                              decimalScale={3}
                              // isNumericString={true}
                              prefix={'$'}
                              decimalSeparator={','}
                              thousandSeparator={'.'}
                              readOnly={false}
                              onValueChange={values => {
                                  console.log(values);
                              }}
                            />
                            <FormFeedback>Houston, we have a problem...</FormFeedback>
                            {/* OR USE THIS <div className="invalid-field">Houston, we have a problem...</div> */}
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                        <Col xs="12">
                          <FormGroup row>
                            <Col md="12">
                              <Label htmlFor="name">Number textbox with prepended and appended icon</Label>
                              <InputGroup>
                                <InputGroupAddon addonType="prepend">
                                  <InputGroupText>
                                    <i className="fa fa-euro"></i>
                                  </InputGroupText>
                                </InputGroupAddon>
                                <NumberFormat
                                  className={'is-invalid form-control'}
                                  value={2323}
                                  displayType={'input'}
                                  allowNegative={true}
                                  disabled={false}
                                  decimalScale={0}
                                  // isNumericString={true}
                                  // prefix={'$'}
                                  decimalSeparator={','}
                                  thousandSeparator={'.'}
                                  readOnly={false}
                                  onValueChange={values => {
                                      console.log(values);
                                  }}
                                />
                                <InputGroupAddon addonType="append">
                                  <InputGroupText>.00</InputGroupText>
                                </InputGroupAddon>
                              </InputGroup>
                              <div className="help-block invalid-field">Please provide a valid information</div>
                            </Col>
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                        <Col xs="12">
                          <FormGroup>
                            <Label htmlFor="name">Datetime picker</Label>
                            <Datetime
                              inputProps={{ name: 'date-name-prop', className: 'form-control is-invalid' }}
                              value={moment('01/07/2019')}
                              // className={touched ? (error ? 'is-invalid' : '') : ''}
                              onChange={param =>
                                  console.log(param)
                              }
                              dateFormat={'DD/MM/YYYY'}
                              timeFormat={null}
                              // isValidDate={setValidDate}
                              // defaultValue={setDefaultValue}
                            />
                            <div className="invalid-field">Houston, we have a problem...</div>
                            {/* OR USE THIS <div className="invalid-field">Houston, we have a problem...</div> */}
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                        <Col xs="12">
                          <FormGroup row>
                            <Col md="12">
                              <Label htmlFor="name">Datetime picker with prepended and appended icon</Label>
                              <InputGroup>
                                <InputGroupAddon addonType="prepend">
                                  <InputGroupText>
                                    <i className="fa fa-calendar"></i>
                                  </InputGroupText>
                                </InputGroupAddon>
                                <Datetime
                                  inputProps={{ name: 'date-name-prop', className: 'form-control is-invalid' }}
                                  value={moment('01/07/2019')}
                                  // className={touched ? (error ? 'is-invalid' : '') : ''}
                                  className={'rdt-datefield'}
                                  onChange={param =>
                                      console.log(param)
                                  }
                                  dateFormat={'DD/MM/YYYY'}
                                  timeFormat={null}
                                  // isValidDate={setValidDate}
                                  // defaultValue={setDefaultValue}
                                />
                                {/* <InputGroupAddon addonType="append">
                                  <InputGroupText>.00</InputGroupText>
                                </InputGroupAddon> */}
                              </InputGroup>
                              <div className="help-block invalid-field">Please provide a valid information</div>
                            </Col>
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                        <Col xs="12">
                          <FormGroup>
                            <Label htmlFor="name">Time picker</Label>
                            <Datetime
                              inputProps={{ name: 'date-name-prop', className: 'form-control is-invalid' }}
                              value={moment('11:59:35', 'HH:mm:ss')}
                              // className={touched ? (error ? 'is-invalid' : '') : ''}
                              onChange={param =>
                                  console.log(param)
                              }
                              dateFormat={false}
                              timeFormat={'HH:mm ss'}
                              // isValidDate={setValidDate}
                              // defaultValue={setDefaultValue}
                            />
                            <div className="invalid-field">Houston, we have a problem...</div>
                            {/* OR USE THIS <div className="invalid-field">Houston, we have a problem...</div> */}
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                        <Col xs="12">
                          <FormGroup row>
                            <Col md="12">
                              <Label htmlFor="name">Time picker with prepended and appended icon</Label>
                              <InputGroup>
                                <InputGroupAddon addonType="prepend">
                                  <InputGroupText>
                                    <i className="fa fa-clock-o"></i>
                                  </InputGroupText>
                                </InputGroupAddon>
                                <Datetime
                                  inputProps={{ name: 'date-name-prop', className: 'form-control is-invalid' }}
                                  value={moment('11:59:35', 'HH:mm:ss')}
                                  // className={touched ? (error ? 'is-invalid' : '') : ''}
                                  className={'rdt-datefield'}
                                  onChange={param =>
                                      console.log(param)
                                  }
                                  dateFormat={false}
                                  timeFormat={'HH:mm ss'}
                                  // isValidDate={setValidDate}
                                  // defaultValue={setDefaultValue}
                                />
                                {/* <InputGroupAddon addonType="append">
                                  <InputGroupText>.00</InputGroupText>
                                </InputGroupAddon> */}
                              </InputGroup>
                              <div className="help-block invalid-field">Please provide a valid information</div>
                            </Col>
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                        <Col xs="12">
                          <FormGroup>
                            <Label htmlFor="name">Date range picker</Label>
                            <br/>
                            <div className="drp-invalid-field">
                              <DateRangePicker
                                startDate={reactDatesDate.startDate} // momentPropTypes.momentObj or null,
                                endDate={reactDatesDate.endDate} // momentPropTypes.momentObj or null,
                                startDateId="myDateRangePickerStartId" // PropTypes.string.isRequired,
                                endDateId="myDateRangePickerEndId" // PropTypes.string.isRequired,
                                onDatesChange={({ startDate, endDate }) => {
                                  setReactDatesDate({
                                    startDate,
                                    endDate,
                                  })
                                }} // PropTypes.func.isRequired,
                                onFocusChange={newFocusedInput => setFocusedInput(newFocusedInput)} // PropTypes.func.isRequired,
                                focusedInput={focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
                                displayFormat={'DD/MM/YYYY'}
                              />
                            </div>
                            <div className="invalid-field">Houston, we have a problem...</div>
                          </FormGroup>
                        </Col>
                      </Row>

                      <FormGroup>
                        <Label htmlFor="prependedInput">Prepended text</Label>
                        <div className="controls">
                          <InputGroup className="input-prepend">
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>@</InputGroupText>
                            </InputGroupAddon>
                            <Input id="prependedInput" size="16" type="text" />
                          </InputGroup>
                          <p className="help-block">Here's some help text</p>
                        </div>
                      </FormGroup>
                      <FormGroup>
                        <Label htmlFor="appendedInput">Appended text</Label>
                        <div className="controls">
                          <InputGroup>
                            <Input id="appendedInput" size="16" type="text" />
                            <InputGroupAddon addonType="append">
                              <InputGroupText>.00</InputGroupText>
                            </InputGroupAddon>
                          </InputGroup>
                          <span className="help-block">Here's more help text</span>
                        </div>
                      </FormGroup>
                      <FormGroup>
                        <Label htmlFor="appendedPrependedInput">Append and prepend</Label>
                        <div className="controls">
                          <InputGroup className="input-prepend">
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>$</InputGroupText>
                            </InputGroupAddon>
                            <Input id="appendedPrependedInput" size="16" type="text" />
                            <InputGroupAddon addonType="append">
                              <InputGroupText>.00</InputGroupText>
                            </InputGroupAddon>
                          </InputGroup>
                        </div>
                      </FormGroup>
                      <FormGroup>
                        <Label htmlFor="appendedInputButton">Append with button</Label>
                        <div className="controls">
                          <InputGroup>
                            <Input id="appendedInputButton" size="16" type="text" />
                            <InputGroupAddon addonType="append">
                              <Button color="secondary">Go!</Button>
                            </InputGroupAddon>
                          </InputGroup>
                        </div>
                      </FormGroup>
                      <FormGroup>
                        <Label htmlFor="appendedInputButtons">Two-button append</Label>
                        <div className="controls">
                          <InputGroup>
                            <Input id="appendedInputButtons" size="16" type="text" />
                            <InputGroupAddon addonType="append">
                              <Button color="secondary">Search</Button>
                              <Button color="secondary">Options</Button>
                            </InputGroupAddon>
                          </InputGroup>
                        </div>
                      </FormGroup>
                      <div className="form-actions">
                        <Button type="submit" color="primary">Save changes</Button>
                        <Button color="secondary">Cancel</Button>
                      </div>
                    </Form>
                  </CardBody>
                </Collapse>
              </Card>
            </Fade>
          </Col>
        </Row>
      </div>
    </React.Fragment>
  );
}

export default SampleForm;
