import { ViewStyle } from "react-native";
import Block from "./Block";
import { colorPalletes } from "./Constants";


interface iProps {
  opacity?: number;
  height?: number;
  styles?: ViewStyle
}

const BlurComp = ({ opacity = 0.7, height = 40, styles }: iProps) => {

  return (
    <Block
      accessible={false}
      importantForAccessibility='no-hide-descendants'
      accessibilityElementsHidden
      opacity={opacity}
      position="absolute"
      height={height}
      backgroundColor={colorPalletes['skyline-50']}
      bottom={0}
      width={'100%'}
      borderRadius={0}
      alignSelf="center"
      style={[{ zIndex: 1 }, styles]}
    />
  )
}

export default BlurComp