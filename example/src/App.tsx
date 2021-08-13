import * as React from 'react';

import { Button, StyleSheet, View } from 'react-native';
import { ProgressBar } from 'rn-progress';

export default function App() {
  // const [result, setResult] = React.useState<number | undefined>();
  const [val, setVal] = React.useState<number>(10);

  let pgRef: NodeJS.Timer;

  React.useEffect(() => {
    // RnProgress.multiply(3, 7).then(setResult);
  }, []);

  const onPress = () => {
    let m = val;
    pgRef = setInterval(() => {
      m = m + 1;

      setVal(m);

      if (m === 80) {
        clearInterval(pgRef);
      }
    }, 100);
  };

  return (
    <View style={styles.container}>
      <ProgressBar maxValue={80} startValue={20} currentValue={val} />

      <Button title={'Start'} onPress={() => onPress()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
