/* eslint-disable camelcase */
import axios from 'axios';
import * as analytics from 'expo-analytics-segment';
import { showMessage } from 'react-native-flash-message';
import { StackNavigationProp } from '@react-navigation/stack';
import { AnyAction } from 'redux';
import { ThunkAction } from 'redux-thunk';
import {
    //logic
  } from './<FTName | lowercasefirstchar>MiddlewareLogic';
import {
    DefaultNavigationProps,
    RootStackParamList,
} from '../../../navigation/types';
import { baseUrl, uniqueId } from '../../../api/constants';
import {
    EXAMPLE_FAIL,
    EXAMPLE_LOADING,
    EXAMPLE_SUCCESS,
  } from './<FTName | lowercasefirstchar>MiddlewareTypes';
  import { RootState } from '../../../reduxStore';
type NavigationProp = StackNavigationProp<RootStackParamList, 'Example'>;
type Thunk = ThunkAction<Promise<void>, RootState, unknown, AnyAction>;

export const example = (
    // parametre
  ): Thunk => async dispatch => {
    const url = `${baseUrl}/example`;
    // const body = if you post;
    dispatch({ type: EXAMPLE_LOADING });
    try {
      const response = await axios.post(url, body);
      dispatch({ type: EXAMPLE_SUCCESS });
    } catch (error) {
      dispatch({ type: EXAMPLE_FAIL });
    }
  };