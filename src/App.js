import { useEffect, useState } from 'react';
import './App.css';
import AboutMeSec from './components/AboutMeSec';
import HeroSec from './components/HeroSec';
import SkillsSec from './components/SkillsSec';
import useIntersectionObserver from './hooks/useIntersectionObserver';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';


function App() {

  const SampleCarousel = () => {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true
    };}

    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };

  const isVisible = useIntersectionObserver({
    target: '.aboutMe-container', 
    root: null, // Use the viewport as the root
    rootMargin: '0px',
    threshold: 0.2 // Adjust the threshold as needed
  });

  const isVisibleHero = useIntersectionObserver({
    target: '.hero', 
    root: null, // Use the viewport as the root
    rootMargin: '0px',
    threshold: 0.2 // Adjust the threshold as needed
  });

  const isVisibleSkill = useIntersectionObserver({
    target: '.skills_sec', 
    root: null, // Use the viewport as the root
    rootMargin: '0px',
    threshold: 0.1 // Adjust the threshold as needed
  });
  const [isActive, setisActive] = useState(false);

  const handleNavClick = (e) => {
    e.stopPropagation();
    console.log('sadasd');
    setisActive(!isActive);
    
  };

  



  return (
    <div className="firstPage">
       
      <header>
        
      
        <nav>
          <div className='logo'>
            <span>&lt;J/&gt;</span> JP --
          </div>

         <ul>
          <li><a href='#hero'>Home</a></li>
          <li><a href='#aboutme'>About</a></li>
          <li><a href='#skills'>Skills</a></li>
          <li>Experience</li>
          <li>--</li>
         </ul>
        </nav>

       

      </header>
     
      <div>
     
        <section className='hero'id='hero'>
          
          {isVisibleHero ? <HeroSec/> : '' }
        </section>

        <section className='aboutMe-container' id='aboutme'>
        <div className='aboutMe'>
          {isVisible ? <AboutMeSec/> : '' }
        </div>
        </section>
        
        <section className='skills_sec' id='skills'>
        {isVisibleSkill ? <SkillsSec/> : '' }
        </section>
        
        <section className='works_sec'>
        <div className='works-ttl fade float3'>
          <h1>Works</h1>
          <span>I had the pleasure of working with these awesome projects</span>
        </div>

        <div className='works-show'>
          <Slider {...settings}>
          <div className='work'>
          <img src='img/tiktok_project.png' alt='works'/>
       
          <div className='showcase'>
            <span><a href='https://github.com/jperater123/tiktokclone' target="_blank">GITHUB</a></span>
            <span><a href='https://jperater123.github.io/tiktokclone/' target="_blank">LIVE</a></span>
          </div>

        </div>
        <div className='work'>
          <img src='https://placehold.co/60x120' alt='works'/>

          <div className='showcase'>
            <span>GITHUB</span>
            <span>LIVE</span>
          </div>

        </div>
        <div className='work'>
          <img src='https://placehold.co/60x120' alt='works'/>

          <div className='showcase'>
            <span>GITHUB</span>
            <span>LIVE</span>
          </div>

        </div>
        </Slider>

        </div>


        </section>

        {/* responsive nav */}
        <div className='responsive-nav fade-in'>
          <div className='r-nav' onClick={handleNavClick}>
          <i className="fa-solid fa-bars">
            </i>
          <div className={`r-nav-content ${isActive ? '' : 'hide'}`}>
            <ul>
            <li><a href='#hero'>Home</a></li>
            <li><a href='#aboutme'>About</a></li>
            <li><a href='#skills'>Skills</a></li>
            <li>Experience</li>
            <li>--</li>
          </ul>
          </div>
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default App;
