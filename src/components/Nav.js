// import { useEffect, useState, useRef } from "react";
import { Link } from "react-scroll";
import resume from "../assets/pdf/resume.pdf";



const navStyle = {
  position: 'absolute',
  padding: '20px',
  right: 0
}
const regular = {
  marginRight: '10px'
}



export default function Nav() {
    
    return (
      <nav style={navStyle}>
            {/* <a style={linkPadding} href="#about"><span>./</span>About</a> */}
            <Link
              style={regular}
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            ><span>./</span>JGC</Link>
            {/* <a style={linkPadding} href="#projects"><span>./</span>Projects</a> */}
            <Link
              style={regular}
              activeClass="active"
              to="projects"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            ><span>./</span>Projects</Link>


            {/* <a style={linkPadding} href="#contact"><span>./</span>Contact</a> */}
            <Link
              style={regular}
              activeClass="active"
              to="contact"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            ><span>./</span>Contact</Link>

         
            <a style={regular} href={resume} target="_blank" rel="noopener noreferrer"><span>./</span>Resume</a>

            
      </nav>
    );
  }
  