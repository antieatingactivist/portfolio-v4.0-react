// import logo from './logo.svg';
// import { Link, animateScroll as scroll } from "react-scroll";
import { useEffect, useState } from "react";
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Left from './components/Left';
import Intro from './components/Intro';
import Project from './components/Project';
import About from './components/About';
import projectData from './assets/js/project-data';


function App() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [furthestDown, setFurthestDown] = useState(0);
  const [headerHidden, setHeaderHidden] = useState(false);
  const handleScroll = () => {

    
    setScrollPosition(window.pageYOffset);


  };

 
  if(scrollPosition > furthestDown) {
    setFurthestDown(scrollPosition);
    setHeaderHidden(true);
  } 
  if(scrollPosition < furthestDown-100) {
      setFurthestDown(scrollPosition);
      setHeaderHidden(false);
  } 

  
  // console.log([scrollPosition, furthestDown]);
  
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  return (
    <div className="App">
      
        <Header hidden={headerHidden} scrollPosition={scrollPosition}/>
        <Left scrollPosition={scrollPosition} />
        <main>
  
          <Intro />
          <h1 id="about"><span></span>About Me</h1>
          <About />
          

          <h1 id="projects"><span></span>Projects</h1>
          
          {projectData.map(project => (
            <Project project={project} key={project.name} />
          ))}
                      

        </main>
        <Footer />
        

      
    </div>
  );
}

export default App;
