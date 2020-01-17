import React from 'react';
import { getPlayerData } from '../services/getData';
import PlayerCard from '../components/PlayerCard';

class PlayerContainer extends React.Component {
  state = {
    player: []
  };

  componentDidMount() {
    getPlayerData().then(data => this.setState({ player: data }));
  }

  render() {
    return (
      <>
        {this.state.player.map((player, index) => {
          return (
            <PlayerCard
              key={index}
              name={player.name}
              country={player.country}
              searches={player.searches}
            />
          );
        })}
      </>
    );
  }
}

// name, country, searches, id
export default PlayerContainer;
