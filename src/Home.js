import React from 'react'
import Header from './Header'
import HeaderBottom from './HeaderBottom'
import './Home.css'

function Home() {
    return (
        <div className="home"  style={{ backgroundImage:`url(/images/kenny.jpg)`}}>
            <Header/>
            <div className="cont">
                <h3>LUXURY</h3>
                <h1>CABINS</h1>
                <button>SEE ALL OUR CABINS</button>
            </div>

            
        </div>
    )
}

export default Home
