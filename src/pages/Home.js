import React from 'react';



function Home() {
  return (
    <div className="page-content home-page">
        <h2>About me</h2>

        <p>
            I am an <span className='special'>Associate Analyst I</span> at AML RightSource and a <span className='special'>Master's student in Law</span> at Jagiellonian University in Kraków.
            My interests connect <span className='special'>law</span>, <span className='special'>Anti-Money Laundering (AML)</span>, and <span className='special'>modern technologies</span> with a strong foundation in <span className='special'>Machine Learning</span> and <span className='special'>Data Science</span>.
            I have published research in <span className='special'>feature selection</span> and attribute weighting applied to stylometry, and I use <span className='special'>Python</span> to develop reliable, data-driven solutions.
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
