import React, { useEffect, useState } from 'react'
import "./Player.css"
import back_arrow_icon from "../../assets/back_arrow_icon.png"
import { useParams, useNavigate } from 'react-router-dom'

const Player = () => {

  const {id} = useParams();
  const navigate = useNavigate();

  const [apiData, setApiData] = useState({
    name:"",
    key:"",
    published_at:"",
    type: ""
  })

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmZWYwZGI0MmIzY2Q0NmY4MTk0ZDdjZjE0ZTFhMDJlNCIsInN1YiI6IjY2NGRiZDg5NDMxNjhhODYyOTM0OWM2MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.6jYt55C9Xj4tgwRDxBapvsud2at-EXxSMzIDgi7sknw'
    }
  };

  useEffect (()=>{
    fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
    .then((response) => response.json())
    .then((res) =>setApiData(res.results[0]) )
    .catch((err) => console.error(err))
  },[])
  
  return (
    <div className='player'>
      <img src={back_arrow_icon} alt="" onClick={()=>{navigate(-2)}} />
      <iframe src={`https://www.youtube.com/embed/${apiData.key}`} height='90%' width="90%" title='trailer' frameBorder="0" allowFullScreen></iframe>

      <div className='player-info'>
        <p>{apiData.published_at.slice(0,10)}</p>
        <p>{apiData.name} </p>
        <p>{apiData.type}</p>
      </div>
    </div>
  )
}

export default Player