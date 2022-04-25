import "./nav.scss"

import {Link} from "react-router-dom"
import React from 'react'

function Nav() {
    const navStyle={color:"white"}
    return (
        <div className="navbar">
           <div className="container flex">
                <h1 className="logo">
                    Loruki.
                </h1>
                <nav>
                    <ul>
                        <li><Link to="/">Home</Link> </li>
                        <li><Link to="/features">Features</Link> </li>
                        <li><Link to="/documentation">Docs</Link> </li>
                    </ul>
                </nav>
           </div>
        </div>
    )
}

export default Nav
