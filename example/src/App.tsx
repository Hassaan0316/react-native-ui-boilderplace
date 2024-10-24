import { useState, useEffect } from 'react';
import { StyleSheet, Text } from 'react-native';
import { multiply, Block } from 'react-native-ui-boilderplace-test';

export default function App() {
  const [result, setResult] = useState<number | undefined>();

  useEffect(() => {
    multiply(3, 7).then(setResult);
  }, []);

  return (
    <Block style={styles.container}>
      <Text>Result: {result}</Text>
    </Block>
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