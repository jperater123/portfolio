import React from 'react'

const AboutMeSec = () => {
  return (
    <div className='aboutMe'>

          <i class="fa-solid fa-angles-down dropdown float"></i>
            <div className='aleft slide-in-left'>
              <div className='about-title'>
                About Me
              </div>
              <div className='about-content'>
                
              <span>&lt;p&gt;</span> <br/><br/>
                  <h1>Hello! </h1> <br/>
                  My name is Sinan and I specialize in web developement that utilizes <span> HTML </span>, <span>CSS </span>, <span>JS </span> , and <span>REACT </span> etc. <br/><br/>
                  I am a highly motivated individual and eternal optimist dedicated to writing clear, concise, robust code that works. Striving to never stop learning and improving. <br/><br/>
                  When I'm not coding, I usually <span>watch anime </span>, <span>play sports </span> or <span> hang out with friends </span>.<br/><br/>
                  I like to have my perspective and belief systems challenged so that I see the world through new eyes. <br/><br/>
                  <span>&lt;p&gt;</span>
              </div>

            </div>
            <div className='aright slide-in-right'>
              <img src='/img/aboutMeimg.jfif' alt='img'/>
            </div>

          </div>
  )
}

export default AboutMeSec