import React, { useEffect, useState } from 'react'
import {API_KEY,imageUrl} from '../../constants/constants'
import axios  from '../axios'
import './Banner.css'
function Banner() {
  const [movie,setMovie] = useState()
  useEffect(()=>{
    axios.get(`discover/tv?api_key=${API_KEY}&with_networks=213`).then((resposne)=>{
      console.log(resposne.data.results[0]);
      setMovie(resposne.data.results[4])
    })
  },[])
  return (
    <div 
    style={{backgroundImage:`url(${movie ? imageUrl+movie.backdrop_path : ""})`}}
    className='Banner'>
        <div className='content'>
            <h1 className='title'>{movie ? movie.name : ''}</h1>
            <div className='Banner_buttons'>
            <button  className='button'><i class="fas fa-play"></i> Play</button>
            <button className='button'><i class="fas fa-info-circle"></i> More Info</button>
        </div>
        <h1 className='description'>{movie ? movie.overview : ''}</h1>
        </div>
        <div className="fade_bottom"></div>
    </div>
  )
}

export default Banner
