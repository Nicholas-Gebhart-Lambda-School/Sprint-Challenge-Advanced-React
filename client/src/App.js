import React from 'react';
import PlayerContainer from './container/PlayerContainer';
import NavBar from './components/NavBar';
import './styles/styles.css';

class App extends React.Component {
  render() {
    return (
      <>
        <NavBar />
        <PlayerContainer />
      </>
    );
  }
}

export default App;
