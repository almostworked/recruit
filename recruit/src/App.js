import React from "react";
import './App.css';

function Recruit() {
  return (
    <div id='BASE' className='BASE'>
      <div className='Container'>
      <h1 id='Feed' className='Feed'>
        Your feed
      </h1>
      <h2 className='Feed'>
        Recommended for Computer Science
      </h2>
      <button id='Rectangle1' className='Feed'>
        <div className="jobDetails">
          <div>Software Engineering Intern, Backend</div>
          <div>Toronto, ON</div>
          <div>Intern</div>
          <div>On-Site</div>
          <div>5 Skill Matches</div>
          <div>Over 100 Applicants</div>
        </div>
      </button>
      <div className='Header'>
      <h2>Daily Check-in &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; -----Stats-----</h2>

      </div>
     </div>
    </div>
  );
}

export default Recruit;