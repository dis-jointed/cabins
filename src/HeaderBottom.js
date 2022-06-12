import React from 'react'
import "./HeaderBottom.css"

function HeaderBottom() {
    return (
        <div className="header__bottom">
            <div className="header__date">
                <p>ARRIVAL DATE</p>
                <input type="date" placeholder=''/>
            </div>
            <div className="header__date">
                <p>DEPARTURE DATE</p>
                <input type="date" placeholder=''/>
            </div>
           <div className="header__date">
            <p>GUESTS</p>
            <input type="number" placeholder='1'/>
                
           </div>

           <button>
               FIND AVAILABLE CABINS
           </button>
            
        </div>
    )
}

export default HeaderBottom
