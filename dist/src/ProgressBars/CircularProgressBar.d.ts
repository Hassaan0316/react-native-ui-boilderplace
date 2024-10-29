import { ViewStyle } from 'react-native';
import { CircularProgressProps } from 'react-native-circular-progress-indicator/lib/typescript/types';
interface iProps extends CircularProgressProps {
    progress: string;
    strokeWidth?: number;
    style?: ViewStyle;
    radius?: number;
}
declare const CircularProgressBar: (props: iProps) => import("react/jsx-runtime").JSX.Element;
export default CircularProgressBar;
