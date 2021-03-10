import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';
import * as Screens from './Screens';

export type RootStackParamList = {
  [Screens.TOP_STORIES]: undefined;
  [Screens.STORIES_DETAIL]: {id: number};
};

export type DefaultNavigationProps<
  T extends keyof RootStackParamList
> = StackNavigationProp<RootStackParamList, T>;

export type DefaultRouteProps<T extends keyof RootStackParamList> = RouteProp<
  RootStackParamList,
  T
>;
