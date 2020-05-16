import React from 'react';
import { arrayOf, string, shape, number } from 'prop-types';

import { Text, View } from '@react-pdf/renderer';

import styles from './styles';

function List({ list }) {
  return (
    <View style={{ paddingTop: 10 }}>
      {list.map((item) => (
        <Text style={{ paddingLeft: 30, ...styles['fs-11'] }} key={item.id}>
          - {item.text}
        </Text>
      ))}
    </View>
  );
}

export default List;

List.propTypes = {
  list: arrayOf(
    shape({
      id: number,
      text: string,
    })
  ).isRequired,
};
