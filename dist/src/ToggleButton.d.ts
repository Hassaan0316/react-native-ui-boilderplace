import React from 'react';
import { ViewProps, ViewStyle } from 'react-native';
import { iViewStyles } from './interface';
interface Props extends iViewStyles, ViewProps {
    handleToggle: () => void;
    value: boolean;
    disabled?: boolean;
    innerBallStyles?: ViewStyle;
}
declare const ToggleButton: React.FC<Props>;
export default ToggleButton;
