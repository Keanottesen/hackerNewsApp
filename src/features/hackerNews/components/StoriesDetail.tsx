import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import { DefaultNavigationProps } from '../../../navigation/types';
// if you need redux state
// import { RootState } from '../../../reduxStore';
// import { useSelector, useDispatch } from 'react-redux';

interface Props {
  navigation: DefaultNavigationProps<'TopStories'>;
}

const StoriesDetail: React.FC<Props> = props => {
//   if you need state
//const state = useSelector((_state: RootState) => _state.hackerNews);
// const dispatch = useDispatch();
  useEffect(() => {
    // on first mount
  }, []);

  return (
    <View style={{backgroundColor: 'pink'}}>
        <Text>This is a test</Text>
    </View>
  );
};

export default StoriesDetail;
