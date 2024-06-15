import React, { useState, useEffect, useRef } from 'react'
import "./TitleCards.css"
import cards_data from '../../assets/cards/Cards_data'
import { Link } from 'react-router-dom'

const TitleCards = ({title,category}) => {

  const [apiData, setApiData] = useState([]);

  const  cardsRef = useRef();
  const handleWeel=(event)=>{
    event.preventDefault();
    cardsRef.current.scrollLeft += event.deltaY;
  }
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmZWYwZGI0MmIzY2Q0NmY4MTk0ZDdjZjE0ZTFhMDJlNCIsInN1YiI6IjY2NGRiZDg5NDMxNjhhODYyOTM0OWM2MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.6jYt55C9Xj4tgwRDxBapvsud2at-EXxSMzIDgi7sknw'
    }
  };
  
  useEffect(()=>{
    fetch(`https://api.themoviedb.org/3/movie/${category? category:"now_playing"}?language=en-US&page=1`, options)
    .then(response => response.json())
    .then(response => setApiData(response.results))
    .catch(err => console.error(err));

    cardsRef.current.addEventListener('wheel',handleWeel)
  },[])

  return ( 
    <div className='title-cards'>
      <h2>{title? title: "Popular on Netflix"}</h2>
      <div className="card-list" ref={cardsRef}>
        {
          apiData.map((card, i)=>{
            return (
            <Link to={`/player/${card.id}`} key={i} className="card">
              <img src={`https://image.tmdb.org/t/p/w500${card.backdrop_path}`} alt="" />
              <p>{card.original_title}</p>
            </Link>
            )
          })
        }
      </div>
    </div>
  )
}

export default TitleCards