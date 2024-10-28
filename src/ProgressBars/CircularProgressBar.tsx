import { ViewStyle } from 'react-native';
import { CircularProgressProps } from 'react-native-circular-progress-indicator/lib/typescript/types';
import CircularProgress from 'react-native-circular-progress-indicator';
import Block from '../Block';
import { colorPalletes } from '../Constants';

interface iProps extends CircularProgressProps {
  progress: string;
  strokeWidth?: number;
  style?: ViewStyle;
  radius?: number;
}

const CircularProgressBar = (props: iProps) => {
  const {
    progress,
    activeStrokeColor,
    activeStrokeSecondaryColor,
    strokeWidth,
    progressValueColor,
    maxValue,
    style,
    radius,
  } = props;

  return (
    <Block style={style}>
      <CircularProgress
        value={Number(progress)}
        maxValue={maxValue || 100}
        radius={radius || 5858}
        duration={1000}
        progressValueColor={progressValueColor || colorPalletes['alAdaam-80']}
        activeStrokeColor={activeStrokeColor || '#21A58D'}
        activeStrokeSecondaryColor={activeStrokeSecondaryColor || '#1CDEB6'}
        inActiveStrokeColor={colorPalletes['skyline-10']}
        inActiveStrokeWidth={strokeWidth || 6}
        activeStrokeWidth={strokeWidth || 6}
        titleColor={colorPalletes['grey-60']}
        titleStyle={{ fontWeight: 'bold' }}
        showProgressValue={false}
      />
    </Block>
  );
};

export default CircularProgressBar;
