import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Feed from './Feed';
import DailyCheckIn from './DailyCheckIn';

function App() {
  const [jobs, setJobs] = useState([
    { title: 'Software Engineering Intern, Backend', preview: 'Job1' },
    
  ]);
  return (
    <div className="container">
      <h1>Your feed</h1>
      <Feed jobs ={jobs} />
      <DailyCheckIn />
    </div>
  );
}

export default App;
