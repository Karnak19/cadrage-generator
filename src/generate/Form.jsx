import React from 'react';
import { string, func, shape } from 'prop-types';
import { Form as RForm, Button, Row, Col } from 'reactstrap';
import FormText from './FormText';
import FormSelect from './FormSelect';
import FormCheckbox from './FormCheckbox';

function Form({ values, handleChange }) {
  return (
    <RForm>
      <Row form>
        <Col xs={6}>
          <FormText
            id="clientName"
            name="clientName"
            label="Client Name"
            value={values.clientName}
            handleChange={handleChange}
            placeholder="Client name"
          />
        </Col>
        <Col xs={6}>
          <FormText
            id="clientEmail"
            name="clientEmail"
            label="Client Email"
            value={values.clientEmail}
            handleChange={handleChange}
            placeholder="Client Email"
          />
        </Col>
      </Row>
      <FormText
        id="projectName"
        name="projectName"
        label="Project Name"
        value={values.projectName}
        handleChange={handleChange}
        placeholder="Project name"
      />
      <Row form>
        <Col xs={6}>
          <FormText
            id="month"
            name="month"
            label="Month Session"
            value={values.month}
            handleChange={handleChange}
            placeholder="Month Session"
          />
        </Col>
        <Col xs={6}>
          <FormText
            id="year"
            name="year"
            label="Year Session"
            value={values.year}
            handleChange={handleChange}
            placeholder="Year Session"
          />
        </Col>
      </Row>

      <FormSelect
        id="campus"
        name="campus"
        label="Campus"
        value={values.campus}
        handleChange={handleChange}
        options={[
          'Biarritz',
          'Bordeaux',
          'La Loupe',
          'Lille',
          'Lyon',
          'Marseille',
          'Nantes',
          'Orléans',
          'Paris',
          'Reims',
          'Strasbourg',
          'Toulouse',
          'Tours',
        ]}
        placeholder="Campus"
      />
      <FormCheckbox
        handleChange={handleChange}
        name="deploy"
        values={[
          { label: "La Wild s'en charge", value: true },
          { label: "Le client s'en charge", value: false },
        ]}
      />

      <Button
        disabled={!values.clientEmail}
        className="disabled-hover"
        color={values.clientEmail ? 'success' : 'danger'}
      >
        Mail to client
      </Button>
    </RForm>
  );
}

export default Form;

Form.propTypes = {
  values: shape({
    clientName: string,
    projectName: string,
  }).isRequired,
  handleChange: func.isRequired,
};
