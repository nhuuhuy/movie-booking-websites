import * as Actions from '../actions';

export interface NewsState {
     news: any;
     newsList: any;
     loading: boolean;
     loadingNews: boolean;
     newsPage: any;
}

const newsState: NewsState = {
    news: null,
    newsList: [],
    loading: false,
    loadingNews: false,
    newsPage: null
};

export function newsReducer(state = newsState, action: Actions.NewsActions ): NewsState {
  switch (action.type) {
    case Actions.NewsActionTypes.FETCH_NEWS: {
      return {
       ...state,
       loading: true
      };
    }
    case Actions.NewsActionTypes.FETCH_NEWS_SUCCESS: {
      return {
       ...state,
       loading: false,
       newsList: [...state.newsList, action.payload]
      };
    }
    case Actions.NewsActionTypes.FETCH_NEWS_LIST: {
      return {
       ...state,
       loadingNews: true
      };
    }
    case Actions.NewsActionTypes.FETCH_NEWS_LIST_SUCCESS: {
      return {
       ...state,
       loadingNews: false,
       newsPage:  action.payload
      };
    }
    case Actions.NewsActionTypes.FETCH_NEWS_DETAIL: {
      return {
       ...state,
      };
    }
    case Actions.NewsActionTypes.FETCH_NEWS_DETAIL_SUCCESS: {
      return {
       ...state,
       news: action.payload
      };
    }
    default: {
      return state;
    }
  }
}

export const newsLoad = (state: NewsState) => state.loading;
export const newsList = (state: NewsState) => state.newsList;
export const loadingNews = (state: NewsState) => state.loadingNews;
export const newsPage = (state: NewsState) => state.newsPage;
export const newsDetail = (state: NewsState) => state.news;
