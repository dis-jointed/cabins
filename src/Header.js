import React from 'react'
import './Header.css'

function Header() {
    return (
        <div className="header">
            <h5>canopy cabins</h5>
            <div className="menu">
               
               <a href="">
                   CABINS
               </a>
               
               <a href="">
                   ACTIVITIES
               </a>
               
               <a href="">
                   INFO
               </a>
               
               <a href="">
                   ABOUT
               </a>

               <button>BOOK A CABIN</button>
               
            </div>
        </div>
    )
}

export default Header
