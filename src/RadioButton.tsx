import { GestureResponderEvent, ViewProps, ViewStyle } from 'react-native';
import { iViewStyles } from './interface';
import Block from './Block';
import { colorPalletes } from './Constants';
import TouchableBlock from './TouchableBlock';

interface iProps extends iViewStyles, ViewProps {
  handleChange: ((event: GestureResponderEvent) => void) | undefined;
  enable: boolean;
  disabled?: boolean;
  bubbleStyles?: ViewStyle;
  size?: number;
  ballSize?: number;
}

const RadioButton = (props: iProps) => {
  const { enable, handleChange, disabled, bubbleStyles, size, ballSize} = props;
  let SIZE = size || 20;
  let BALL_SIZE = ballSize || 14;

  return (
    <TouchableBlock
      disabled={disabled}
      width={SIZE}
      height={SIZE}
      backgroundColor={colorPalletes.white}
      borderWidth={1}
      borderColor={enable ? colorPalletes['alAdaam-80'] : colorPalletes['grey-40']}
      borderRadius={SIZE / 2}
      justify="center"
      align="center"
      onPress={handleChange}
      {...props}
    >
      <Block
        width={BALL_SIZE}
        height={BALL_SIZE}
        borderRadius={BALL_SIZE / 2}
        backgroundColor={enable ? colorPalletes['alAdaam-80'] : colorPalletes.white}
        {...bubbleStyles}
      />
    </TouchableBlock>
  );
};

export default RadioButton;
