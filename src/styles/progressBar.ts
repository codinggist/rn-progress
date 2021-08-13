import { StyleSheet } from 'react-native';
import { Colors } from '../constants/colors';

const progressBarStyles = StyleSheet.create({
  barStyles: {
    width: '100%',
    height: 20,
    borderColor: Colors.primary,
    borderWidth: 1,
    borderRadius: 10,
    padding: 2,
  },
  progress: {
    width: '20%',
    height: '100%',
    backgroundColor: Colors.secondary,
    borderRadius: 10,
  },
});

export default progressBarStyles;
