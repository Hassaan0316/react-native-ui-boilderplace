import { PressableProps } from 'react-native';
import { iViewStyles } from './interface';
interface iProps extends PressableProps {
    toggleCheckBox: boolean;
    handleCheckBox: (value: boolean) => void;
    color?: string;
    duration?: number;
    style?: iViewStyles;
}
declare const CheckBoxComponent: (props: iProps) => import("react/jsx-runtime").JSX.Element;
export default CheckBoxComponent;
