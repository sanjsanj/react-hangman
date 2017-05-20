import React from 'react';
import PropTypes from 'prop-types';

const Word = ({ word, fetchRequest }) => (
  <div>
    {word}
    <button onClick={fetchRequest}>RESET</button>
  </div>
  );

Word.propTypes = {
  word: PropTypes.string.isRequired,
  fetchRequest: PropTypes.func.isRequired,
};

export default Word;
