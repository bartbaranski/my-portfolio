import React from 'react';

function Experience() {
  return (
    <div className="page-content">
      <h2>Experience</h2>

      <div className='position-exp'>
        <p className='title-exp'>Junior Python Developer Internship</p>
        <p className='workplace-name-exp'>Urząd Marszałkowski Województwa Śląskiego, Katowice, Poland</p>
        <p className='date-edu'>07.2024</p>
        <ul>
          <li>I worked on backend development using Python to automate data backup processes.</li>
          <li>Leveraging the IBM LTFSAdminLib library,
              I developed scripts to streamline backup tasks
              on a Red Hat server environment.</li> 
        </ul>
      </div>


      <div className='position-exp'>
        <p className='title-exp'>Programming Internship</p>
        <p className='workplace-name-exp'>ERASMUS+ "Development of Professional Competencies", Braga, Portugal</p>
        <p className='date-edu'>08.2021 - 09.2021</p>
        <ul>
          <li>Designing websites using WordPress, HTML, PHP, and JavaScript technologies.</li>
          <li>Utilizing tools and algorithms for marketing activities, including Google Ads.</li> 
          <li>Creating an application for submitting ratings using Windows Forms technology in C#.</li>
        </ul>
      </div>


      <div className='position-exp'>
        <p className='title-exp'>IT Internship</p>
        <p className='workplace-name-exp'>Computer Center, Częstochowa, Poland</p>
        <p className='date-edu'>10.2020</p>
        <ul>
          <li>Installing software on client and employee computers.</li>
          <li>Configuring a server in Microsoft Windows Server 2019.</li> 
          <li>Performing upgrades and maintenance on personal computers.</li>
        </ul>
      </div>

    </div>
  );
}

export default Experience;
