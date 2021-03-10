import HTTP from '../../../types/http';
export const EXAMPLE_FAIL = 'EXAMPLE_FAIL';
export const EXAMPLE_LOADING = 'EXAMPLE_LOADING';
export const EXAMPLE_SUCCESS = 'EXAMPLE_SUCCESS';

interface ExampleLoading {
    type: typeof EXAMPLE_LOADING;
  }
  
  interface ExampleFail {
    type: typeof EXAMPLE_FAIL;
    response: HTTP.INTERNAL_SERVER_ERROR | HTTP.UNPROCESSABLE_ENTITY;
    message: string;
  }
  
  interface ExampleSuccess {
    type: typeof EXAMPLE_SUCCESS;
  }

export type <FTName | camelcase>DispatchTypes =
ExampleLoading |
ExampleFail |
ExampleSuccess;