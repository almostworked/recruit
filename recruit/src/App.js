import React from "react";
import './App.css';


function Recruit() { /* Home feed base */
  return (
    <div id='BASE' className='BASE'>
      <div className='Container'>
        <h1 id='Feed' className='Feed'>
          Your feed
        </h1>
        <h2 className='Feed'>
          Recommended for Computer Science
        </h2>
        <JobDetailsButton />
        <Header />
      </div>
    </div>
  );
}

function JobDetailsButton() { /* First recommended job */
  return (
    <button id='JobRectangle' className='Feed'>
      <div className="jobDetails">
        <div>Software Engineering Intern, Backend</div>
        <div>Toronto, ON</div>
        <div>Intern</div>
        <div>On-Site</div>
        <div>5 Skill Matches</div>
        <div>Over 100 Applicants</div>
      </div>
    </button>
  );
}

function JobDescription() {
  return (
    <div>
      {/* Job desc and app form here*/}
    </div>
  );
}

function Header() {
  return (
    <div className='Header'>
      <div>
        <h2 className='Feed'>
          Daily-Check-in
        </h2>
          <button id='CheckInSquare' className='Feed'>
            Complete!
          </button>
      </div>
      <div>
        <h2 className="Feed">
        -----Stats------
        </h2>
        <button id='StatsButton' className='Feed'>
          Stats
        </button>
      </div>
    </div>
  );
}


export default Recruit;
