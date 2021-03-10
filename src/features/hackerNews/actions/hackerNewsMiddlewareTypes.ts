export const TOP_STORIES_FAIL = 'TOP_STORIES_FAIL';
export const TOP_STORIES_LOADING = 'TOP_STORIES_LOADING';
export const TOP_STORIES_SUCCESS = 'TOP_STORIES_SUCCESS';

export type Story = {
  id: number;
  title: string;
  url: string;
  time: string;
  score: number;
  autherId: number; 
  autherKarma: number;
}

interface TopStoriesFail {
  type: typeof TOP_STORIES_FAIL;
}

interface TopStoriesLoading {
  type: typeof TOP_STORIES_LOADING;
}

interface TopStoriesSuccess {
  type: typeof TOP_STORIES_SUCCESS;
  stories: Story[];
}

export type hackerNewsDispatchTypes =
TopStoriesFail |
TopStoriesLoading |
TopStoriesSuccess;