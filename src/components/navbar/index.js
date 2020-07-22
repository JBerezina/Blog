import React, {useState} from 'react';
import "./style.css";
import {NavLink} from "react-router-dom";

/**
* @author
* @function Navbar
**/

const Navbar = (props) => {



    const[search, setSearch]=useState(false);

    const submitSearch=(e)=>{
        e.preventDefault();
        alert("Searched");
    }

    const openSearch =()=>{
    
        setSearch(true);
    }

    const searchClass = search ? "searchInput active":"searchInput";


  return(
    <div className="navbar">
        <ul className="navbarMenu">
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/about-us">About us</NavLink></li>
            <li><NavLink to="/posts">Posts</NavLink></li>
            <li><NavLink to="/contact-ua">Contact us</NavLink></li>
        </ul>
        <div className="search">
            <form onSubmit={submitSearch}>
            <input className={searchClass} type="text" placeholder="search ..." />
            <img onClick={openSearch} className="searchIcon" src={require("../../assets/search.png")} alt="Search"></img>
      
                </form>  </div>
    </div>
   )

 }

export default Navbar