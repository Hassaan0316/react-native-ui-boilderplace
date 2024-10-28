import { useState, useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { multiply, Block, TextComponent, RadioButton, ToggleButton } from 'react-native-ui-boilderplace-test';

export default function App() {
  const [result] = useState<number | undefined>();
  const [radio, setRadio] = useState<boolean>(false);

  useEffect(() => {
    multiply(3, 7)
  }, []);

  return (
    <Block style={styles.container}>
      <TextComponent>Result: {result}</TextComponent>
      <RadioButton
        enable={radio}
        handleChange={() => setRadio(prev => !prev)}
      />

      <ToggleButton
        value={radio}
        handleToggle={() => setRadio(prev => !prev)}
      />
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
