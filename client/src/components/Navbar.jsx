import React from 'react'
import Logo from "../img/logo.png"
import { Link } from 'react-router-dom'
import "../style.scss"


function Navbar() {
  return (
    <div className="navbar">
        <div className="container">
            <div className='logo'>
                <img src={Logo} alt="" />
            </div>
            <div className='links'>
                <Link className='link' to={"?/cat=art"}><h6>ARTS</h6></Link>
                <Link className='link' to={"?/cat=Science"}><h6>SCIENCE</h6></Link>
                <Link className='link' to={"?/cat=Tech"}><h6>TECHNOLOGY</h6></Link>
                <Link className='link' to={"?/cat=sports"}><h6>SPORTS</h6></Link>
                <Link className='link' to={"?/cat=food"}><h6>FOOD</h6></Link>

                <span>John</span>
                <span>Logout</span>
                <span className='write'>
                    <Link className='link' to="/write">Write</Link>
                </span>
            </div>
        </div>
    </div>
  )
}

export default Navbar