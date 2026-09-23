import React from 'react';
import './Education.css';

function Education() {
  return (
    <div className="page-content">
      <h2>Education</h2>

      <div className="education-columns">
        <div className="education-col">
          <h3 className="education-col-title">Studies</h3>

          <div className='degree-edu'>
            <p className='title-edu'>Law</p>
            <p className='uni-name-edu'>Jagiellonian University in Kraków</p>
            <p className='date-edu'>10.2026 - Present</p>
          </div>

          <div className='degree-edu'>
            <p className='title-edu'>Bachelor of Computer Science</p>
            <p className='spec-edu'>Spec: Software Engineering</p>
            <p className='uni-name-edu'>University of Silesia in Katowice</p>
            <p className='date-edu'>10.2022 - 02.2026</p>
          </div>

          <div className='degree-edu'>
            <p className='title-edu'>IT Technician (Technik Informatyk)</p>
            <p className='uni-name-edu'>Technical Secondary School (Techniczne Zakłady Naukowe) in Częstochowa</p>
            <p className='date-edu'>09.2018 - 04.2022</p>
          </div>
        </div>

        <div className="education-col">
          <h3 className="education-col-title">Postgraduate</h3>

          <div className='degree-edu'>
            <p className='title-edu'>Project Management</p>
            <p className='uni-name-edu'>University of Economics in Katowice</p>
            <p className='date-edu'>10.2026 - Present</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Education;
