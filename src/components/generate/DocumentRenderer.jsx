import React from 'react';
import { shape, string } from 'prop-types';
import { Document } from '@react-pdf/renderer';

import FirstPage from './First.page';
import SecondPage from './Second.page';

function DocumentRenderer({ values }) {
  return (
    <Document title={`${values.campus}-${values.projectName}`}>
      <FirstPage values={values} />
      <SecondPage values={values} />
    </Document>
  );
}

export default DocumentRenderer;

DocumentRenderer.propTypes = {
  values: shape({
    projectName: string,
    clientName: string,
    month: string,
    year: string,
  }).isRequired,
};
