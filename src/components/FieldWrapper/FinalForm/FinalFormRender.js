import React from 'react';
import { Field } from 'react-final-form';
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
// custom components
import {
  PasswordInput,
  SelectInput,
  DateRange,
  Switch
} from '../../../components';

export const InputType = {
  SIMPLE_INPUT: 'SIMPLE_INPUT',
  PASSWORD_INPUT: 'PASSWORD_INPUT',
  NUMBER_INPUT: 'NUMBER_INPUT',
  DATE_INPUT: 'DATE_INPUT',
  TIME_INPUT: 'TIME_INPUT',
  DATETIME_INPUT: 'DATETIME_INPUT',
  DATERANGE_INPUT: 'DATERANGE_INPUT',
  SELECT_AUTOCOMPLETE_INPUT: 'SELECT_AUTOCOMPLETE_INPUT',
  SWITCH_INPUT: 'SWITCH_INPUT',
  CHECKBOX_INPUT: 'CHECKBOX_INPUT',
  RADIO_INPUT: 'RADIO_INPUT',
}

const InlineFormRender = (props) => {
  return (
    <React.Fragment>
      {props.isInline
        ?
          <React.Fragment>
            <FormGroup row>
              <Col md="3">
                <Label>{props.label} {props.isRequired ? <span className="required-sign">*</span> : ''}</Label>
              </Col>
              <Col md="9">
                {props.children}
              </Col>
            </FormGroup>
          </React.Fragment>
        :
          <React.Fragment>
            {props.isSwitch
              ?
                <FormGroup row>
                  <Col md="2">
                    {props.children}
                  </Col>
                  <Col md="10">
                    <Label htmlFor="name">{props.label}</Label>
                  </Col>
                </FormGroup>
              :
                <FormGroup>
                  <Label htmlFor={props.name}>{props.label} {props.isRequired ? <span className="required-sign">*</span> : ''}</Label>
                  {props.children}
                </FormGroup>
            }
          </React.Fragment>
      }
    </React.Fragment>
  );
}

export const RenderInput = ({
  inputType,
  input,
  name,
  label,
  type,
  placeholder,
  disabled = false,
  isInline = false,
  isSwitch = false,
  isRequired = false,
  isAppendIcon = false,
  isPrependTextHtml = false,
	prependText = '',
	isAppendTextHtml = false,
	appendText = '',
  meta: { touched, error, warning },

  // number input
  allowNegative,
  decimalScale,
  prefix,
  decimalSeparator,
  thousandSeparator,

  // datetime input
  isValidDate, // this is a function
  defaultValue,
  dateFormat,
  timeFormat,

  // select input
  options,
  isMulti,
  isClearable,
  isSearchable,

  // switch input
  variant,
  color,
  outline,
  dataOn,
  dataOff,
}) => {
  return (
    <React.Fragment>
      <InlineFormRender
        label={label}
        name={name}
        isInline={isInline}
        isSwitch={isSwitch}
        isRequired={isRequired}
        touched={touched}
        error={error}
      >
        {
          isAppendIcon
          ?
            <InputGroup>
              {
                prependText
                ?
                  <InputGroupAddon addonType="prepend">
                    {
                      isPrependTextHtml
                      ? <span className="input-group-text" title={label} dangerouslySetInnerHTML={{ __html: prependText }}></span>
                      : <InputGroupText title={label}>{prependText}</InputGroupText>
                    }
                  </InputGroupAddon>
                :
                  null
              }
              <InputSelector
                input={input}
                inputType={inputType}
                name={name}
                type={type}
                disabled={disabled}
                placeholder={placeholder}
                touched={touched}
                error={error}

                allowNegative={allowNegative}
                decimalScale={decimalScale}
                prefix={prefix}
                decimalSeparator={decimalSeparator}
                thousandSeparator={thousandSeparator}

                isValidDate={isValidDate}
                defaultValue={defaultValue}
                dateFormat={dateFormat}
                timeFormat={timeFormat}

                options={options}
                isMulti={isMulti}
                isClearable={isClearable}
                isSearchable={isSearchable}

                variant={variant}
                color={color}
                outline={outline}
                dataOn={dataOn}
                dataOff={dataOff}
              />
              {
                appendText
                ?
                  <InputGroupAddon addonType="append">
                    {
                      isAppendTextHtml
                      ? <span className="input-group-text" title={label} dangerouslySetInnerHTML={{ __html: appendText }}></span>
                      : <InputGroupText title={label}>{appendText}</InputGroupText>
                    }
                  </InputGroupAddon>
                :
                  null
              }
            </InputGroup>
          :
            <InputSelector
              input={input}
              inputType={inputType}
              name={name}
              type={type}
              disabled={disabled}
              placeholder={placeholder}
              touched={touched}
              error={error}

              allowNegative={allowNegative}
              decimalScale={decimalScale}
              prefix={prefix}
              decimalSeparator={decimalSeparator}
              thousandSeparator={thousandSeparator}

              isValidDate={isValidDate}
              defaultValue={defaultValue}
              dateFormat={dateFormat}
              timeFormat={timeFormat}

              options={options}
              isMulti={isMulti}
              isClearable={isClearable}
              isSearchable={isSearchable}

              variant={variant}
              color={color}
              outline={outline}
              dataOn={dataOn}
              dataOff={dataOff}
            />
        }
        {touched && (error && <div className="help-block invalid-field">{error}</div>)}
      </InlineFormRender>
    </React.Fragment>
  );
}

