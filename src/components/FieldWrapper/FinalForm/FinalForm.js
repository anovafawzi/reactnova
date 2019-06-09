import React from 'react';
import { Field } from 'react-final-form';
import {
  InputType,
  RenderInput
} from './FinalFormRender';

export const SimpleInput = ({
  name,
  type,
  label,
  placeholder,
  isInline = false,
  isRequired = false,
  isAppendIcon = false,
  isPrependTextHtml = false,
	prependText = '',
	isAppendTextHtml = false,
	appendText = '',
}) => {
  return (
    <Field
      inputType={InputType.SIMPLE_INPUT}
      name={name}
      component={RenderInput}
      type={type}
      label={label}
      placeholder={placeholder}
      isInline={isInline}
      isRequired={isRequired}
      isAppendIcon={isAppendIcon}
      isPrependTextHtml={isPrependTextHtml}
      prependText={prependText}
      isAppendTextHtml={isAppendTextHtml}
      appendText={appendText}
    />
  )
}

export const PasswordTextInput = ({
  name,
  type,
  label,
  placeholder,
  isInline = false,
  isRequired = false,
  isAppendIcon = false,
  isPrependTextHtml = false,
	prependText = '',
	isAppendTextHtml = false,
	appendText = '',
}) => {
  return (
    <Field
      inputType={InputType.PASSWORD_INPUT}
      name={name}
      component={RenderInput}
      type={type}
      label={label}
      placeholder={placeholder}
      isInline={isInline}
      isRequired={isRequired}
      isAppendIcon={isAppendIcon}
      isPrependTextHtml={isPrependTextHtml}
      prependText={prependText}
      isAppendTextHtml={isAppendTextHtml}
      appendText={appendText}
    />
  )
}

export const NumberInput = ({
  name,
  type,
  label,
  placeholder,
  isInline = false,
  isRequired = false,
  isAppendIcon = false,
  isPrependTextHtml = false,
	prependText = '',
	isAppendTextHtml = false,
  appendText = '',

  allowNegative,
  decimalScale,
  prefix,
  decimalSeparator,
  thousandSeparator,
}) => {
  return (
    <Field
      inputType={InputType.NUMBER_INPUT}
      name={name}
      component={RenderInput}
      type={type}
      label={label}
      placeholder={placeholder}
      isInline={isInline}
      isRequired={isRequired}
      isAppendIcon={isAppendIcon}
      isPrependTextHtml={isPrependTextHtml}
      prependText={prependText}
      isAppendTextHtml={isAppendTextHtml}
      appendText={appendText}

      allowNegative={allowNegative}
      decimalScale={decimalScale}
      prefix={prefix}
      decimalSeparator={decimalSeparator}
      thousandSeparator={thousandSeparator}
    />
  )
}

export const DateTimeInput = ({
  name,
  type,
  label,
  placeholder,
  isInline = false,
  isRequired = false,
  isAppendIcon = false,
  isPrependTextHtml = false,
	prependText = '',
	isAppendTextHtml = false,
  appendText = '',

  isValidDate, // this is a function
  defaultValue,
  dateFormat = 'DD/MM/YYYY',
  timeFormat = 'HH:mm',
  isDate = false,
  isTime = false,
}) => {
  return (
    <Field
      inputType={isDate ? (isTime ? InputType.DATETIME_INPUT : InputType.DATE_INPUT) : InputType.TIME_INPUT}
      name={name}
      component={RenderInput}
      type={type}
      label={label}
      placeholder={placeholder}
      isInline={isInline}
      isRequired={isRequired}
      isAppendIcon={isAppendIcon}
      isPrependTextHtml={isPrependTextHtml}
      prependText={prependText}
      isAppendTextHtml={isAppendTextHtml}
      appendText={appendText}

      isValidDate={isValidDate}
      defaultValue={defaultValue}
      dateFormat={dateFormat}
      timeFormat={timeFormat}
    />
  )
}

export const DateRangeInput = ({
  name,
  type,
  label,
  placeholder,
  isInline = false,
  isRequired = false,
  isAppendIcon = false,
  isPrependTextHtml = false,
	prependText = '',
	isAppendTextHtml = false,
  appendText = '',

  dateFormat = 'DD/MM/YYYY',
}) => {
  return (
    <Field
      inputType={InputType.DATERANGE_INPUT}
      name={name}
      component={RenderInput}
      type={type}
      label={label}
      placeholder={placeholder}
      isInline={isInline}
      isRequired={isRequired}
      isAppendIcon={isAppendIcon}
      isPrependTextHtml={isPrependTextHtml}
      prependText={prependText}
      isAppendTextHtml={isAppendTextHtml}
      appendText={appendText}

      dateFormat={dateFormat}
    />
  )
}

export const SelectInput = ({
  name,
  type,
  label,
  placeholder,
  isInline = false,
  isRequired = false,
  isAppendIcon = false,
  isPrependTextHtml = false,
	prependText = '',
	isAppendTextHtml = false,
  appendText = '',

  options,
  isMulti,
  isClearable,
  isSearchable,
}) => {
  return (
    <React.Fragment>
      <Field
        inputType={InputType.SELECT_AUTOCOMPLETE_INPUT}
        name={name}
        component={RenderInput}
        type={type}
        label={label}
        placeholder={placeholder}
        isInline={isInline}
        isRequired={isRequired}
        isAppendIcon={isAppendIcon}
        isPrependTextHtml={isPrependTextHtml}
        prependText={prependText}
        isAppendTextHtml={isAppendTextHtml}
        appendText={appendText}
        options={options}
        isMulti={isMulti}
        isClearable={isClearable}
        isSearchable={isSearchable}
      />
    </React.Fragment>
  )
}

export const SwitchInput = ({
  name,
  type,
  label,
  variant = '3d',
  color = 'primary',
  outline = false,
  dataOn = '\u2713',
  dataOff = '\u2715',
  isSwitch = false,
  disabled = false,
}) => {
  return (
    <React.Fragment>
      <Field
        inputType={InputType.SWITCH_INPUT}
        name={name}
        component={RenderInput}
        type={'checkbox'}
        label={label}
        variant={variant}
        color={color}
        outline={outline}
        dataOn={dataOn}
        dataOff={dataOff}
        disabled={disabled}
        isSwitch={isSwitch}
      />
    </React.Fragment>
  )
}

export const RadioInput = ({
  name,
  type,
  label,
  placeholder,
  isInline = false,
  isRequired = false,
  options,
  disabled = false,
}) => {
  return (
    <Field
      inputType={InputType.RADIO_INPUT}
      name={name}
      component={RenderInput}
      type={type}
      label={label}
      placeholder={placeholder}
      isInline={isInline}
      isRequired={isRequired}
      options={options}
      disabled={disabled}
    />
  )
}

export const CheckboxInput = ({
  name,
  type,
  label,
  placeholder,
  isInline = false,
  isRequired = false,
  isCheckbox = true,
}) => {
  return (
    <Field
      inputType={InputType.CHECKBOX_INPUT}
      name={name}
      component={RenderInput}
      type={type}
      label={label}
      placeholder={placeholder}
      isInline={isInline}
      isRequired={isRequired}
      isCheckbox={isCheckbox}
    />
  )
}
