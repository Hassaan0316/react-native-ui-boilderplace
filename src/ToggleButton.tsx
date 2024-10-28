import React, { memo } from 'react';
import { ViewProps, I18nManager, ViewStyle } from 'react-native';
import Animated, { useAnimatedStyle, interpolate, withTiming } from 'react-native-reanimated';
import { iViewStyles } from './interface';
import { colorPalletes } from './Constants';
import TouchableBlock from './TouchableBlock';

interface Props extends iViewStyles, ViewProps {
  handleToggle: () => void;
  value: boolean;
  disabled?: boolean;
  innerBallStyles?: ViewStyle
}

const ToggleButton: React.FC<Props> = (props) => {
  const { handleToggle, value, disabled, innerBallStyles } = props;

  const animatedStyle = useAnimatedStyle(() => {
    const translateX = interpolate(value ? 1 : 0, [0, 1], [0, I18nManager.isRTL ? -20 : 20]);
    return {
      transform: [{ translateX: withTiming(translateX) }],
    };
  });

  return (
    <TouchableBlock
      disabled={disabled}
      onPress={handleToggle}
      accessible={true}
      height={24}
      width={44}
      backgroundColor={value ? colorPalletes['alAdaam-80'] : colorPalletes['grey-60']}
      borderRadius={40}
      paddingHorizontal={2}
      paddingVertical={2}
      {...props}
    >
      <Animated.View
        style={[
          {
            width: 20,
            height: 20,
            backgroundColor: 'white',
            borderRadius: 40,
          },
          animatedStyle, innerBallStyles
        ]}
      />
    </TouchableBlock>
  );
};

export default memo(ToggleButton);
