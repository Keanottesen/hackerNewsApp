import React, { useEffect, useRef, useState } from 'react';
import { View, Text, SafeAreaView, Dimensions, TouchableOpacity } from 'react-native';
import { State } from 'react-native-gesture-handler';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { DefaultNavigationProps } from '../../../navigation/types';
import { animatedStyles, scrollInterpolator } from '../containers/animations';
import { RootState } from '../../../reduxStore';
import { useSelector, useDispatch } from 'react-redux';
import { getTopStories } from '../actions/hackerNewsMiddleware';
import Loader from '../../../components/loaders/Loader';
import getRandomColor from '../containers/randomizeColor';
import moment from 'moment';
import 'moment/locale/da';
import {
  Story
} from '../actions/hackerNewsMiddlewareTypes';

interface Props {
  navigation: DefaultNavigationProps<'TopStories'>;
}

const TopStories: React.FC<Props> = props => {
  const state = useSelector((_state: RootState) => _state.hackerNews);
  const dispatch = useDispatch();
  const [activeItem, setActiveItem] = useState(0)
  const conatinerRef = useRef()

  const {width, height} = Dimensions.get('window')

  useEffect(() => {
    dispatch(getTopStories())
  }, []);

  type RenderItem = {
    item: Story,
    index: number
  }

  const renderItem = ({item, index}: RenderItem): React.ReactNode => (
    <TouchableOpacity
    onPress={() => {props.navigation.navigate('StoriesDetail', {link: item.url})}}
    style={{height: width * 0.9, width: width * 0.6, backgroundColor: getRandomColor(), borderRadius: 20, padding: 20, justifyContent: 'space-between'}}>
      <Text style={{fontSize: 15}}>Titel: {item.title}</Text>
      <Text style={{fontSize: 15}}>Link: {item.url}</Text>
      <Text style={{fontSize: 15}}>Score: {item.score}</Text>
      <Text style={{fontSize: 15}}>Karma: {item.autherKarma}</Text>
      <Text style={{fontSize: 15}}>Skrevet af: {item.autherId}</Text>
      <Text style={{fontSize: 15}}>Skrevet den: {moment(item.time).locale('da').format('LL')}</Text>
    </TouchableOpacity>
  )

  return (
    <SafeAreaView style={{backgroundColor: 'black', flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text style={{color: 'white', marginVertical: 50, fontSize: 60}}>
        Swipe til venstre :)
      </Text>
      <Carousel
        data={state.stories}
        renderItem={renderItem}
        sliderWidth={width}
        itemWidth={width * 0.6}
        containerCustomStyle={{height: height}}
        scrollInterpolator={scrollInterpolator}
        slideInterpolatedStyle={animatedStyles}
        useScrollView={true}
        onSnapToItem={(index) => setActiveItem(index) }
      />
      {state.loading && <Loader />}
    </SafeAreaView>
  );
};

export default TopStories;
