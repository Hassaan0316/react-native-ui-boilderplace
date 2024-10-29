import { ViewStyle } from 'react-native'
import LoadingIndicator from './LoadingIndicator'
import { screenheight, screenWidth } from '../Constants'

interface iProps extends ViewStyle {
  indicatorColor?: string
}

const FullPageLoader = (props: iProps) => {
  return (
    <LoadingIndicator
      top={0}
      left={0}
      right={0}
      bottom={0}
      position='absolute'
      alignItems='center'
      justifyContent='center'
      width={screenWidth}
      height={screenheight}
      zIndex={111}
      {...props}
    />
  )
}

export default FullPageLoader