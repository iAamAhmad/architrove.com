import React from 'react';
import ServiceCard from './ServiceCard';

const ServicesSection = () => {
  return (
    <div className="row">
      <div className="col-md-4">
        <ServiceCard
          title="Service 1"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante."
        />
      </div>
      <div className="col-md-4">
        <ServiceCard
          title="Service 2"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante."
        />
      </div>
      <div className="col-md-4">
        <ServiceCard
          title="Service 3"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante."
        />
      </div>
    </div>
  );
};

export default ServicesSection;
