import { GestureResponderEvent, ViewProps, ViewStyle } from 'react-native';
import { iViewStyles } from './interface';
interface iProps extends iViewStyles, ViewProps {
    handleChange: ((event: GestureResponderEvent) => void) | undefined;
    enable: boolean;
    disabled?: boolean;
    bubbleStyles?: ViewStyle;
    size?: number;
    ballSize?: number;
}
declare const RadioButton: (props: iProps) => import("react/jsx-runtime").JSX.Element;
export default RadioButton;
