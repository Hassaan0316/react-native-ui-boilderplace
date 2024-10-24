import { ReactNode } from 'react';
import { Text, TextProps } from 'react-native';
import { iTextStyles } from './interface';
interface iProps extends iTextStyles, TextProps {
    children?: ReactNode | string;
}
declare const TextComponent: import("react").ForwardRefExoticComponent<iProps & import("react").RefAttributes<Text>>;
export default TextComponent;
