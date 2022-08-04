import {takeLatest, put, fork, call} from "redux-saga/effects"
import { fetchMovies,fetchMovie } from "./api"
import {getMovies, setMovies,setMovie,getMovie} from "./feture/movieSlice"

function* onLoadMoviesAsync({payload}){
    try{
        const movieName = payload;
        const response = yield call(fetchMovies, movieName);
        if(response.status === 200){
            yield put(setMovies({...response.data}))
        }
    }catch(e){
        console.log(e);
    }
}
function* onLoadMovieAsync({payload}){
    try{
        const movieId = payload;
        const response = yield call(fetchMovie, movieId);
        if(response.status === 200){
            yield put(setMovie({...response.data}))
        }
    }catch(e){
        console.log(e);
    }
}
function* onLoadMovies(){
    yield takeLatest(getMovies.type, onLoadMoviesAsync);
}
function* onLoadMovie(){
    yield takeLatest(getMovie.type, onLoadMovieAsync);
}
export const movieSagas = [fork(onLoadMovies),fork(onLoadMovie)]