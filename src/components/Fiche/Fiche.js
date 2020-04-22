// == Import : npm
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

// == Import : local
import './fiche.scss';


const Fiche = ({ name, birth_year, gender, height, mass, skin_color }) => (
  <div>
    <Card>
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <ListGroup>
          <ListGroup.Item>Date of Birth: {birth_year}</ListGroup.Item>
          <ListGroup.Item>Gender: {gender == 'n/a' ? 'android' : gender}</ListGroup.Item>
          <ListGroup.Item>Height: {height}</ListGroup.Item>
          <ListGroup.Item>Mass: {mass}</ListGroup.Item>
          <ListGroup.Item>Skin color: {skin_color}</ListGroup.Item>
        </ListGroup>
      </Card.Body>
    </Card>
  </div>
);

Fiche.propTypes = {
  name: PropTypes.string.isRequired,
  birth_year: PropTypes.string.isRequired,
  gender: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
  mass: PropTypes.string.isRequired,
  skin_color: PropTypes.string.isRequired,
};

export default Fiche;
