import React from 'react';
import { func, string, arrayOf, shape, any } from 'prop-types';
import { FormGroup, Label, Input } from 'reactstrap';

function FormCheckbox({ handleChange, values, name }) {
  return (
    <FormGroup tag="fieldset" onChange={handleChange}>
      <legend>Déploiement</legend>
      {values.map((value) => {
        return (
          <FormGroup check key={value.name}>
            <Label check>
              {/* eslint-disable-next-line react/jsx-boolean-value */}
              <Input type="radio" value={value.value} name={name} />{' '}
              {value.label}
            </Label>
          </FormGroup>
        );
      })}
    </FormGroup>
  );
}

export default FormCheckbox;

FormCheckbox.propTypes = {
  handleChange: func.isRequired,
  values: arrayOf(
    shape({
      value: any,
      label: string,
    })
  ).isRequired,
  name: string.isRequired,
};
