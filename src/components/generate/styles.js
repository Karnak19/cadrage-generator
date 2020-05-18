import { StyleSheet, Font } from '@react-pdf/renderer';

import Carme from '../../assets/Carme-Regular.ttf';

Font.register({
  family: 'Carme',
  src: Carme,
});

export default StyleSheet.create({
  page: { fontFamily: 'Carme' },
  section: { color: 'white', textAlign: 'center', margin: 30 },
  view: { textAlign: 'center', display: 'flex', flexDirection: 'column' },
  image: {},
  'p-50': { paddingHorizontal: 30, paddingVertical: 50 },
  'fs-14': { fontSize: 14 },
  'fs-12': { fontSize: 12 },
  'fs-11': { fontSize: 11 },
});
