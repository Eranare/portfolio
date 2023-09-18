import './NavBar.css';
import * as React from 'react';
import Button from '@mui/material/Button';
import message from "../../assets/chat_bubble.png"

function NavBar() {
    return (
      <nav className="navbar">
        <img src="https://picsum.photos/id/237/200/300" className = "logo" alt= "logo"></img>
        <div className="desktopMenu">
          <a href="#header" className="desktopMenuListItem">Home</a>
          {/*}<a href="#featured" className="desktopMenuListItem">Featured Demo</a>{*/}
          <a href="#reel" className="desktopMenuListItem">Demo Reel</a>
        </div>
        <a href="#contact">
          <Button variant="contained" className= "desktopMenuBtn">
            <img  src={message} alt="chat_bubble"></img>
            Contact
          </Button>
        </a>
      </nav>
    );
  }
export default NavBar;
