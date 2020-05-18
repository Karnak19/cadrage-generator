import React from 'react';
import {
  Form as RForm,
  Button,
  Row,
  Col,
  FormGroup,
  Input,
  Label,
  CustomInput,
} from 'reactstrap';
import FormText from './FormText';
import FormSelect from './FormSelect';
import FormCheckbox from './FormCheckbox';
import useForm from '../../hooks/useForm';

function Form() {
  const { values, handleChange, handleSubmit } = useForm();
  return (
    <RForm onSubmit={handleSubmit}>
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

      <FormGroup>
        <Label for="objective">Objective</Label>
        <Input
          id="objective"
          name="objective"
          type="textarea"
          value={values.objective}
          onChange={handleChange}
          placeholder="Objectives"
        />
      </FormGroup>
      <FormCheckbox
        handleChange={handleChange}
        name="deploy"
        values={[
          { label: "La Wild s'en charge", value: true },
          { label: "Le client s'en charge", value: false },
        ]}
      />
      <FormGroup>
        <Label for="duration">Durée : {values.duration} semaines</Label>
        <CustomInput
          type="range"
          id="duration"
          name="duration"
          value={values.duration}
          onChange={handleChange}
          max={16}
        />
      </FormGroup>
      <Row form>
        <Col xs={6}>
          <FormGroup>
            <Label for="startingDate">Starting Date</Label>
            <Input
              type="date"
              name="startingDate"
              id="startingDate"
              placeholder="Starting Date"
              value={values.startingDate}
              onChange={handleChange}
            />
          </FormGroup>
        </Col>
        <Col xs={6}>
          <FormGroup>
            <Label for="endingDate">Ending Date</Label>
            <Input
              type="date"
              name="endingDate"
              id="endingDate"
              placeholder="Ending Date"
              value={values.endingDate}
              onChange={handleChange}
            />
          </FormGroup>
        </Col>
      </Row>

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
