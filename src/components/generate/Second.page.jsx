import React from 'react';
import { shape, string } from 'prop-types';
import { Page, Text, View, Link } from '@react-pdf/renderer';

import styles from './styles';
import List from './List';
import { Title, SubTitle } from './Title';

function SecondPage({ values }) {
  return (
    <Page size="A4" style={styles.page}>
      <View style={styles['p-50']}>
        <Title>PRÉAMBULE</Title>
        <SubTitle>OBJECTIFS DU DOCUMENT</SubTitle>
        <Text style={styles['fs-11']}>
          Ce document présente le périmètre du prototype qui sera réalisé par
          les élèves de la Wild Code School dans le cadre de leur formation. Il
          permet:
        </Text>
        <List
          list={[
            {
              id: 1,
              text:
                'De formaliser l’entretien de découverte des besoins et lister les informations nécessaires à la bonne mise en route du développement du prototype.',
            },
            {
              id: 2,
              text:
                'Lister les fonctionnalités souhaitées au sein du prototype',
            },
          ]}
        />
        <SubTitle>PRÉSENTATION DE L&apos;ÉCOLE</SubTitle>
        <Text style={styles['fs-11']}>
          La Wild Code School forme au métier développeur web et web mobile sur
          une période de 5 mois, il faut donc considérer que les élèves
          responsables de la réalisation du projet sont juniors au moment de son
          démarrage.
        </Text>
        <Text style={styles['fs-11']}>
          Le prototype, ci-dessus cité sera réalisé en suivant une méthode de
          gestion de projet agile SCRUM.
        </Text>
        <Text
          style={{
            ...styles['fs-11'],
            paddingHorizontal: 50,
            paddingVertical: 20,
          }}
        >
          La méthode de gestion de projet SCRUM s&apos;appuie sur le découpage
          d&apos;un projet en{' '}
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <Link src="https://fr.wikipedia.org/wiki/Timeboxing">
            boîtes de temps
          </Link>
          , nommées « sprints ». Les sprints peuvent durer entre quelques heures
          et un mois (avec une préférence pour deux semaines). Chaque sprint
          commence par une estimation suivie d&apos;une planification
          opérationnelle. Le sprint se termine par une démonstration de ce qui a
          été achevé. Avant de démarrer un nouveau sprint, l&apos;équipe réalise
          une rétrospective.
        </Text>
        <Text style={styles['fs-11']}>
          En fonction des fonctionnalités et user stories engagées au cours du
          sprint, un livrable sera transmis au client à l&apos;issu de chaque
          période de développement (période de 1 à 2 semaines)
        </Text>
        <Text style={styles['fs-11']}>
          Les fonctionnalités ou user stories décrites dans ce document ou lors
          de réunions seront revues, priorisées et pourront être amenées à
          évoluer après chaque réunion client.
        </Text>
        <SubTitle>LE PROJET</SubTitle>
        <Text style={styles['fs-11']}>
          {values.clientName}, défini dans ce document comme « le client »,
          souhaite développer le prototype d’une application web qui a pour
          objectif de {values.objective}
        </Text>
      </View>
    </Page>
  );
}

export default SecondPage;

SecondPage.propTypes = {
  values: shape({
    clientName: string,
    objective: string,
  }).isRequired,
};
