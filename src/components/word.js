import React from 'react';
import PropTypes from 'prop-types';

const Word = ({ word }) => (
  <div>
    {word.map((letter, index) => (
      <button key={index}>{letter}</button>))}
  </div>
  );

Word.propTypes = {
  word: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Word;
