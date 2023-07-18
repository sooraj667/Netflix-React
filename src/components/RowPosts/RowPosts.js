import React, { useState, useEffect } from "react";
import moneyheistpic from "../../static/moneyy.png";
import "./RowPosts.css";
import { APIKEY,IMAGEURL } from "../../constants/constants";
import customaxios from "../../customaxios";
import Youtube from "react-youtube"

function RowPosts({url,title,isSmall}) {
  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      
      autoplay: 1,
    },
  };

  const handleClick = (id)=>{
    console.log(id)
    customaxios.get(`movie/${id}/videos?api_key=${APIKEY}&language=en-US`).then((response)=> {
      if (response.data.results.length !==0){
        setVideoKey(response.data.results[0])

      }
      
    }
    
      ).catch((err)=>alert("Not available"))

  }



  const [movies, setMovies] = useState([]);
  const [videoKey,setVideoKey]=useState("")


  useEffect(() => {
    customaxios
      .get(
        url
      )
      .then((response) => {
        setMovies(response.data.results);
      });
  });

  return (
    <div class="row">
      <h2 className="smalltitle">{title}</h2> 
      <div className="rowposts">
        {movies.map((movie) => {
          return (
            <div className="posts">
              <img onClick={()=> handleClick(movie.id) } className={isSmall ? "smallpostimg" : "postimg"} src={IMAGEURL+movie.backdrop_path} alt="FG" />
            </div>
          )
        })}
      </div>

      {/* {console.log(movies[0])} */}

      <div class="video">


        {videoKey ? <Youtube videoId={videoKey.key} opts={opts}/> :"" }
      

      </div>
    </div>
  );
}

export default RowPosts;
