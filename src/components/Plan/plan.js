import React from 'react';
import Classes from '../Classes/classes';
import Schedule from '../Schedule/schedule';

import './plan.css';

function Plan(){
  return(
      <div className='plan'>
        <Schedule class1='Intro ECA' class2='ALG PROG' class3='Química EE'/>
        <Classes class1='Introdução à Engenharia de Controle e Automação' class3='Química EE'
        class2='Algorítimos e Programação'/>
      </div>
  )
}

export default Plan