import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './App.css';
import Word from './components/word';
import Keyboard from './components/keyboard';
import Button from './components/button';
import { actions as gameActions } from './actions/game';

const App = ({ game, newGame, tryLetter }) => (
  <div className="App">
    Hangman
    <Word word={game.answer} newGame={newGame} />
    <Button text="RESET" action={newGame} />
    <Keyboard action={tryLetter} letters={game.letters} status={game.status} />
  </div>
);

App.propTypes = {
  game: PropTypes.object.isRequired,
  newGame: PropTypes.func.isRequired,
  tryLetter: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  game: state.game,
});

const mapDispatchToProps = dispatch => ({
  newGame: () => {
    dispatch(gameActions.newGame());
  },
  tryLetter: (letter) => {
    dispatch(gameActions.tryLetter(letter));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
