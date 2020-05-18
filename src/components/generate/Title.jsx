import React from 'react';
import { node } from 'prop-types';
import { Text } from '@react-pdf/renderer';

import styles from './styles';

export function Title({ children }) {
  return <Text style={styles['fs-14']}>{children}</Text>;
}

export function SubTitle({ children }) {
  return (
    <Text style={{ ...styles['fs-12'], paddingTop: 30, paddingBottom: 10 }}>
      {children}
    </Text>
  );
}

Title.propTypes = {
  children: node.isRequired,
};

SubTitle.propTypes = {
  children: node.isRequired,
};
