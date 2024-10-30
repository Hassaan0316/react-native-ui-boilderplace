import { useState, useEffect } from 'react';
import { StyleSheet, TextInput } from 'react-native';
import {
  multiply,
  Block,
  TextComponent,
} from 'react-native-ui-boilderplace';
import { colorPalletes, screenWidth } from '../../src/Constants';

export default function App() {
  const [result] = useState<number | undefined>();
  // const [radio, setRadio] = useState<boolean>(false);
  const [val, setVal] = useState('')

  useEffect(() => {
    multiply(3, 7);
  }, []);

  // const target = 100;
  // const value = 65;
  // let containerWidthAndHeight = IsIPAD ? 200 : (screenWidth - 48) / 2 - 6 - 36;

  return (
    <Block style={styles.container}>
      <TextComponent>Result: {result}</TextComponent>
      <TextInput
        value={val}
        onChangeText={setVal}
        multiline
        numberOfLines={2}
        underlineColorAndroid={'transparent'}
        style={{ width: screenWidth - 48, height: 'auto', backgroundColor: colorPalletes['skyline-50'],
          borderRadius: 10,
          borderWidth: 1,
          textAlign: 'left',
          padding: 16
         }}
      />
      {/* <RadioButton
        enable={radio}
        handleChange={() => setRadio(prev => !prev)}
      /> */}
      {/* 
      <ToggleButton
        value={radio}
        handleToggle={() => setRadio(prev => !prev)}
      />

      <ButtonGroup
        buttonStyle={{ width: 48 }}
        buttons={['yes', 'no']}
        onSelect={(index: number) => {
          console.log('Button selected', index)
        }}
        selectedButton={0}
      />

      <PrimaryButton
        primaryAlpha
        titleText={'hello'}
        PRIMARY_BUTTON_HEIGHT={48}
      />

      <CheckBoxComponent
        handleCheckBox={(val: boolean) => setRadio(val)}
        toggleCheckBox={radio}
      />

      <LinearProgress
        progress={20}
        borderRadius={10}
      />

      <Block>
        <CircularProgressBar
          progress={
            (value as number) >= (target as number)
              ? '100'
              : (((value as number) / target) * 100).toString()
          }
          value={value}
          radius={containerWidthAndHeight / 2}
          strokeWidth={20}
        />
      </Block> */}

      {/* <FullPageLoader /> */}
      {/* <LoadingIndicator /> */}
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
