import axios from 'axios';

export const getAllFilms = function getAllFilms() {
    return axios.get('http://swapi.co/api/films');
}