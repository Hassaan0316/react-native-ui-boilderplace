import { ViewStyle, ViewProps } from 'react-native';
import { Linecap } from 'react-native-svg';
interface iProp extends ViewStyle, ViewProps {
    progress: number;
    gradientColors?: {
        offset: string;
        color: string;
    }[];
    linecap?: Linecap;
    borderRadius?: number;
}
declare const LinearProgress: (props: iProp) => import("react/jsx-runtime").JSX.Element;
export default LinearProgress;
