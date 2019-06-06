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
    if (selectedOption === null) {
      // set value as string empty if its empty
      onValueChange('');
    } else {
      onValueChange(selectedOption.value);
    }
  }

  const getValue = (options, values) => {
    if (isMulti) {
      // dont return if it empty string
      if (values !== '') {
        return values.map(item => options.find(o => o.value === item));
      }
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
