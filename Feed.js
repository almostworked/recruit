import React from 'react';

function Feed({ jobs }) {
    return (
      <div>
        {jobs.map((job, index) => (
          <div key={index}>
            <h2>{job.title}</h2>
            <button onClick={() => openJobDetails(job)}>View Details</button>
          </div>
        ))}
      </div>
    );
  }
  
  function openJobDetails(job) {
    // This function should open the full details of the job.
    // You might navigate to a new route, open a modal, etc.
    console.log("Opening job:", job);
  }

export default Feed;