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

        </section>

      </body>
      
    </div>
  );
}

export default App;
