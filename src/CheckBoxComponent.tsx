import { useEffect, useRef } from 'react';
import { StyleSheet, Pressable, PressableProps, Animated } from 'react-native';
import { iViewStyles } from './interface';
import { colorPalletes } from './Constants';
import Block from './Block';
import TickSvg from '../assets/TickSvg';

interface iProps extends PressableProps {
  toggleCheckBox: boolean;
  handleCheckBox: (value: boolean) => void;
  color?: string;
  duration?: number;
  style?: iViewStyles;
}

const CheckBoxComponent = (props: iProps) => {
  const { handleCheckBox, toggleCheckBox, color, style, duration } = props;

  // Create an animated value for progress
  const progress = useRef(new Animated.Value(toggleCheckBox ? 1 : 0)).current;

  // Animate the progress value when toggleCheckBox changes
  useEffect(() => {
    Animated.timing(progress, {
      toValue: toggleCheckBox ? 1 : 0,
      duration: duration ?? 300,
      useNativeDriver: false, // Color interpolation is not supported with native driver
    }).start();
  }, [toggleCheckBox, progress]);

  // Interpolate colors manually using the progress value
  const backgroundColor = progress.interpolate({
    inputRange: [0, 1],
    outputRange: [colorPalletes.white, color || colorPalletes['palm-80']],
    extrapolate: 'clamp'
  });

  const animatedStyle = {
    backgroundColor,
  };

  return (
    <Block accessible={false} flexDirection="row" gap={10}>
      <Pressable
        accessible={props.accessible || true}
        onPress={() => handleCheckBox(!toggleCheckBox)}
      >
        <Animated.View style={[styles.containerStyles, animatedStyle, style]}>
          <TickSvg />
        </Animated.View>
      </Pressable>
    </Block>
  );
};

const styles = StyleSheet.create({
  containerStyles: {
    height: 24,
    width: 24,
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: colorPalletes['grey-20'],
    borderWidth: 1,
  },
});

export default CheckBoxComponent;