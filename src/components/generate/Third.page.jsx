import React from 'react';
import { shape, string } from 'prop-types';
import { Page, Text, View } from '@react-pdf/renderer';

import styles from './styles';

import { SubTitle, Title } from './Title';

function ThirdPage({ values }) {
  return (
    <Page size="A4" style={styles.page}>
      <View style={styles['p-50']}>
        <>
          <SubTitle>LES ÉTAPES</SubTitle>
          <Text style={styles['fs-11']}>
            La réalisation du prototype se déroule pendant {values.duration}{' '}
            semaines à compter de {values.startingDate} et comprend
            obligatoirement et à minima 4 réunions entre l&apos;équipe de
            développeurs (élèves) et le client (dates à fixer en fonction de
            l&apos;agenda du client). Les réunions peuvent se faire par
            visioconférence.
          </Text>
        </>
        <>
          <SubTitle>GARANTIES</SubTitle>
          <Text style={styles['fs-11']}>
            Une période de maintenance de 2 semaines est assurée par les élèves
            accompagnés par leur formateur à partir du livrable final (
            {values.endingDate}), uniquement pour corriger des anomalies et non
            pour développer de nouvelles fonctionnalités. Cette période de
            maintenance prend fin si le code source est modifié par une personne
            extérieure à la Wild Code School.
          </Text>
        </>
        <>
          <Title>CONTRAINTES TECHNIQUES</Title>
          <SubTitle>NAVIGATEURS</SubTitle>
          <Text style={styles['fs-11']}>Le prototype sera développé sur :</Text>
        </>
      </View>
    </Page>
  );
}

export default ThirdPage;

ThirdPage.propTypes = {
  values: shape({
    duration: string,
    startingDate: string,
    endingDate: string,
  }).isRequired,
};
