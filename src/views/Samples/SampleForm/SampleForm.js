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
import Select from 'react-select';
import { AppSwitch } from '@coreui/react'
import * as Yup from 'yup';

// react-final-form
import { Form as FinalForm } from 'react-final-form';
import {
  SimpleInput,
  PasswordTextInput,
  NumberInput,
  DateTimeInput,
  DateRangeInput,
  SelectInput,
} from '../../../components/FieldWrapper/FinalForm/FinalForm';

// schema validator
import { ValidateSchema } from '../../../helpers';

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

// load components
import { PasswordInput } from '../../../components';

// yup schema
const sampleFormSchema = Yup.object().shape({
  firstName: Yup.string()
    .required('Required'),
  lastName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  passwordTest: Yup.string()
    .required('Required'),
  otherName: Yup.string()
    .required('Required'),
  theOtherName: Yup.string()
    .required('Required'),
  numberTest: Yup.string()
    .required('Required'),
  dateTest: Yup.string()
    .required('Required'),
  timeTest: Yup.string()
    .required('Required'),
  selectTest: Yup.string()
    .required('Required'),
  selectMultiTest: Yup.string()
    .required('Required'),
});

const SampleForm = () => {
  const [timeout, setTimeOut] = useState(300);
  const [fadeIn, setFadeIn] = useState(true);
  const [collapse, setCollapse] = useState(true);

  // react-dates
  const [reactDatesDate, setReactDatesDate] = useState({
    startDate: null,
    endDate: null
  });
  const [focusedInput, setFocusedInput] = useState(null);

  // react-select
  const [selectedOption, setSelectedOption] = useState(null);
  const [options, setOptions] = useState([
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
  ]);

  const toggle = () => {
    setCollapse(!collapse);
  }

  const toggleFade = () => {
    setFadeIn(!fadeIn);
  }

  const handleSelectChange = (selectedOption) => {
    setSelectedOption(selectedOption);
    console.log(`Option selected:`, selectedOption);
  }

  // final-form submit example
  const onHandleFinalFormSubmit = values => {
    console.log(values);
  }

  return (
    <React.Fragment>
      <div className="animated fadeIn">
        <Row>
          <Col xs="12" md="4">
            <Fade timeout={timeout} in={fadeIn}>
              <Card>
                <CardHeader>
                  <i className="fa fa-edit"></i>Basic Rendering (without form validation)
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
                            <Label htmlFor="name">Simple password</Label>
                            <PasswordInput invalid id="passwordExample" name="passwordExample" placeholder="Enter password" required />
                            <div className="invalid-field">Houston, we have a problem...</div>
                            {/* <FormFeedback>Houston, we have a problem...</FormFeedback> */}
                            {/* OR USE THIS <div className="invalid-field">Houston, we have a problem...</div> */}
                          </FormGroup>
                        </Col>
                      </Row>
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
                      <Row>
                        <Col xs="12">
                          <FormGroup>
                            <Label htmlFor="name">Select (searchable, multi value)</Label>
                            <Select
                              classNamePrefix={'invalid-field'}
                              value={selectedOption}
                              onChange={handleSelectChange}
                              options={options}
                              isMulti
                              isClearable
                              isSearchable
                              // theme={(theme) => ({
                              //   ...theme,
                              //   borderRadius: 0,
                              //   colors: {
                              //   ...theme.colors,
                              //     neutral50: 'hotpink',
                              //   },
                              // })}
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
                              <Label htmlFor="name">Select (searchable, multi value) with prepended and appended icon</Label>
                              <InputGroup>
                                <InputGroupAddon addonType="prepend">
                                  <InputGroupText>
                                    <i className="fa fa-clock-o"></i>
                                  </InputGroupText>
                                </InputGroupAddon>
                                <Select
                                  className={'rs-group'}
                                  classNamePrefix={'invalid-field'}
                                  value={selectedOption}
                                  onChange={handleSelectChange}
                                  options={options}
                                  isMulti
                                  isClearable
                                  isSearchable
                                  // theme={(theme) => ({
                                  //   ...theme,
                                  //   borderRadius: 0,
                                  //   colors: {
                                  //   ...theme.colors,
                                  //     neutral50: 'hotpink',
                                  //   },
                                  // })}
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
                            <Label htmlFor="name">Autocomplete</Label>
                            <Select
                              classNamePrefix={'invalid-field'}
                              value={selectedOption}
                              onChange={handleSelectChange}
                              options={options}
                              isSearchable
                              // theme={(theme) => ({
                              //   ...theme,
                              //   borderRadius: 0,
                              //   colors: {
                              //   ...theme.colors,
                              //     neutral50: 'hotpink',
                              //   },
                              // })}
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
                              <Label htmlFor="name">Autocomplete with prepended and appended icon</Label>
                              <InputGroup>
                                <InputGroupAddon addonType="prepend">
                                  <InputGroupText>
                                    <i className="fa fa-clock-o"></i>
                                  </InputGroupText>
                                </InputGroupAddon>
                                <Select
                                  className={'rs-group'}
                                  classNamePrefix={'invalid-field'}
                                  value={selectedOption}
                                  onChange={handleSelectChange}
                                  options={options}
                                  isSearchable
                                  // theme={(theme) => ({
                                  //   ...theme,
                                  //   borderRadius: 0,
                                  //   colors: {
                                  //   ...theme.colors,
                                  //     neutral50: 'hotpink',
                                  //   },
                                  // })}
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
                          <FormGroup row>
                            <Col md="2">
                              <AppSwitch className={'mx-1'} variant={'3d'} color={'primary'} defaultChecked label dataOn={'\u2713'} dataOff={'\u2715'} />
                            </Col>
                            <Col md="10">
                              <Label htmlFor="name">Switch</Label>
                            </Col>
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                        <Col xs="12">
                          <FormGroup check inline>
                            <Input className="form-check-input form-checkbox" type="checkbox" id="inline-checkbox1" name="inline-checkbox1" value="option1" />
                            <Label className="form-check-label" check htmlFor="inline-checkbox1">Checkbox example</Label>
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                        <Col xs="12">
                          <FormGroup check inline>
                            <Input className="form-check-input form-checkbox" type="checkbox" id="inline-checkbox1" name="inline-checkbox1" value="option1" disabled />
                            <Label className="form-check-label" check htmlFor="inline-checkbox1">Checkbox example</Label>
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                        <Col xs="12">
                          <FormGroup check inline>
                            <Input className="form-check-input form-radio" type="radio" id="inline-radio1" name="inline-radio1" value="option2" />
                            <Label className="form-check-label" check htmlFor="inline-radio1">Radio example</Label>
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                        <Col xs="12">
                          <FormGroup check inline>
                            <Input className="form-check-input form-radio" type="radio" id="inline-radio1" name="inline-radio1" value="option2" disabled />
                            <Label className="form-check-label" check htmlFor="inline-radio1">Radio example</Label>
                          </FormGroup>
                        </Col>
                      </Row>

                      {/* <FormGroup>
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
                      </FormGroup> */}
                      <div className="form-actions">
                        <Button type="submit" color="primary">Save changes</Button>
                        &nbsp;
                        <Button color="secondary">Cancel</Button>
                      </div>
                    </Form>
                  </CardBody>
                </Collapse>
              </Card>
            </Fade>
          </Col>
          <Col xs="12" md="4">
            <Fade timeout={timeout} in={fadeIn}>
              <Card>
                <CardHeader>
                  <i className="fa fa-edit"></i>Final Form Example
                  <div className="card-header-actions">
                    <Button color="link" className="card-header-action btn-setting"><i className="icon-settings"></i></Button>
                    <Button color="link" className="card-header-action btn-minimize" data-target="#collapseExample" onClick={toggle}><i className="icon-arrow-up"></i></Button>
                    <Button color="link" className="card-header-action btn-close" onClick={toggleFade}><i className="icon-close"></i></Button>
                  </div>
                </CardHeader>
                <Collapse isOpen={collapse} id="collapseExample">
                  <CardBody>
                    <FinalForm
                      className="form-horizontal"
                      validate={values => ValidateSchema(values, sampleFormSchema)}
                      onSubmit={onHandleFinalFormSubmit}
                      initialValues={{
                        dateRangeTest: {
                          // startDate: '01/05/2019',
                          // endDate: '05/05/2019',
                          startDate: moment(),
                          endDate: moment()
                        },
                        selectTest: 'strawberry',
                        selectMultiTest: ['strawberry', 'vanilla'],
                      }}
                      render={({handleSubmit, form, submitting, pristine, values}) => (
                        <form onSubmit={handleSubmit}>
                          <SimpleInput
                            name="firstName"
                            type="text"
                            label="First Name"
                            placeholder="First Name"
                          />
                          <SimpleInput
                            name="lastName"
                            type="text"
                            label="Last Name"
                            placeholder="Last Name"
                            isInline
                            isRequired
                          />
                          <PasswordTextInput
                            name="passwordTest"
                            label="Password"
                            placeholder="Password"
                            isInline
                            isRequired
                          />
                          <SimpleInput
                            name="otherName"
                            type="text"
                            label="Other Name"
                            placeholder="Other Name"
                            isAppendIcon
                            isPrependTextHtml={false}
                            prependText={'$'}
                            isAppendTextHtml={false}
                            appendText={'.00'}
                          />
                          <SimpleInput
                            name="theOtherName"
                            type="text"
                            label="The Other Name"
                            placeholder="The Other Name"
                            isInline
                            isRequired
                            isAppendIcon
                            isPrependTextHtml
                            prependText={'<i class="fa fa-euro"></i>'}
                            isAppendTextHtml
                            appendText={'<i class="fa fa-euro"></i>'}
                          />
                          <NumberInput
                            name="numberTest"
                            label="Number test"
                            placeholder="Number test"
                            prefix={'$$'}
                          />
                          <DateTimeInput
                            name="dateTest"
                            label="Date test"
                            placeholder="Date test"
                            isDate
                          />
                          <DateTimeInput
                            name="timeTest"
                            label="Time test"
                            placeholder="Time test"
                            isTime
                          />
                          <DateRangeInput
                            name="dateRangeTest"
                            label="Date Range test"
                          />
                          <SelectInput
                            name="selectTest"
                            label="Select single value test"
                            isRequired
                            options={[
                              { value: 'chocolate', label: 'Chocolate' },
                              { value: 'strawberry', label: 'Strawberry' },
                              { value: 'vanilla', label: 'Vanilla' }
                            ]}
                          />
                          <SelectInput
                            name="selectMultiTest"
                            label="Select multiple value test"
                            isRequired
                            options={[
                              { value: 'chocolate', label: 'Chocolate' },
                              { value: 'strawberry', label: 'Strawberry' },
                              { value: 'vanilla', label: 'Vanilla' }
                            ]}
                            isMulti
                          />
                          <div className="form-actions">
                            <Button type="submit" color="primary">Save changes</Button>
                            &nbsp;
                            <Button color="secondary">Cancel</Button>
                          </div>
                        </form>
                      )}
                    />

                  </CardBody>
                </Collapse>
              </Card>
            </Fade>
          </Col>
          <Col xs="12" md="4">
            <Fade timeout={timeout} in={fadeIn}>
              <Card>
                <CardHeader>
                  <i className="fa fa-edit"></i>Formik
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
                            <Label htmlFor="name">Simple password</Label>
                            <PasswordInput invalid id="passwordExample" name="passwordExample" placeholder="Enter password" required />
                            <div className="invalid-field">Houston, we have a problem...</div>
                            {/* <FormFeedback>Houston, we have a problem...</FormFeedback> */}
                            {/* OR USE THIS <div className="invalid-field">Houston, we have a problem...</div> */}
                          </FormGroup>
                        </Col>
                      </Row>
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
                      <Row>
                        <Col xs="12">
                          <FormGroup>
                            <Label htmlFor="name">Select (searchable, multi value)</Label>
                            <Select
                              classNamePrefix={'invalid-field'}
                              value={selectedOption}
                              onChange={handleSelectChange}
                              options={options}
                              isMulti
                              isClearable
                              isSearchable
                              // theme={(theme) => ({
                              //   ...theme,
                              //   borderRadius: 0,
                              //   colors: {
                              //   ...theme.colors,
                              //     neutral50: 'hotpink',
                              //   },
                              // })}
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
                              <Label htmlFor="name">Select (searchable, multi value) with prepended and appended icon</Label>
                              <InputGroup>
                                <InputGroupAddon addonType="prepend">
                                  <InputGroupText>
                                    <i className="fa fa-clock-o"></i>
                                  </InputGroupText>
                                </InputGroupAddon>
                                <Select
                                  className={'rs-group'}
                                  classNamePrefix={'invalid-field'}
                                  value={selectedOption}
                                  onChange={handleSelectChange}
                                  options={options}
                                  isMulti
                                  isClearable
                                  isSearchable
                                  // theme={(theme) => ({
                                  //   ...theme,
                                  //   borderRadius: 0,
                                  //   colors: {
                                  //   ...theme.colors,
                                  //     neutral50: 'hotpink',
                                  //   },
                                  // })}
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
                            <Label htmlFor="name">Autocomplete</Label>
                            <Select
                              classNamePrefix={'invalid-field'}
                              value={selectedOption}
                              onChange={handleSelectChange}
                              options={options}
                              isSearchable
                              // theme={(theme) => ({
                              //   ...theme,
                              //   borderRadius: 0,
                              //   colors: {
                              //   ...theme.colors,
                              //     neutral50: 'hotpink',
                              //   },
                              // })}
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
                              <Label htmlFor="name">Autocomplete with prepended and appended icon</Label>
                              <InputGroup>
                                <InputGroupAddon addonType="prepend">
                                  <InputGroupText>
                                    <i className="fa fa-clock-o"></i>
                                  </InputGroupText>
                                </InputGroupAddon>
                                <Select
                                  className={'rs-group'}
                                  classNamePrefix={'invalid-field'}
                                  value={selectedOption}
                                  onChange={handleSelectChange}
                                  options={options}
                                  isSearchable
                                  // theme={(theme) => ({
                                  //   ...theme,
                                  //   borderRadius: 0,
                                  //   colors: {
                                  //   ...theme.colors,
                                  //     neutral50: 'hotpink',
                                  //   },
                                  // })}
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
                          <FormGroup row>
                            <Col md="2">
                              <AppSwitch className={'mx-1'} variant={'3d'} color={'primary'} defaultChecked label dataOn={'\u2713'} dataOff={'\u2715'} />
                            </Col>
                            <Col md="10">
                              <Label htmlFor="name">Switch</Label>
                            </Col>
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                        <Col xs="12">
                          <FormGroup check inline>
                            <Input className="form-check-input form-checkbox" type="checkbox" id="inline-checkbox1" name="inline-checkbox1" value="option1" />
                            <Label className="form-check-label" check htmlFor="inline-checkbox1">Checkbox example</Label>
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                        <Col xs="12">
                          <FormGroup check inline>
                            <Input className="form-check-input form-checkbox" type="checkbox" id="inline-checkbox1" name="inline-checkbox1" value="option1" disabled />
                            <Label className="form-check-label" check htmlFor="inline-checkbox1">Checkbox example</Label>
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                        <Col xs="12">
                          <FormGroup check inline>
                            <Input className="form-check-input form-radio" type="radio" id="inline-radio1" name="inline-radio1" value="option2" />
                            <Label className="form-check-label" check htmlFor="inline-radio1">Radio example</Label>
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                        <Col xs="12">
                          <FormGroup check inline>
                            <Input className="form-check-input form-radio" type="radio" id="inline-radio1" name="inline-radio1" value="option2" disabled />
                            <Label className="form-check-label" check htmlFor="inline-radio1">Radio example</Label>
                          </FormGroup>
                        </Col>
                      </Row>

                      {/* <FormGroup>
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
                      </FormGroup> */}
                      <div className="form-actions">
                        <Button type="submit" color="primary">Save changes</Button>
                        &nbsp;
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
