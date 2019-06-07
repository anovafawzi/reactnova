import React, { useState } from 'react';
import { AppSwitch } from '@coreui/react'
import {
  FormGroup,
  Col,
  Label,
} from 'reactstrap';

const Switch = ({
  value,
  label,
  error,
  disabled = false,

  variant = '3d', // from core ui switch 'pill', '3d'
  color = 'primary', // from bootstrap color 'primary','secondary','success','warning','info','danger','light','dark'
  outline = false,

  dataOn = '\u2713',
  dataOff = '\u2715',

  onValueChange
}) => {
  return (
    <React.Fragment>
      <AppSwitch className={'mx-1'} checked={value} disabled={disabled} variant={variant} color={color} outline={outline ? 'alt' : ''} label dataOn={dataOn} dataOff={dataOff} onChange={(value) => onValueChange(value)} />
    </React.Fragment>
  );
}
export default Switch;
