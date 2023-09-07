import React from 'react';
import './Header.css';
import Button from '@mui/material/Button';
import message from "../../assets/chat_bubble.png"


function Header(props){
    return(
<section id="header">
    
    <div className ="headerContent">
        <span className= "hello"> Hoi, </span>
        <span className="headerText">Stem<span className="acteur">Acteur</span>. Text hier, filler</span>
        <p className="headerPara">ik ben een stemacteur met een diverse range</p>
        <a href="#contact" alt="neem contact op." className="headerBtn-container">
        <Button variant="contained" className= "headerBtn">
          <img  src={message} alt="chat_bubble" class="headerBtnImg"></img>
          Neem Contact op
        </Button>
        </a>
    </div>
    <img src= "https://picsum.photos/id/237/200/300" alt="profile" className="profile"></img>
    
</section>
    )
}
export default Header;