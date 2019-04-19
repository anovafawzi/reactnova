import React, { useState } from 'react';
import { Input, InputGroup, InputGroupAddon, InputGroupText } from 'reactstrap';

const PasswordInput = (props) => {
  const [formType, setFormType] = useState('password');

  const toggleFormType = () => {
    setFormType(formType === 'password' ? 'input' : 'password');
  }

  return (
    <InputGroup>
      <Input {...props} type={formType} />
      <InputGroupAddon addonType="append">
        <InputGroupText title="Show/hide password" onClick={toggleFormType}><i className={formType === 'input' ? "fa fa-eye" : "fa fa-eye-slash"}></i></InputGroupText>
      </InputGroupAddon>
    </InputGroup>
  );
}

export default PasswordInput;
