import React from 'react';
import './section.css';
import Subtitle from '../Subtitle/subtitle'
import Info from '../Info/info'
function Section(){
  return(
      <div className="section">
          <Subtitle/>
          <Info name="Rosana Borges"  
          period="1º" 
          course="Engenharia de Controle e Automação" 
          level="Graduação" 
          credits="11"/>
      </div>
  )
}


export default Section

