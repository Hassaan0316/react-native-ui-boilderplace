
import { StyleSheet } from 'react-native';
import Block from './Block';
import { colorPalletes } from './Constants';
import { IButtonGroup } from './interface';
import TextComponent from './TextComponent';
import TouchableBlock from './TouchableBlock';

const ButtonGroup = (props: IButtonGroup) => {

  const {
    buttons,
    selectedButton,
    onSelect,
    activeButtonColor = colorPalletes['alAdaam-80'],
    containerStyle,
    buttonStyle,
    buttonTextStyle,
    inActiveTextColor = colorPalletes['grey-60'],
    textStyles
  } = props;

  return (
    <Block accessible={false} flexWrap="wrap" flexDirection="row" gap={8} style={containerStyle}>
      {buttons.map((button, index) => {
        return (
          <TouchableBlock
            key={index}
            style={[
              styles.button,
              selectedButton === index && {
                borderColor: activeButtonColor,
                backgroundColor: activeButtonColor + '10',
              },
              buttonStyle,
            ]}
            onPress={() => onSelect(index)}
            {...props}
          >
            <TextComponent
              color={selectedButton === index ? activeButtonColor : inActiveTextColor}
              style={[buttonTextStyle, textStyles]}
            >
              {button}
            </TextComponent>
          </TouchableBlock>
        );
      })}
    </Block>
  );
};

const styles = StyleSheet.create({
  button: {
    maxWidth: '100%',
    paddingVertical: 8,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: colorPalletes['grey-40'],
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
});

export default ButtonGroup;
