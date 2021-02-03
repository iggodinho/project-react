import React from 'react';
import './info.css'

function Info({name, period, course, level, credits}){
    return(
        <div className="info-bg">
          <div className="info">
            <h3 id='info-title'>Visualização de Inscrição em Disciplinas</h3>
            <div className="info-total">
              <div className='info-left'>
                <ul>
                  <li>{name}</li>
                  <li>Curso: {course}</li>
                </ul>
              </div>
              <div className="info-right">
                <ul>
                  <li>{period} período</li>
                  <li>Nível: {level}</li>
                </ul>
              </div>
            </div>
          </div>
          <div id="info-credits">
            Créditos: {credits}
          </div>
        </div>
    )
}

export default Info

/*<div className="info-bg">
          <div className="info">
            <div className="info-left">
              <ul>
                <li>Visualização de Inscrição em Disciplinas</li>
                <li>{name}</li>
                <li>Curso: {course}</li>
              </ul>
            </div>
            <div className="info-right">
              <ul>
                <li>{period} período</li>
                <li>Nível: {level}</li>
              </ul>
            </div>
          </div>
          <div id="info-credits">
            Créditos: {credits}
          </div>
        </div> */