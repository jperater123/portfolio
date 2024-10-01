import './App.css';
import AboutMeSec from './components/AboutMeSec';
import HeroSec from './components/HeroSec';

function App() {
  return (
    <div className="firstPage">
      <header>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css"/>
        <nav>
          <div className='logo'>
            <span>&lt;J/&gt;</span> JP --
          </div>

         <ul>
          <li>Home</li>
          <li>About Me</li>
          <li>Skills</li>
          <li>Experience</li>
          <li>--</li>
         </ul>
        </nav>
      </header>
      <body>
        <section className='hero'>
          <HeroSec/>
        </section>

        <section className='aboutMe-container'>
          <AboutMeSec/>
        </section>

        <section className='skills_sec'>
        <i class="fa-solid fa-angles-down dropdown"></i>
        <div className='skills-ttl'>
          <h1>Skills</h1>
          <span>I am striving to never stop learning and improving</span>
        </div>

        <div className='skills-side'>
          <div className='left-skill'>
          <i class="fa-solid fa-desktop"></i> <br/><br/>
          <span>WEB DEVELOPMENT</span><br/>
          HTML·CSS·JS·REACT
          </div>
          <div className='right-skill'>
          <i class="fa-solid fa-desktop"></i> <br/> <br/>
          <span>WEB DEVELOPMENT</span><br/>
          HTML·CSS·JS·REACT
          </div>
        </div>
        </section>

      </body>
      
    </div>
  );
}

export default App;
