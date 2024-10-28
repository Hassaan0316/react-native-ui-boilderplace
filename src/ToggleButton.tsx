import React, { memo } from 'react';
import { ViewProps, Pressable, I18nManager } from 'react-native';
import Animated, { useAnimatedStyle, interpolate, withTiming } from 'react-native-reanimated';
import Block from './Block';
import { iViewStyles } from './interface';
import { colorPalletes } from './Constants';

interface Props extends iViewStyles, ViewProps {
  handleToggle: () => void;
  value: boolean;
  disabled?: boolean;
}

const ToggleButton: React.FC<Props> = (props) => {
  const { handleToggle, value, disabled } = props;

  const animatedStyle = useAnimatedStyle(() => {
    const translateX = interpolate(value ? 1 : 0, [0, 1], [0, I18nManager.isRTL ? -20 : 20]);
    return {
      transform: [{ translateX: withTiming(translateX) }],
    };
  });

  return (
    <Pressable
      disabled={disabled}
      accessible={true}
      onPress={handleToggle}>
      <Block
        height={24}
        width={44}
        backgroundColor={value ? colorPalletes['alAdaam-80'] : colorPalletes['grey-60']}
        borderRadius={40}
        paddingHorizontal={2}
        paddingVertical={2}>
        <Animated.View
          style={[
            {
              width: 20,
              height: 20,
              backgroundColor: 'white',
              borderRadius: 40,
            },
            animatedStyle,
          ]}
        />
      </Block>
    </Pressable>
  );
};

export default memo(ToggleButton);
