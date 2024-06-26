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
      <NavigationBar />
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

function NavigationBar() {
  return (
    <div className="NavigationBar">
      <a href="#search"><i className="fas fa-user"></i></a>
      <a href="#resume"><i className="fas fa-file-alt"></i></a>
      <a href="#home"><i className="fas fa-home"></i></a>      
      <a href="#awards"><i className="fas fa-award"></i></a>
      <a href="#profile"><i className="fas fa-user"></i></a>
    </div>
  )
}


export default Recruit;
