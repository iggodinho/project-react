import React from 'react';
import "./top-container.css"
import Nav from '../Nav/nav';
import Header from '../Header/header'

function Top_container(){
    return(
        <React.Fragment>
            <div className="top-header">
                <Header username="ROSANA BORGES" position="Aluno"/>
            </div>
            <div className="top-nav">
                <Nav/>
            </div>
        </React.Fragment>
    )
}

export default Top_container