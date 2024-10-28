// import React from 'react';
// import { ViewProps, Pressable, I18nManager, ViewStyle } from 'react-native';
// import Animated, { useAnimatedStyle, interpolate, withTiming } from 'react-native-reanimated';
// import Block from './Block';
// import { iViewStyles } from './interface';
// import { colorPalletes } from './Constants';

// interface Props extends iViewStyles, ViewProps {
//   handleToggle: () => void;
//   value: boolean;
//   disabled?: boolean;
//   innerBallStyles?: ViewStyle
// }

// const ToggleButton: React.FC<Props> = (props) => {
//   const { handleToggle, value, disabled, innerBallStyles } = props;

//   const animatedStyle = useAnimatedStyle(() => {
//     const translateX = interpolate(value ? 1 : 0, [0, 1], [0, I18nManager.isRTL ? -20 : 20]);
//     return {
//       transform: [{ translateX: withTiming(translateX) }],
//     };
//   });

//   return (
//     <Pressable
//       disabled={disabled}
//       accessible={true}
//       onPress={handleToggle}
//     >
//       <Block
//         height={24}
//         width={44}
//         backgroundColor={value ? colorPalletes['alAdaam-80'] : colorPalletes['grey-60']}
//         borderRadius={40}
//         paddingHorizontal={2}
//         paddingVertical={2}
//       >
//         <Animated.View
//           style={[
//             {
//               width: 20,
//               height: 20,
//               backgroundColor: 'white',
//               borderRadius: 40,
//             },
//             animatedStyle, innerBallStyles
//           ]}
//         />
//       </Block>
//     </Pressable>
//   );
// };

// export default ToggleButton;

import React, { useRef, useEffect } from 'react';
import { ViewProps, Pressable, I18nManager, ViewStyle, Animated } from 'react-native';
import Block from './Block';
import { iViewStyles } from './interface';
import { colorPalletes } from './Constants';

interface Props extends iViewStyles, ViewProps {
  handleToggle: () => void;
  value: boolean;
  disabled?: boolean;
  innerBallStyles?: ViewStyle;
}

const ToggleButton: React.FC<Props> = (props) => {
  const { handleToggle, value, disabled, innerBallStyles } = props;

  // Create an animated value
  const translateX = useRef(new Animated.Value(value ? (I18nManager.isRTL ? -20 : 20) : 0)).current;

  // Update the animated value when `value` changes
  useEffect(() => {
    Animated.timing(translateX, {
      toValue: value ? (I18nManager.isRTL ? -20 : 20) : 0,
      duration: 300, // Adjust the duration as needed
      useNativeDriver: true, // Use native driver for better performance
    }).start();
  }, [value, translateX]);

  // Create a style that uses the animated value
  const animatedStyle = {
    transform: [{ translateX }],
  };

  return (
    <Pressable
      disabled={disabled}
      accessible={true}
      onPress={handleToggle}
    >
      <Block
        height={24}
        width={44}
        backgroundColor={value ? colorPalletes['alAdaam-80'] : colorPalletes['grey-60']}
        borderRadius={40}
        paddingHorizontal={2}
        paddingVertical={2}
      >
        <Animated.View
          style={[
            {
              width: 20,
              height: 20,
              backgroundColor: 'white',
              borderRadius: 40,
            },
            animatedStyle,
            innerBallStyles,
          ]}
        />
      </Block>
    </Pressable>
  );
};

export default ToggleButton;
