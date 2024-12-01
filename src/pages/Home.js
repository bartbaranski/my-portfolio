import React from 'react';



function Home() {
  return (
    <div className="page-content">
        <h2>About me</h2>

        <p>
            I am a <a className='special'>Computer Science</a> student specializing in <a className='special'>Software Engineering</a>, 
            with a strong passion for <a className='special'>Data Science</a>, <a className='special'>Python</a> programming, and <a className='special'>Web Development</a>. My focus is on building efficient, 
            scalable solutions while continuously learning and exploring the latest technologies in the field.
        </p>

        <div className='keen-on-home'>
          <h2>Keen on</h2>

          <p>
            <ul>
              <li>Python</li>
              <li>PyTorch</li>
              <li>SQL</li>
              <li>PL/SQL</li>
              <li>R</li>
              <li>JavaScript</li>
              <li>React</li>
            </ul>
          </p>



    
        </div>

        <div className='course-home'>
          <h2>Currently enroled course</h2>


          
          <p className='title-home'>Machine Learning Specialization</p>
          <p className='institute-home'>STANFORD UNIVERSITY, DEEPLEARNING.AI</p>
          
        </div>


        


    </div>
      
  );
}

export default Home;
