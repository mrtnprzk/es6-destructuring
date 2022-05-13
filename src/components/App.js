import React from 'react'
import cars from './../practice'

const App = () => {

    const [honda, tesla] = cars;

    const {speedStats: {topSpeed: hondaTopSpeed}, coloursByPopularity: [hondaTopColour]} = honda;
    const {speedStats: {topSpeed: teslaTopSpeed}, coloursByPopularity: [teslaTopColour]} = tesla;


  return (
    <table>
        <tr>
            <th>Brand</th>
            <th>Top Speed</th>
            <th>Top Colour</th>
        </tr>
        <tr>
            <td>{honda.model}</td>
            <td>{hondaTopSpeed}</td>
            <td>{hondaTopColour}</td>
        </tr>
        <tr>
            <td>{tesla.model}</td>
            <td>{teslaTopSpeed}</td>
            <td>{teslaTopColour}</td>
        </tr>
    </table>
  )
}

export default App