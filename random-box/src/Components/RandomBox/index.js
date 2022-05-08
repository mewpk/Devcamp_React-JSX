import React from 'react'
import "./Style.css"
export default function RandomBox() {
    function getRandomIntInclusive(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
      }
    let Colors = ['red', 'blue', 'green', 'purple', 'pink'];
    let random = Math.floor(Math.random() * Colors.length);

    let random_font = getRandomIntInclusive(20, 40)
    Colors = Colors[random]



  return (
      <center>
    <div id="Box"className='RandomBox' style={{backgroundColor:Colors,fontSize:random_font}}>RandomBox</div>
    </center>
  )
}
