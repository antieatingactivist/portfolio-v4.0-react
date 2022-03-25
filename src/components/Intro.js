import { useEffect, useState } from 'react';
import Typewriter from 'typewriter-effect';



export default function Intro() {
    const [introOpacity, setIntroOpacity] = useState(0);
    // const [spanOpacity, setSpanOpacity] = useState(0);
    const [spanLeft, setSpanLeft] = useState('-1000px')
    // const [pOpacity, setPOpacity] = useState(0);
    const introStyle = {
        
        padding: '25vh 0 0vh 0',
        
    }
    const h1Style = {
        
        transition: 'opacity 1.5s',
        transitionDelay: '.1s',
        opacity: introOpacity,
        lineHeight: 1,
        display: 'inline'
        // marginBottom: '-50%'
    }
    const spanStyle = {
        transition: 'left .8s cubic-bezier(.4,.43,0,1.23)',
        transitionDelay: '1.4s',
        position: 'relative',
        top: '-40px',
        left: spanLeft,
        fontSize: '70%',
        // whiteSpace: 'nowrap',
        // opacity: spanOpacity,
      
    }
    const pStyle = {
        
        // transition: 'opacity 5s',
        // transitionDelay: '2s',
        position: 'relative',
        top: '-50px',
        left: '60px',
        // opacity: 1,
    }
    
    useEffect(() => {
        setIntroOpacity(1);
        // setSpanOpacity(1);
        setSpanLeft('50px');
        // setPOpacity(1);
    }, []);

    return (
        <section id="intro" style={introStyle}>
        
            <h1 style={h1Style}>Hi,</h1><h1 style={{...h1Style, transitionDelay: '1s'}}>I'm Garrett.</h1>
            <h1>
                <span style={spanStyle} className="accent">Developer, </span>
                <span style={{...spanStyle, transitionDelay: '1.6s',}} className="accent">and&nbsp;builder&nbsp;of&nbsp;many&nbsp;things.</span>
            
            </h1>

            <code style={pStyle}>
                <Typewriter
                    onInit={(typewriter) => {
                        typewriter
                        .pauseFor(2000) 
                        .typeString('scroll down and have a look.')
                               
                        .start();
                    }}
                    options={{
                        delay: 'natural'
                      
                    }}
                />
            </code>
        </section>
    );
  }