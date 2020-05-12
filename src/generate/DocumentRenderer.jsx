import React from 'react';
import { shape, string } from 'prop-types';
import {
  Document,
  Page,
  View,
  Text,
  Image,
  StyleSheet,
  Font,
} from '@react-pdf/renderer';

import logo from '../assets/logoWCS.png';
import Roboto from '../assets/Roboto.ttf';

Font.register({
  family: 'Roboto',
  src: Roboto,
});

const styles = StyleSheet.create({
  page: { fontFamily: 'Roboto' },
  section: { color: 'white', textAlign: 'center', margin: 30 },
  view: { textAlign: 'center', display: 'flex', flexDirection: 'column' },
  image: {},
});

function DocumentRenderer({ values }) {
  return (
    <Document title={`${values.campus}-${values.projectName}`}>
      <Page size="A4" style={styles.page}>
        <View style={styles.view}>
          <Image src={logo} style={styles.image} />
          <Text>NOTE DE CADRAGE</Text>
          <Text style={{ marginTop: 30 }}>
            Création d&apos;un prototype {values.projectName}
          </Text>
          <Text>pour {values.clientName}</Text>
          <Text style={{ marginTop: 100 }}>
            {values.month} {values.year} - {values.campus}
          </Text>
        </View>
      </Page>
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
