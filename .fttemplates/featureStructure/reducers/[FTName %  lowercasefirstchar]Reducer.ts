import {
    <FTName | camelcase>DispatchTypes,
  } from '../actions/<FTName |  lowercasefirstchar>MiddlewareTypes';
  
  interface DefaultStateI {

  }
  
  const defaultState: DefaultStateI = {

  };
  
  const <FTName | lowercasefirstchar>Reducer = (
    state: DefaultStateI = defaultState,
    action: <FTName | camelcase>DispatchTypes,
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
  
  export default <FTName | lowercasefirstchar>Reducer;
  