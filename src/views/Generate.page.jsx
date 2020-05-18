import React, { lazy, Suspense } from 'react';
import { Row, Col, Spinner } from 'reactstrap';

import Form from '../components/generate/Form';

const DocumentRenderer = lazy(() =>
  import('../components/generate/DocumentRenderer')
);

function Generate() {
  return (
    <Row>
      <Col sm="12" md="6">
        <Row>
          <Form />
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
