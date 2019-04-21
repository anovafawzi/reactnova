import React, { useState } from 'react';
import Select from 'react-select';

const SelectInput = ({
  name,
  error,
  touched,
  options,
  value,
  isMulti,
  isClearable,
  isSearchable,
  onValueChange
}) => {
  const handleSelectChange = (selectedOption) => {
    onValueChange(selectedOption.value);
    //console.log(`Option selected:`, selectedOption.value);
  }

  const getValue = (options, values) => {
    if (isMulti) {
      return values.map(item => options.find(o => o.value === item));
    } else {
      return options.filter(o => o.value === values);
    }
  }

  return (
    <React.Fragment>
      <Select
        classNamePrefix={(error && touched) ? 'invalid-field' : ''}
        name={name}
        value={getValue(options, value)}
        onChange={handleSelectChange}
        options={options}
        isMulti={isMulti}
        isClearable={isClearable}
        isSearchable={isSearchable}
      />
    </React.Fragment>
  );
}

export default SelectInput;
