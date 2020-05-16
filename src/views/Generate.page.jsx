import React, { lazy, Suspense } from 'react';
import { Row, Col, Spinner } from 'reactstrap';

import Form from '../components/generate/Form';
import useForm from '../hooks/useForm';

const DocumentRenderer = lazy(() =>
  import('../components/generate/DocumentRenderer')
);

function Generate() {
  const { values, handleChange, handleSubmit } = useForm();

  return (
    <Row>
      <Col sm="12" md="6">
        <Row>
          <Form
            values={values}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
          />
        </Row>
      </Col>
      <Col sm="12" md="6">
        <Suspense fallback={<Spinner />}>
          <DocumentRenderer />
        </Suspense>
      </Col>
    </Row>
  );
}

export default Generate;
