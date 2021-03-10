import axios from 'axios';
import { AnyAction } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { baseUrl } from '../../../api/constans';
import { RootState } from '../../../reduxStore';
import { TOP_STORIES_FAIL, TOP_STORIES_LOADING, TOP_STORIES_SUCCESS } from './hackerNewsMiddlewareTypes';

type Thunk = ThunkAction<Promise<void>, RootState, unknown, AnyAction>;

export const getTopStories = (): Thunk => async dispatch => {
    const url = `${baseUrl}/topstories.json`;
    
    dispatch({ type: TOP_STORIES_LOADING });
    try {
      const response = await axios.get(url);
      const data = response.data
      data.length = 10
      
      const stories = []

      for (const item of data) {
        const detailUrl = `${baseUrl}/item/${item}.json`;
        const detailResponse = await axios.get(detailUrl);
        const {by: auther, title, url: articleUrl, time, score} = detailResponse.data
        const autherUrl = `${baseUrl}/user/${auther}.json`;
        const autherResponse = await axios.get(autherUrl);
        const {id: autherId, karma: autherKarma} = autherResponse.data
        stories.push({
          id: item,
          title,
          url: articleUrl,
          time,
          score,
          autherId,
          autherKarma
        })
      }
      stories.sort((a, b) => a.score - b.score)
      stories.reverse()
      dispatch({ type: TOP_STORIES_SUCCESS, stories });
    } catch (error) {
      dispatch({ type: TOP_STORIES_FAIL });
    }
};

