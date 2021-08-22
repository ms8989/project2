import React from 'react'
import './styles.css'
import Logo from '../Logo'

const Footer = () => {
    return(
        <footer id="menu">
          <p>We Are a team of Professional cooks who are excited about their food , amazing skills 
          and  experience and expertimes and in cooking.{''} </p> 
          <Logo/>
          <h5 className="text-danger">!Take tasty Keep Healty!</h5>
        </footer>
    )
}

export default Footer