export const InputSelector = ({
  inputType,
  input,
  name,
  type,
  disabled,
  placeholder,
  touched,
  error,
  readOnly = false,

  // number input
  allowNegative = false,
  decimalScale = 2,
  prefix,
  decimalSeparator = ',',
  thousandSeparator = '.',

  // datetime input
  isValidDate, // this is a function
  defaultValue,
  dateFormat = 'DD/MM/YYYY',
  timeFormat = 'HH:mm',

  // select input
  options,
  isMulti = false,
  isClearable = true,
  isSearchable = true,

  // switch input
  variant = '3d',
  color = 'primary',
  outline = false,
  dataOn = '\u2713',
  dataOff = '\u2715',
}) => {
  switch (inputType) {
    case InputType.SIMPLE_INPUT:
      return (
        <Input {...input} disabled={disabled} invalid={(touched && error) ? true : false} type={type} id={name} name={name} placeholder={placeholder} />
      );
    case InputType.PASSWORD_INPUT:
      return (
        <PasswordInput {...input} disabled={disabled} invalid={(touched && error) ? true : false} type={type} id={name} name={name} placeholder={placeholder} />
      );
    case InputType.NUMBER_INPUT:
      return (
        <NumberFormat
          className={`form-control ${(touched && error) ? 'is-invalid' : ''}`}
          value={input.value}
          displayType={'input'}
          allowNegative={allowNegative}
          disabled={disabled}
          decimalScale={decimalScale}
          // isNumericString={true}
          prefix={prefix}
          decimalSeparator={decimalSeparator}
          thousandSeparator={thousandSeparator}
          readOnly={readOnly}
          onValueChange={values => {
            input.onChange(values.value);
          }}
        />
      );
    case InputType.DATE_INPUT:
      return (
        <Datetime
          inputProps={{ name: 'date-name-prop', className: `form-control ${(touched && error) ? 'is-invalid' : ''}` }}
          value={input.value}
          // className={touched ? (error ? 'is-invalid' : '') : ''}
          onChange={param =>
            input.onChange(
                moment(param).format(dateFormat)
            )
          }
          dateFormat={dateFormat}
          timeFormat={null}
          isValidDate={isValidDate}
          defaultValue={defaultValue}
        />
      );
    case InputType.TIME_INPUT:
      return (
        <Datetime
          inputProps={{ name: 'date-name-prop', className: `form-control ${(touched && error) ? 'is-invalid' : ''}` }}
          value={input.value}
          // className={touched ? (error ? 'is-invalid' : '') : ''}
          onChange={param =>
            input.onChange(
                moment(param).format(timeFormat)
            )
          }
          dateFormat={null}
          timeFormat={timeFormat}
          isValidDate={isValidDate}
          defaultValue={defaultValue}
        />
      );
    case InputType.DATETIME_INPUT:
      return (
        <Datetime
          inputProps={{ name: 'date-name-prop', className: `form-control ${(touched && error) ? 'is-invalid' : ''}` }}
          value={input.value}
          // className={touched ? (error ? 'is-invalid' : '') : ''}
          onChange={param =>
            input.onChange(
                moment(param).format(dateFormat + timeFormat)
            )
          }
          dateFormat={dateFormat}
          timeFormat={timeFormat}
          isValidDate={isValidDate}
          defaultValue={defaultValue}
        />
      );
    case InputType.DATERANGE_INPUT:
      return (
        <DateRange
          label={input.label}
          value={input.value}
          onValueChange={dateranges =>
            input.onChange(
              dateranges
            )
          }
          dateFormat={dateFormat}
          touched={touched}
          error={error}
        />
      );
    case InputType.SELECT_AUTOCOMPLETE_INPUT:
      return (
        <React.Fragment>
          <SelectInput
            value={input.value}
            options={options}
            label={input.label}
            onValueChange={selectedValue =>
              input.onChange(
                selectedValue
              )
            }
            isMulti={isMulti}
            isClearable={isClearable}
            isSearchable={isSearchable}
            touched={touched}
            error={error}
          />
        </React.Fragment>
      );
    case InputType.SWITCH_INPUT:
      return (
        <React.Fragment>
          <Switch
            value={input.value}
            label={input.label}
            onValueChange={checkedValue =>
              input.onChange(checkedValue)
            }
            variant={variant}
            color={color}
            outline={outline}
            dataOn={dataOn}
            dataOff={dataOff}
            disabled={disabled}
          />
        </React.Fragment>
      );
    default:
      return (
        <Input {...input} disabled={disabled} invalid={(touched && error) ? true : false} type={type} id={name} name={name} placeholder={placeholder} />
      );
  }
}
