import React, { FunctionComponent } from 'react';
import { View } from 'react-native';
import { Colors } from '../constants/colors';
import progressBarStyles from '../styles/progressBar';
import type { ProgressBarProps } from '../types/types';

const ProgressBar: FunctionComponent<ProgressBarProps> = ({
  width = '100%',
  height = 20,
  strokeWidth = 1,
  strokeColor = Colors.primary,
  color = Colors.secondary,
  startValue = 20,
  maxValue = 100,
  currentValue = startValue,
  backgroundColor = 'transparent',
}) => {
  let receivedCurrVal = currentValue;

  if (receivedCurrVal < startValue) {
    receivedCurrVal = startValue;
  }
  const currentVal: number = (receivedCurrVal / maxValue) * 100;

  return (
    <View
      style={[
        progressBarStyles.barStyles,
        {
          width: width,
          height: height,
          borderWidth: strokeWidth,
          borderColor: strokeColor,
          backgroundColor: backgroundColor,
        },
      ]}
    >
      <View
        style={[
          progressBarStyles.progress,
          { backgroundColor: color, width: `${currentVal}%` },
        ]}
      />
    </View>
  );
};

export default ProgressBar;
