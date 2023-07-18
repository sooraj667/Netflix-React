import React,{useEffect,useState} from 'react'
import "./Banner.css"
import { APIKEY,IMAGEURL } from '../../constants/constants'
import customaxios from "../../customaxios"


function Banner() {
  const[trendingmovie,setTrendingMovie]=useState({})





  useEffect(
    ()=>{
      customaxios.get(`movie/top_rated?api_key=${APIKEY}`).then((response)=> setTrendingMovie(response.data.results[10])).catch((err)=>alert(err))
      

    },[]
  )




  return (
    <div style={{backgroundImage:`url(${trendingmovie ? IMAGEURL + trendingmovie.backdrop_path : ""})`}} className="banner">
        <div  className="bannerContent">
            <h3 className="title">{trendingmovie ? trendingmovie.original_title: ""}</h3>
            <button className="button">Play</button>
            <button className="button">My List</button>
            <p className="description">
            {trendingmovie ? trendingmovie.overview : ""}
            {trendingmovie ? console.log(trendingmovie): "" }

            </p>


        </div>
        <div className="fade">
          


        </div>





    </div>
  )
}

export default Banner