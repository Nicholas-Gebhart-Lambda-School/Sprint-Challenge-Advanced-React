import React from 'react';

const PlayerCard = ({ name, country, searches }) => {
  return (
    <div className="card">
      <h2 data-testid="player-name">name: {name}</h2>
      <p data-testid="player-country">from: {country}</p>
      <p data-testid="player-searches">searches: {searches}</p>
    </div>
  );
};

export default PlayerCard;
