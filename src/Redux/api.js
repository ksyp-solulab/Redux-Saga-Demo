import axios from 'axios';

const API_ENDPOINT = `https://www.omdbapi.com/?i=tt3896198&apikey=b22145db`;

export const fetchMovies = async (movieName) => axios.get(`${API_ENDPOINT}&s=${movieName}`)

export const fetchMovie = async (movieId) => {
    console.log(`${API_ENDPOINT}&i=tt1285016`);
}