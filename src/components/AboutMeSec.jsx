import React from 'react'

const AboutMeSec = () => {
  const years_exp = 2;

  return (
   
      <>
          <i className="fa-solid fa-angles-down dropdown float"><a href='#skills_sec'></a></i>
            <div className='aleft slide-in-left'>
              <div className='about-title'>
                About Me
              </div>
              <div className='about-content'>
                
              <span>&lt;p&gt;</span> <br/><br/>
                  <h1>Hello! </h1> <br/>
                  My name is Jasper, I graduate Bachelor of Science in Information Technology in University of Cebu Lapu-lapu and Mandaue. I specialize in web developement that utilizes <span> HTML </span>, <span>CSS </span>, <span>JS </span> , and <span>REACT </span> etc. <br/><br/>
                  I have <span>{years_exp}+</span> years experience in the industry as a Software and Web Developer.
                   <br/><br/>
                  When I'm not coding, I usually <span>watch anime </span>, <span>play sports </span> or <span> hang out with friends </span>.<br/><br/>
                  In the following pages below are my works and Technology Stack used in making those personal projects <br/><br/>
                  <span>&lt;p&gt;</span>
                  <br/>
                
              </div>

            </div>
            <div className='aright slide-in-right'>
              <img src='/img/aboutMeimg.jfif' alt='img'/>
            </div>
            </>
         
  )
}

export default AboutMeSec