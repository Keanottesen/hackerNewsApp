import {
    hackerNewsDispatchTypes,
  } from '../actions/hackerNewsMiddlewareTypes';
  
  interface DefaultStateI {

  }
  
  const defaultState: DefaultStateI = {

  };
  
  const hackerNewsReducer = (
    state: DefaultStateI = defaultState,
    action: hackerNewsDispatchTypes,
  ): DefaultStateI => {
    switch (action.type) {
      case EXAMPLE:
        return {
          ...state,
          loading: true,
        };
      default:
        return state;
    }
  };
  
  export default hackerNewsReducer;
  