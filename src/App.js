import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './App.css';
import Word from './components/word';
import Keyboard from './components/keyboard';
import Button from './components/button';
import { actions as gameActions } from './actions/game';

export class App extends Component {
  render() {
    const { game, newGame, tryLetter } = this.props;
    return (
      <div className="App">
        Hangman
        <Word word={game.answer} newGame={newGame} />
        <Button text="RESET" action={newGame} />
        <Keyboard action={tryLetter} letters={game.letters} status={game.status} />
      </div>
    );
  }
}

App.propTypes = {
  game: PropTypes.shape({
    status: PropTypes.string.isRequired,
    word: PropTypes.string.isRequired,
    answer: PropTypes.array.isRequired,
    letters: PropTypes.array.isRequired,
    tries: PropTypes.number.isRequired,
  }).isRequired,
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
