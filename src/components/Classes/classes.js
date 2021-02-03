import React from 'react';
import './classes.css';

function Classes({class1,class2,class3}){
  return(
        <div  className="classes">
            <ul>
                <li className="class1">
                  <div className='classes-name'>{class1}</div>
                  <div className='classes-subname'>Ter - 08:00 às 10:00</div>
                </li>
                <li className="class2">
                  <div className='classes-name'>{class2}</div>
                  <div className='classes-subname'>Seg, Qua e Sex - 13:00 às 15:00</div>
                </li>
                <li className="class3">
                  <div className='classes-name'>{class3}</div>
                  <div className='classes-subname'>Ter, Qui - 13:00 às 15:00</div>
                </li>
            </ul>
        </div>
  )
}

export default Classes