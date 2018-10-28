import * as movieListAction from '../actions';
import { Movie } from '../../../models/movie';

export interface MovieListState {
     loading: boolean;
     movieList: Movie[];
     trailer: string;
     movieSearch: Movie[];
}
const initialState: MovieListState = {
    loading: false,
    movieList: [],
    trailer: '',
    movieSearch: []
};
const convertString = (str) => {
  str = str.trim();
  str = str.toLowerCase();
  str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, 'a');
  str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, 'e');
  str = str.replace(/ì|í|ị|ỉ|ĩ/g, 'i');
  str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, 'o');
  str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, 'u');
  str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, 'y');
  str = str.replace(/đ/g, 'd');
  str = str.replace(/!|@|%|\^|\*|\(|\)|\+|\=|\<|\>|\?|\/|,|\.|\:|\;|\'|\"|\&|\#|\[|\]|~|\$|_|`|-|{|}|\||\\/g, ' ');
  str = str.replace(/ + /g, ' ');
  return str;
};
export function movieListReducer(state = initialState, action: movieListAction.ClassActions ): MovieListState {
  switch (action.type) {
    case  movieListAction.ClassActionTypes.FETCH_MOVIES: {
      return {
        ...state,
        loading: true};
    }
    case movieListAction.ClassActionTypes.FETCH_MOVIES_DONE: {
      return{
        ...state,
        loading: false,
        movieList: action.payload
      };
    }
    case movieListAction.ClassActionTypes.GET_TRAILER: {
      return{
        ...state,
        trailer: action.payload
      };
    }
    case movieListAction.ClassActionTypes.SEARCH_MOVIES: {
      const name = convertString(action.payload);
      let searchArr = [];
      if (name) {
        searchArr = state.movieList.filter(movie => convertString(movie.TenPhim).search(name) > -1 );
      }
      return{
        ...state,
        movieSearch: searchArr
      };
    }
    default: {
      return state;
    }
  }
}
export const fetchMovies = (state: MovieListState) => state.loading;
export const fetchMoviesSuccess = (state: MovieListState) => state.movieList;
export const searchMovie = (state: MovieListState) => state.movieSearch;
