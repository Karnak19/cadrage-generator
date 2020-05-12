import React from 'react';
import { arrayOf, func, string } from 'prop-types';
import { FormGroup, Label, Input } from 'reactstrap';

function FormSelect({ id, name, options, value, handleChange }) {
  return (
    <FormGroup>
      <Label for={id}>Select</Label>
      <Input
        type="select"
        name={name}
        id={id}
        value={value}
        onChange={handleChange}
      >
        {options.map((opt) => {
          return (
            <option value={opt} key={opt}>
              {opt}
            </option>
          );
        })}
      </Input>
    </FormGroup>
  );
}

export default FormSelect;

FormSelect.propTypes = {
  id: string.isRequired,
  name: string.isRequired,
  value: string,
  options: arrayOf(string.isRequired).isRequired,
  handleChange: func.isRequired,
};

FormSelect.defaultProps = {
  value: '',
};
