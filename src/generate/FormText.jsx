import React from 'react';
import { string, func } from 'prop-types';
import { FormGroup, Label, Input } from 'reactstrap';

function FormText({ id, name, label, handleChange, value, placeholder }) {
  return (
    <FormGroup>
      <Label for={name}>{label}</Label>

      <Input
        type="text"
        name={name}
        id={id}
        onChange={handleChange}
        value={value}
        placeholder={placeholder || label}
      />
    </FormGroup>
  );
}

export default FormText;

FormText.propTypes = {
  id: string.isRequired,
  name: string.isRequired,
  label: string.isRequired,
  handleChange: func.isRequired,
  value: string,
  placeholder: string.isRequired,
};

FormText.defaultProps = {
  value: '',
};
