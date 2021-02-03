import React from 'react'
import './schedule.css'

function Schedule({class1,class2,class3}){
    return(
        <div className='schedule'>
          <div id='schedule-time'>
              <p>08:00</p>
              <p>10:00</p>
              <p>12:00</p>
              <p>13:00</p>
              <p>15:00</p>
              <p>17:00</p>
          </div>
          <table>
              <tr>
                <th>SEG</th>
                <th>TER</th>
                <th>QUA</th>
                <th>QUI</th>
                <th>SEX</th>
            </tr>
            <tr>
                <td><p></p></td>
                <td className="schedule-class1"><p>{class1}</p></td>
                <td><p></p></td>
                <td><p></p></td>
                <td><p></p></td>
            </tr>
            <tr>
                <td><p></p></td>
                <td><p></p></td>
                <td><p></p></td>
                <td><p></p></td>
                <td><p></p></td>
            </tr>
            <tr>
                <td><p></p></td>
                <td><p></p></td>
                <td><p></p></td>
                <td><p></p></td>
                <td><p></p></td>
            </tr>
            <tr>
                <td className="schedule-class2"><p>{class2}</p></td>
                <td className="schedule-class3"><p>{class3}</p></td>
                <td className="schedule-class2"><p>{class2}</p></td>
                <td className="schedule-class3"><p>{class3}</p></td>
                <td className="schedule-class2"><p>{class2}</p></td>
            </tr>
            <tr>
                <td><p></p></td>
                <td><p></p></td>
                <td><p></p></td>
                <td><p></p></td>
                <td><p></p></td>
            </tr>
            </table>
        </div>
    )
}

export default Schedule
