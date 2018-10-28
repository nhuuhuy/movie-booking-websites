import * as MovieAction from '../actions';
import { Movie } from '../../../models/movie';

export interface MovieState {
     movie: Movie;
     loading: boolean;
}

const initialState: MovieState = {
  movie: null,
  loading: false
};

export function movieReducer(state = initialState, action: MovieAction.MovieActions ): MovieState {
  switch (action.type) {
    case MovieAction.MovieActionTypes.getMovieDetail: {
      return {
        ...state,
        loading: true
      };
    }
    case MovieAction.MovieActionTypes.getMovieSuccess: {
      return {
        ...state,
        movie: action.payload,
        loading: false,
      };
    }
    default: {
      return state;
    }
  }
}
export const getMovie = (state: MovieState) => state.loading;
export const getMovieDetail = (state: MovieState) => state;
export const getMovieSuccess = (state: MovieState) => state.movie;
