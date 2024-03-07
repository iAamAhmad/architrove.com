import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSmileBeam, faAward, faClockRotateLeft, faUserPlus, faThumbsUp } from '@fortawesome/free-solid-svg-icons';


const CounterSection = () => {
  const [counts, setCounts] = useState({
    happyClients: 0,
    projectsCompleted: 0,
    hoursOfSupport: 0,
    teamMembers: 0,
    positiveFeedback: 0
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setCounts(prevCounts => {
        // Create a new object to avoid mutating state directly
        let newCounts = { ...prevCounts };
    
        // Update counts based on random values
        if (newCounts.happyClients < 200)
          newCounts.happyClients += Math.floor(Math.random() * 10);
        if (newCounts.projectsCompleted < 200)
          newCounts.projectsCompleted += Math.floor(Math.random() * 10);
        if (newCounts.teamMembers < 200)
          newCounts.teamMembers += Math.floor(Math.random() * 5);
        if (newCounts.positiveFeedback < 200)
          newCounts.positiveFeedback += Math.random() > 0.5 ? 1 : 0;
    
        // Set hoursOfSupport to 24/7
        newCounts.hoursOfSupport = '24/7';
    
        return newCounts;
      });
    }, 5);
  
    // Clear interval on component unmount
    return () => clearInterval(interval);
  }, []);
  

  return (
    <div className="counter-section py-3">
      <div className="container">
        <div className="row">
          <CounterItem icon={faSmileBeam} title="Delighted Customers" count={counts.happyClients} />
          <CounterItem icon={faAward} title="Successful Projects" count={counts.projectsCompleted} />
          <CounterItem icon={faClockRotateLeft} title="Support Availability" count={counts.hoursOfSupport} />
          <CounterItem icon={faUserPlus} title="Our Growing Team" count={counts.teamMembers} />
          <CounterItem icon={faThumbsUp} title="Positive Vibes" count={counts.positiveFeedback} />
        </div>
      </div>
    </div>
  );
  
};

const CounterItem = ({ icon, title, count }) => (
  <div className="counter-section-inner text-center mb-4">
    <div className="counts-icons">
      <FontAwesomeIcon icon={icon} />
    </div>
    <h6 className='counter-title'>{title}</h6>
    <span className="counter-section-span" data-toggle="counter-up">{count}</span>
    <span className="counter-section-span">{title === 'Support Availability' ? '' : '+'}</span>
    {title === 'Hours Of Support' && <span className="counter-section-span" data-toggle="counter-up">7</span>}
  </div>
);

export default CounterSection;
