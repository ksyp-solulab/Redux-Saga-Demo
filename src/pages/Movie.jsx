import React,{useEffect} from 'react'
import {useParams} from 'react-router-dom'
import { useDispatch} from 'react-redux'
import {getMovie} from '../Redux/feture/movieSlice'
const Movie = () => {
  const dispatch = useDispatch();
  const {id} = useParams();


  useEffect(() => {
    if(id){
      dispatch(getMovie(id));
    }
  },[id])
  return (
    <div>
      Data is not available for {id}
    </div>
  )
}

export default Movie