import React from 'react'


const SkillsSec = () => {
  return (
    <>
      <div className='skills-ttl fade float3'>
          <h1>Skills</h1>
          <span>I am striving to never stop learning and improving</span>
        </div>

        <div className='skills-side'>
          <div className='left-skill'>
          <i className="fa-solid fa-desktop"></i> <br/><br/>
          <span>WEB DEVELOPMENT</span><br/>
          HTML·CSS·JS·REACT
          </div>
          <div className='right-skill'>
          <i className="fa-solid fa-mobile-screen"></i> <br/> <br/>
          <span>APP DEVELOPMENT</span><br/>
          ANDROID · JAVA
          </div>
        </div>

        <div className='type-skill'>
          <ul>
            <li className='float'><i className="fa-brands fa-html5"></i><br/>HTML</li>
            <li className='float1'><i className="fa-brands fa-css3-alt"></i><br/>CSS</li>
            <li className='float'><i className="fa-brands fa-js"></i><br/>JS</li>
            <li className='float1'><i className="fa-brands fa-react"></i><br/>REACT</li>
          </ul>
        </div>
        <div className='type-skill'>
          <ul>
            <li className='float1'><i className="fa-solid fa-database"></i><br/>SQL</li>
            <li className='float'><i className="fa-solid fa-tape"></i><br/>API</li>
            <li className='float1'><i className="fa-brands fa-node"></i><br/>NODE JS</li>
            <li className='float'><i className="fa-brands fa-python"></i><br/>PYTHON</li>
          </ul>
        </div>
    </>
  )
}

export default SkillsSec
