import { ViewProps } from 'react-native';
import { iViewStyles } from './interface';
export interface iBlockProps extends iViewStyles, ViewProps {
}
declare const Block: (props: iBlockProps) => import("react/jsx-runtime").JSX.Element;
export default Block;
