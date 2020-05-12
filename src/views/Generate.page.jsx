import React, { useState } from 'react';
import { Row, Col } from 'reactstrap';
import { PDFViewer } from '@react-pdf/renderer';
import DocumentRenderer from '../generate/DocumentRenderer';
import Form from '../generate/Form';

import useForm from '../hooks/useForm';
import useDebounceEffect from '../hooks/useDebouceEffect';

function Generate() {
  const { values, handleChange } = useForm({
    projectName: '',
    clientName: '',
  });
  const [debounced, setDebounced] = useState({});

  useDebounceEffect(
    () => {
      setDebounced(values);
    },
    [values],
    1000
  );

  return (
    <Row>
      <Col>
        <Row>
          <Form values={values} handleChange={handleChange} />
        </Row>
      </Col>
      <Col>
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
