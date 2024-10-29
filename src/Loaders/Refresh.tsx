import { RefreshControl } from 'react-native';
import { useEffect, useState } from 'react';
import { IRefresh } from '../interface';
import { colorPalletes } from '../Constants';

const Refresh = ({ color, progressViewOffset, refreshing, onRefresh, ...props }: IRefresh) => {
  const [isRefreshing, setRefreshing] = useState(true);

  useEffect(() => {
    setRefreshing(refreshing);
  }, [refreshing]);

  return (
    <RefreshControl
      tintColor={color ?? colorPalletes.grey}
      colors={[color ?? colorPalletes.grey]}
      progressViewOffset={progressViewOffset}
      refreshing={isRefreshing}
      onRefresh={onRefresh}
      {...props}
    />
  );
};

export default Refresh;
