import { ActivityIndicator, ViewStyle } from 'react-native';
import { Block } from 'react-native-ui-boilderplace-test'
import { colorPalletes } from '../Constants';

interface iProps extends ViewStyle {
  indicatorColor?: string;
  size?: number | 'small' | 'large';
  activityIndicatorStyles?: ViewStyle
}

const LoadingIndicator = (props: iProps) => {

  return (
    <Block
      width={'100%'}
      paddingVertical={16}
      height={'auto'}
      align="center"
      justify="center"
      {...props}>
      <ActivityIndicator
        size={props.size || 'large'}
        color={props.indicatorColor || colorPalletes.grey}
        style={[props?.activityIndicatorStyles]}
      />
    </Block>
  );
};

export default LoadingIndicator;
