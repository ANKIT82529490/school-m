import React from 'react'
import './Divisons.css'
import divison_1 from '../../assets/divison_1.jpeg'
import divison_2 from '../../assets/divison_2.jpeg'
import divison_3 from '../../assets/divison_3.jpeg'

import divison_icon_1 from '../../assets/divison_icon_1.png'
import divison_icon_2 from '../../assets/divison_icon_2.png'
import divison_icon_3 from '../../assets/divison_icon_3.png'

const Divisons = () => {
  return (
    <div className='divisons'>

        <div className='divison'>
            <img src={divison_1} alt="" />

            <div className="caption">
                <img src={divison_icon_1} alt="" />
                <p>Nursori To Fifth Class (CBSE) </p>
            </div>
        </div>

        <div className='divison'>
            <img src={divison_2} alt="" />

            <div className="caption">
                <img src={divison_icon_2} alt="" />
                <p>Fifth To Twelth Class (State Board) </p>
            </div>
        </div>

        <div className='divison'>
            <img src={divison_3} alt="" />

            <div className="caption">
                <img src={divison_icon_3} alt="" />
                <p>Computer Classes</p>
            </div>
        </div>


    </div>
  )
}

export default Divisons