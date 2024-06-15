import React, { useEffect, useRef } from "react";
import logo from "../../assets/logo.png";
import searchIcon from "../../assets/search_icon.svg";
import bellIcon from "../../assets/bell_icon.svg";
import profileImg from "../../assets/profile_img.png";
import caretIcon from "../../assets/caret_icon.svg";
import "./Navbar.css";
import { logout } from "../../../fireDbConfig.js";

const Navbar = () => {

  const navRef = useRef();

  useEffect(()=>{
    window.addEventListener('scroll',()=>{
      if(window.scrollY >= 190){
        navRef.current.classList.add("nav-dark");
      }else{
        navRef.current.classList.remove("nav-dark");
      }
    })
  }, [])

  return (
    <>
      <div ref={navRef} className="navbar">
        <div className="navbar-left">
          <img src={logo} alt="" />
          <ul>
            <li>Home</li>
            <li>TV Shows</li>
            <li>Movies</li>
            <li>New & Popular</li>
            <li>My List</li>
            <li>Browse by Languages</li>
          </ul>
        </div>

        <div className="navbar-right">
          <img className="icons" src={searchIcon} alt="" />
          <p>Children</p>
          <img className="icons" src={bellIcon} alt="" />
          <div className="navbar-profile">
            <img className="profile" src={profileImg} alt="" />
            <img src={caretIcon} alt="" />
            <div className="dropdown">
              <p onClick={()=>{logout()}}>Sign Out</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
