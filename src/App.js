import './App.css';

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
          <div className='hero-content-container'>
            <div className='title'>DEVELOPER</div>

            <div className='content'>
              <div className='left'>

                <div className='details'>
                  <img src='/img/jjp.jpg' alt='img'></img>
                  <p>
                    <span>Jasper J</span><br/>
                    Full-stack developer
                  </p>

                  <ul>
                    <li><i class="fa-regular fa-envelope"></i>jasperperater@gmail.com</li>
                    <li><i class="fa-solid fa-location-dot"></i>Cebu, Philippines</li>
                    <li><i class="fa-solid fa-suitcase"></i>Full-time / Freelance</li>
                    <li><i class="fa-solid fa-link"></i>https://www.linkedin.com/in/jasper-jay-perater-769648262/</li>
                  </ul>

                  <div className='skills'>
                    <span>HTML</span>
                    <span>CSS</span>
                    <span>JS</span>
                    <span>REACT</span>
                  </div>

                  <div className='csv-btn'>
                    DOWNLOAD CV <i class="fa-regular fa-circle-down"></i>
                  </div>

                </div>
               

              </div>
              <div className='right'>
                <div className='left-con'>
                  <p>
                    <span>&lt;h1&gt;</span> <br/>
                    Hey <br/>
                    I'm <span className='name'>Jasper</span> <br/>
                    Full-Stack Developer  <span>&lt;/h1&gt;</span>
                  </p>

                  <p>
                  <span>&lt;p&gt;</span><br/><br/>
                  I help business grow by crafting amazing web experiences. If you’re
                  <br/> looking for a developer that likes to get stuff done, <br/><br/>
                  <span>&lt;p/&gt;</span>
                  </p>

                  <span>Let's Talk <i class="fa-regular fa-envelope"></i></span>
                </div>
                <div className='right-con'></div>
              </div>
            </div>
          </div>
        </section>
      </body>
      
    </div>
  );
}

export default App;
