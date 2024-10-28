import { View, ViewStyle, ViewProps, StyleSheet } from 'react-native'
import { LinearGradient, Linecap, Rect, Stop, Svg } from 'react-native-svg';
import { colorPalletes } from '../Constants';

interface iProp extends ViewStyle, ViewProps {
  progress: number;
  gradientColors?: {
    offset: string;
    color: string;
  }[];
  linecap?: Linecap;
  borderRadius?: number,
}

const LinearProgress = (props: iProp) => {
  const { backgroundColor = colorPalletes['skyline-10'], width = '100%', height = 24, progress, gradientColors, borderRadius = 8 } = props;

  return (
    <View style={[styles.container, { backgroundColor: backgroundColor, width: width, height: height }]}
      {...props}
    >
      <Svg height="100%" width="100%">
        <LinearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="0%">
          <Stop offset={gradientColors?.[0]?.offset || "0%"} stopColor={gradientColors?.[0]?.color || "#ff4500"} />
          <Stop offset={gradientColors?.[1]?.offset || "49.48%"} stopColor={gradientColors?.[1]?.color || "#ff8c00"} />
          {/* {gradientColors?.[2]?.color ? <Stop offset={gradientColors?.[2].offset || "100%"} stopColor={gradientColors?.[2].color || "#CCCCCC"} /> : <></>} */}
        </LinearGradient>
        <Rect
          width={`${progress}%`} height="100%"
          rx={borderRadius} // Set the horizontal corner radius
          ry={borderRadius} // Set the vertical corner radius
          fill="url(#grad)"
        />
      </Svg>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: 20,
  },
});


export default LinearProgress