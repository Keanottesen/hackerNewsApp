import React from 'react';
import {
  NavigationContainer,
  DefaultTheme,
} from '@react-navigation/native';
import {
  createStackNavigator,
} from '@react-navigation/stack';
import * as Screens from './Screens'
import { RootStackParamList } from './types';
import {
  StoriesDetail,
  TopStories,
} from '../features/hackerNews/components';

const Stack = createStackNavigator<RootStackParamList>();

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'rgb(255, 255, 255)',
  },
};

const AppNavigator: React.FC = () => {

  return (
    <NavigationContainer
      theme={MyTheme}
    >
      <Stack.Navigator
        initialRouteName={Screens.TOP_STORIES}
        screenOptions={{headerShown: false}}
      >
        <Stack.Screen
          name={Screens.TOP_STORIES}
          component={TopStories}
        />
        <Stack.Screen
          name={Screens.STORIES_DETAIL}
          component={StoriesDetail}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
