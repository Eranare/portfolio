import './NavBar.css';
import * as React from 'react';
import Button from '@mui/material/Button';
import {Link} from 'react-scroll';
import message from "../../assets/chat_bubble.png"

function NavBar() {
    return (
      <div className="navbar">
        <img src="https://picsum.photos/id/237/200/300" className = "logo" alt= "logo"></img>
        <div className= "desktopMenu">
          <Link className= "desktopMenuListItem"><a href="#home">Home </a></Link>
          <Link className= "desktopMenuListItem"><a href="#featured">Featured Demo </a></Link>
          <Link className= "desktopMenuListItem">Reel</Link>
          
          
          <a href="#reel">Demo Reel </a>
          
        </div>
        <Button variant="contained" className= "desktopMenuBtn">
          <img  src={message} alt="chat_bubble"></img>
          <a href="#contact">Contact</a>
        </Button>
      </div>
    );
  }
export default NavBar;
