import React from 'react';
import { Page, Image, Text, View } from '@react-pdf/renderer';

import styles from './styles';
import logo from '../../assets/logoWCS.png';

function FirstPage({ values }) {
  return (
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
  );
}

export default FirstPage;
