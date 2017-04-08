import { getAllFilms } from './api';
import { FETCH_ALL_FILMS } from './constants';

export function getAllFilms() {
  return dispatch => {
    getAllFilms()
        .then(function getAllFilmsSuccess(response) {
            dispatch({
                type: FETCH_ALL_FILMS,
                data: response
            })
        })
        .catch(function getAllFilmsCatch(err) {
            console.error(err);
            return err;
        });
  }
}