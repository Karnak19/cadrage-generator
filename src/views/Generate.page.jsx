import React, { useState } from 'react';
import { Row, Col } from 'reactstrap';
import { PDFViewer } from '@react-pdf/renderer';
import DocumentRenderer from '../generate/DocumentRenderer';
import Form from '../generate/Form';

import useForm from '../hooks/useForm';
import useDebounceEffect from '../hooks/useDebouceEffect';

const initialState = {
  projectName: '',
  clientName: '',
  month: '',
  year: '',
  campus: '',
  deploy: false,
};

function Generate() {
  const { values, handleChange } = useForm(initialState);
  const [debounced, setDebounced] = useState(initialState);

  useDebounceEffect(
    () => {
      setDebounced(values);
    },
    [values],
    1000
  );

  return (
    <Row>
      <Col sm="12" md="6">
        <Row>
          <Form values={values} handleChange={handleChange} />
        </Row>
      </Col>
      <Col sm="12" md="6">
        <PDFViewer
          style={{
            width: '100%',
            height: '80vh',
          }}
        >
          <DocumentRenderer values={debounced} />
        </PDFViewer>
      </Col>
    </Row>
  );
}

export default Generate;
