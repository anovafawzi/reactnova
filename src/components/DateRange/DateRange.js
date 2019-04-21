import React, { useState } from 'react';
import moment from 'moment';

import 'react-dates/initialize';
// styles for react-dates
import 'react-dates/lib/css/_datepicker.css';
import {
  DateRangePicker,
  SingleDatePicker,
  DayPickerRangeController
} from 'react-dates';

const DateRange = ({
  value = {
    startDate: null,
    endDate: null
  },
  dateFormat,
  label,
  touched,
  error,

  onValueChange
}) => {
  const [focusedInput, setFocusedInput] = useState(null);

  return (
    <React.Fragment>
      <br/>
      <div className={(touched && error ) ? "drp-invalid-field" : ""}>
        <DateRangePicker
          startDate={moment(value.startDate, dateFormat)} // momentPropTypes.momentObj or null,
          endDate={moment(value.endDate, dateFormat)} // momentPropTypes.momentObj or null,
          startDateId={`${label}StartId`} // PropTypes.string.isRequired,
          endDateId={`${label}EndId`} // PropTypes.string.isRequired,
          onDatesChange={({ startDate, endDate }) => {
            onValueChange({
              startDate,
              endDate,
            })
          }} // PropTypes.func.isRequired,
          onFocusChange={newFocusedInput => setFocusedInput(newFocusedInput)} // PropTypes.func.isRequired,
          focusedInput={focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
          displayFormat={dateFormat}
        />
      </div>
    </React.Fragment>
  );
}
export default DateRange;
