import { GestureResponderEvent, Pressable, ViewProps } from 'react-native';
import { iViewStyles } from './interface';
import Block from './Block';
import { colorPalletes } from './Constants';

interface iProps extends iViewStyles, ViewProps {
  handleChange: ((event: GestureResponderEvent) => void) | null | undefined;
  enable: boolean;
  disabled?: boolean;
}

const RadioButton = (props: iProps) => {
  const { enable, handleChange, disabled } = props;

  return (
    <Pressable
      disabled={disabled}
      accessible={false}
      importantForAccessibility="no-hide-descendants"
      accessibilityElementsHidden
      style={{ height: 24 }}
      onPress={handleChange}>
      <Block
        width={20}
        height={20}
        backgroundColor={colorPalletes.white}
        borderWidth={1}
        borderColor={enable ? colorPalletes['alAdaam-80'] : colorPalletes['grey-40']}
        borderRadius={10}
        justify="center"
        align="center"
        {...props}>
        <Block
          width={14}
          height={14}
          backgroundColor={enable ? colorPalletes['alAdaam-80'] : colorPalletes.white}></Block>
      </Block>
    </Pressable>
  );
};

export default RadioButton;
