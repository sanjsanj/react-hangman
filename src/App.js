import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './App.css';
import Word from './components/word';
import { actions as wordActions } from './actions/word';

const App = ({ word, fetchRequest }) => (
  <div className="App">
        Hangman
        <Word word={word} fetchRequest={fetchRequest} />
  </div>
);

App.propTypes = {
  word: PropTypes.string.isRequired,
  fetchRequest: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  word: state.word,
});

const RANDOM_WORD_API = 'http://api.wordnik.com:80/v4/words.json/randomWord?hasDictionaryDef=true&includePartOfSpeech=noun&minCorpusCount=8000&maxCorpusCount=-1&minDictionaryCount=3&maxDictionaryCount=-1&minLength=5&maxLength=8&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5';

const mapDispatchToProps = dispatch => ({
  fetchRequest: () => {
    dispatch(wordActions.fetchRequest());
    return fetch(RANDOM_WORD_API, { method: 'GET' })
      .then(response => Promise.all([response, response.json()]))
      .then(([response, json]) => {
        if (response.status === 200) {
          dispatch(wordActions.fetchSuccess(json));
        } else {
          dispatch(wordActions.fetchError());
        }
      });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
