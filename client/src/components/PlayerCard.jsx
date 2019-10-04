import React from 'react';

const PlayerCard = props => (
  <>
    <h2>name: {props.name}</h2>
    <p>from: {props.country}</p>
    <p>searches: {props.searches}</p>
  </>
);

export default PlayerCard;
