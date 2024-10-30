import { ViewStyle } from 'react-native';
interface iProps extends ViewStyle {
    indicatorColor?: string;
    size?: number | 'small' | 'large';
    activityIndicatorStyles?: ViewStyle;
}
declare const LoadingIndicator: (props: iProps) => import("react/jsx-runtime").JSX.Element;
export default LoadingIndicator;
