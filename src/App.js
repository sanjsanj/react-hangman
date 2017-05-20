import React, { Component } from 'react';
import { connect } from 'react-redux';
import logo from './logo.svg';
import './App.css';
import Word from './components/word';

const App = ({word}) => {
    return (
      <div className="App">
        asdasdas
        <Word word={word} />
      </div>
    );
}

const mapStateToProps = (state) => {
  return {
    word: state.word,
  };
};

const mapDispatchToProps = (dispatch) => {
 return {
  //  increment: () => { dispatch(counterActions.increment()); },
 };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
