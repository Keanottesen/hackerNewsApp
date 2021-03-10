import React, { useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { DefaultNavigationProps, DefaultRouteProps } from '../../../navigation/types';
import { WebView } from 'react-native-webview';

interface Props {
  navigation: DefaultNavigationProps<'StoriesDetail'>;
  route: DefaultRouteProps<'StoriesDetail'>
}

const StoriesDetail: React.FC<Props> = props => {
  
  return (
    <View style={{flex: 1}}>
         <WebView source={{ uri: props.route.params.link }} />
    </View>
  );
};

export default StoriesDetail;
