import {
    hackerNewsDispatchTypes, Story, TOP_STORIES_FAIL, TOP_STORIES_LOADING, TOP_STORIES_SUCCESS,
  } from '../actions/hackerNewsMiddlewareTypes';
  
  interface DefaultStateI {
    loading: boolean,
    stories: Story[]
  }
  
  const defaultState: DefaultStateI = {
    loading: false,
    stories: []
  };
  
  const hackerNewsReducer = (
    state: DefaultStateI = defaultState,
    action: hackerNewsDispatchTypes,
  ): DefaultStateI => {
    switch (action.type) {
      case TOP_STORIES_LOADING:
        return {
          ...state,
          loading: true,
        };
      case TOP_STORIES_SUCCESS:
        return {
          ...state,
          loading: false,
          stories: action.stories
        };
      case TOP_STORIES_FAIL:
        return {
          ...state,
          loading: false,
        };
      default:
        return state;
    }
  };
  
  export default hackerNewsReducer;
  