import React from 'react';



function Home() {
  return (
    <div className="page-content">
        <h2>About me</h2>

        <p>
            I am an <span className='special'>AI Research Associate</span> and a <span className='special'>Master's student in Computer Science</span> at the University of Silesia in Katowice.
            My work focuses on <span className='special'>Machine Learning</span> and <span className='special'>Data Science</span>, with published research in <span className='special'>feature selection</span> and attribute weighting applied to stylometry.
            I work day to day with <span className='special'>Python</span>, optimizing AI model outputs and building reliable, data-driven solutions while continuously exploring new techniques in the field.
        </p>

        <div className='keen-on-home'>
          <h2>Keen on</h2>

          <ul>
            <li>Python</li>
            <li>PyTorch</li>
            <li>SQL</li>
            <li>PL/SQL</li>
            <li>R</li>
            <li>JavaScript</li>
            <li>React</li>
          </ul>



    
        </div>

        <div className='course-home'>
          <h2>Currently enrolled course</h2>


          
          <p className='title-home'>Machine Learning Specialization</p>
          <p className='institute-home'>STANFORD UNIVERSITY, DEEPLEARNING.AI</p>
          
        </div>


        


    </div>
      
  );
}

export default Home;
