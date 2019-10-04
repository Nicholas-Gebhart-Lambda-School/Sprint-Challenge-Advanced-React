import React from 'react';

const PlayerCard = props => (
  <>
    <h2 data-testid="player-name">name: {props.name}</h2>
    <p data-testid="player-country">from: {props.country}</p>
    <p data-testid="player-searches">searches: {props.searches}</p>
  </>
);

export default PlayerCard;
