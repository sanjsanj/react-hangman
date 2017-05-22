import React from 'react';
import PropTypes from 'prop-types';

const Word = ({ word, newGame }) => (
  <div>
    {word.join('')}
    <button onClick={newGame}>RESET</button>
  </div>
  );

Word.propTypes = {
  word: PropTypes.arrayOf(PropTypes.string).isRequired,
  newGame: PropTypes.func.isRequired,
};

export default Word;
