import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import NavBar from './components/NavBar';
import PlayerCard from './components/PlayerCard';
import PlayerContainer from './container/PlayerContainer';

it('renders App', () => {
  render(<App />);
});

it('renders NavBar', () => {
  render(<NavBar />);
});

it('renders PlayerCard', () => {
  render(<PlayerCard />);
});

it('renders PlayerContainer', () => {
  render(<PlayerContainer />);
});

const sel = id => `[data-testid="${id}"]`;
const rootNode = id => document.querySelector(sel(`${id}`));

const playerName = rootNode('player-name');
const playerCountry = rootNode('player-country');
const playerSearches = rootNode('player-searches');

const players = [playerName, playerCountry, playerSearches];

players.forEach(test => {
  it(`renders player without error`, () => {
    render(test);
  });
});
