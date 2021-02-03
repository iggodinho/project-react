import React from 'react';
import Top_user from "../../imgs/user-big.png";
import Under_user from "../../imgs/user-small.png";
import Logo from "../../imgs/ufrj-minerva.png"
import "./header.css";

function Header({username, position}){
    return(
        <header className='header-bg'>
          <div className="header">
              <div className='header-logo'>
                <a href='#'><img src={Logo} id='header-logo-img'/></a>
                <h1>Portal UFRJ</h1>
              </div>
              <div className="header-user">
                  <div className="header-username">
                      <div id='header-username'>{username}</div>
                      <div className='header-name-pos'>
                        <img src={Under_user} id="header-user-icon"/>{position}
                      </div>
                  </div>
                  <img src={Top_user} id="header-user-image"/>
              </div>
          </div>
        </header>
    )
}

export default Header