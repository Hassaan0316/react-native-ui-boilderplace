/// <reference types="react" />
import { ViewProps } from 'react-native';
import { iViewStyles } from './interface';
export interface iBlockProps extends iViewStyles, ViewProps {
}
declare const Block: import("react").ForwardRefExoticComponent<iBlockProps & import("react").RefAttributes<any>>;
export default Block;
