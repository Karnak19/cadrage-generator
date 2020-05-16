import React from 'react';
import { Document, PDFViewer } from '@react-pdf/renderer';
import { useSelector } from 'react-redux';

import FirstPage from './First.page';
import SecondPage from './Second.page';

function DocumentRenderer() {
  const values = useSelector((state) => state.form);
  return (
    <PDFViewer
      style={{
        width: '100%',
        height: '80vh',
      }}
    >
      <Document title={`${values.campus}-${values.projectName}`}>
        <FirstPage values={values} />
        <SecondPage values={values} />
      </Document>
    </PDFViewer>
  );
}

export default DocumentRenderer;
