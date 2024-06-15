import "./First.css"
import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import heroBanner from "../../assets/hero_banner.jpg"
import heroTitle from "../../assets/hero_title.png"
import playIcon from "../../assets/play_icon.png"
import infoIcon from "../../assets/info_icon.png"
import TitleCards from "../../components/titleCards/TitleCards"
import Footer from "../../components/footer/Footer"


const First = () => {
  return (
    <div className="home" > 
      <Navbar/>

      <div className="hero">
        <img className='banner-img' src={heroBanner} alt="" />
        <div className="hero-caption">
          <img className='caption-img' src={heroTitle} alt="" />

          <p>Discovering his ties to a secret ancient order, a yong man living in modern Istanbul embarks  on a quest to save the city from an immortal enemy.</p>
          <div className="hero-btns">
            <button className="btn"><img src={playIcon} alt="" />Play</button>
            <button className="btn dark-btn"><img src={infoIcon} alt="" />More Info</button>
          </div>
          <TitleCards title={"Now Playing"} category={"now_playing"} />
        </div>
      </div>
      <div className="more-cards">
        {/* <TitleCards /> */}
          <TitleCards title={"Popular"} category={"popular"} />
          <TitleCards title={"Top Rated"} category={"top_rated"} />
          <TitleCards title={"Up Coming"} category={"upcoming"} />
      </div>
      <Footer/>
    </div>
  )
}

export default First