import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog } from '@fortawesome/free-solid-svg-icons';

const ServiceCard = ({ title, description }) => {
  return (
    <Card>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Button variant="primary">
          <FontAwesomeIcon icon={faCog} /> Learn More
        </Button>
      </Card.Body>
    </Card>
  );
};

export default ServiceCard;
