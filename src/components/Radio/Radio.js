import React from 'react';
import {
  Col,
  FormGroup,
  Input,
  Label
} from 'reactstrap';

const Radio = ({
  value,
  type,
  name,
  error,
  options,
  disabled = false,
  onValueChange
}) => {
  const handleSelectChange = (selectedOption) => {
    onValueChange(selectedOption);
    // if (selectedOption === null) {
    //   // set value as string empty if its empty
    //   onValueChange('');
    // } else {
    //   onValueChange(selectedOption.value);
    // }
  }

  const RenderOptions = ({options, value}) => {
    return (
      <React.Fragment>
        {
          options.map(item => {
            return (
              <Col xs="12" key={`option-item-${item.value}`}>
                <FormGroup check inline>
                  <Input
                    className="form-check-input form-radio"
                    type="radio"
                    name={name}
                    value={item.value}
                    disabled={disabled}
                    onChange={handleSelectChange}
                    checked={item.value === value}
                  />
                  <Label className="form-check-label" check htmlFor={name}>{item.label}</Label>
                </FormGroup>
              </Col>
            );
          })
        }
      </React.Fragment>
    );
  }

  return (
    <React.Fragment>
      {options !== null &&
        <RenderOptions options={options} value={value} />
      }
    </React.Fragment>
  );
}

export default Radio;
