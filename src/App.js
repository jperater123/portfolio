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
          <li><a href='#works'>Works</a></li>
       
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
        
        <section className='works_sec' id='works'>
        <div className='works-ttl fade float3'>
          <h1>Works</h1>
          <span>I had the pleasure of working with these personal awesome projects &gt;&gt;</span>
        </div>

        <div className='works-show'>
          <Slider {...settings}>
          <div className='work'>
          <h2>TikTok Clone</h2>
          <img src='img/tiktok_project.png' alt='works'/>
       
          <div className='showcase'>
            <span><a href='https://github.com/jperater123/tiktokclone' target="_blank">GITHUB</a></span>
            <span><a href='https://jperater123.github.io/tiktokclone/' target="_blank">LIVE</a></span>
          </div>

        </div>
        <div className='work'>
        <h2>Movie Lists IMDB API</h2>
          <img src='img/imdb.png' alt='works'/>

          <div className='showcase'>
          <span><a href='https://github.com/jperater123/react-movie' target="_blank">GITHUB</a></span>
            <span><a href='https://jperater123.github.io/react-movie/' target="_blank">LIVE</a></span>
          </div>

        </div>
        <div className='work'>
        <h2>WEATHER APP</h2>
          <img src='img/weather.png.avif' alt='works'/>

          <div className='showcase'>
          <span><a href='https://github.com/jperater123/weather_app' target="_blank">GITHUB</a></span>
            <span><a href='https://weather-app-9rwk.vercel.app/' target="_blank">LIVE</a></span>
          </div>

        </div>
        </Slider>

        </div>


        </section>

        {/* last sec */}
        <section className='socials'>
          <div className='social_container'>
            <div className='socials-ttl fade float3'>
            <h1>Contact</h1>
            <span>I’m currently available for freelance/part-time/full-time work</span>
            
            </div>

            <div className='message_me'>
              <a href='#hero'>Send me a message</a>
            </div>

            <div className='footer'>
              <div className='small-icons'>
              <a href='https://www.facebook.com/jasperjay.perater/' target="_blank"><i className="fa-brands fa-facebook"></i></a>
              <a href='https://www.linkedin.com/in/jasper-jay-perater-769648262/' target="_blank"><i className="fa-brands fa-linkedin"></i></a>
              <a href='https://github.com/jperater123' target="_blank"><i className="fa-brands fa-github"></i></a>
              </div>

              <div className='copyright'>
                <p>© 2024 JPERATER. All rights reserved.</p>
                <p>Privacy Policy</p>
                <p>Terms and Conditions</p>
              </div>
            
            </div>


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
            <li><a href='#works'>Works</a></li>
         
          </ul>
          </div>
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default App;
