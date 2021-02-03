import React from 'react';
import "./nav.css"

function Nav(){
    return(
        <nav className="nav-bg">
            <div className='nav'>
                <ul>
                    <li><a href='#docs' id='nav-docs'>Documentos</a></li>
                    <li><a href='#enroll' id="nav-enroll">Inscrição em disciplinas</a></li>
                    <li><a href='#table' id='nav-table'>Grades</a></li>
                    <li><a href='#info' id='nav-personal-info'>Dados Pessoais</a> </li>
                    <li><a href='#research' id='nav-research'>Pesquisa Avaliativa</a></li>
                    <li><a href='#require' id='nav-require'>Requerimentos</a></li>
                    <li><a href='#help'  id='nav-help'>Ajuda</a></li>
                </ul>
            </div>
        </nav>
    )
}


export default Nav

//<React.Fragment></React.Fragment>