import * as Actions from '../actions';
import { Movie } from '../../../models/movie';

export interface MoviesState {
     movies: Movie[];
     loading: boolean;
}

const initialState: MoviesState = {
  movies : [],
  loading: false
};

export function moviesReducer(state = initialState, action: Actions.MoviesActions ): MoviesState {
  switch (action.type) {
    case Actions.MoviesActionTypes.GET_MOVIES: {
      return {
       ...state,
       loading: true
      };
    }
    case Actions.MoviesActionTypes.GET_MOVIES_SUCCESS: {
      return{
        ...state,
        movies: action.payload,
        loading: false
      };
    }
    case Actions.MoviesActionTypes.ADD_MOVIE_SUCCESS: {
      return{
        ...state,
        movies: [...state.movies, action.payload]
      };
    }
    case Actions.MoviesActionTypes.EDIT_MOVIE_SUCCESS: {
      return{
        ...state,
        movies: state.movies.map(item => {
          return item.MaPhim === action.payload.MaPhim
            ? Object.assign({}, item, action.payload)
            : item;
        })
      };
    }
    case Actions.MoviesActionTypes.DELETE_MOVIE_SUCCESS: {
      return{
        ...state,
        movies: state.movies.filter(movie => movie.MaPhim !== action.payload)
      };
    }
    default: {
      return state;
    }
  }
}

export const getMovies = (state: MoviesState) => state.loading;
export const getMoviesSuccess = (state: MoviesState) => state.movies;
