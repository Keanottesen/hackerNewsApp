export const TOP_STORIES_FAIL = 'TOP_STORIES_FAIL';
export const TOP_STORIES_LOADING = 'TOP_STORIES_LOADING';
export const TOP_STORIES_SUCCESS = 'TOP_STORIES_SUCCESS';

export const STORY_DETAIL_FAIL = 'STORY_DETAIL_FAIL';
export const STORY_DETAIL_LOADING = 'STORY_DETAIL_LOADING';
export const STORY_DETAIL_SUCCESS = 'STORY_DETAIL_SUCCESS';

export const AUTHER_DETAIL_FAIL = 'AUTHER_DETAIL_FAIL';
export const AUTHER_DETAIL_LOADING = 'AUTHER_DETAIL_LOADING';
export const AUTHER_DETAIL_SUCCESS = 'AUTHER_DETAIL_SUCCESS';


interface TopStoriesFail {
  type: typeof TOP_STORIES_FAIL;
}

interface TopStoriesLoading {
  type: typeof TOP_STORIES_LOADING;
}

interface TopStoriesSuccess {
  type: typeof TOP_STORIES_SUCCESS;
  stories: number[];
}

interface StoryDetailFail {
  type: typeof STORY_DETAIL_FAIL;
}

interface StoryDetailLoading {
  type: typeof STORY_DETAIL_LOADING;
}

interface StoryDetailSuccess {
  type: typeof STORY_DETAIL_SUCCESS;
  title: string;
  url: string;
  timestamp: string;
  score: number;
}

interface AutherDetailFail {
  type: typeof AUTHER_DETAIL_FAIL;
}

interface AutherDetailLoading {
  type: typeof AUTHER_DETAIL_LOADING;
}

interface AutherDetailSuccess {
  type: typeof AUTHER_DETAIL_SUCCESS;
  autherId: number;
  autherKarmaScore: number;
}

export type hackerNewsDispatchTypes =
TopStoriesFail |
TopStoriesLoading |
TopStoriesSuccess|
StoryDetailFail |
StoryDetailLoading |
StoryDetailSuccess |
AutherDetailFail |
AutherDetailLoading |
AutherDetailSuccess;