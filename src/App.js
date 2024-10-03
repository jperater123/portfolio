import './App.css';
import AboutMeSec from './components/AboutMeSec';
import HeroSec from './components/HeroSec';
import SkillsSec from './components/SkillsSec';
import useIntersectionObserver from './hooks/useIntersectionObserver';

function App() {

  const isVisible = useIntersectionObserver({
    target: '.aboutMe-container', 
    root: null, // Use the viewport as the root
    rootMargin: '0px',
    threshold: 0.4 // Adjust the threshold as needed
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
    threshold: 0.2 // Adjust the threshold as needed
  });

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
          {isVisible ? <AboutMeSec/> : '' }
        </section>

        <section className='skills_sec' id='skills'>
        {isVisibleSkill ? <SkillsSec/> : '' }
        </section>
        
        <section className='works_sec'>
        <div className='works-ttl fade float3'>
          <h1>Works</h1>
          <span>I had the pleasure of working with these awesome projects</span>
        </div>
        </section>

      </div>
      
    </div>
  );
}

export default App;
