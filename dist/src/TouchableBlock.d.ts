/// <reference types="react" />
import { TouchableOpacityProps } from 'react-native';
import { iViewStyles } from './interface';
interface iProps extends iViewStyles, TouchableOpacityProps {
    activeOpacity?: number;
}
declare const TouchableBlock: import("react").ForwardRefExoticComponent<iProps & import("react").RefAttributes<any>>;
export default TouchableBlock;
