import React from 'react';
import PropTypes from 'prop-types';
import Button from './button';

const Keyboard = ({ action, letters, status, word }) => {
  const keyboard = letters.map(letter => (
    <Button key={letter} text={letter} action={() => action(letter)} />
  ));

  switch (status) {
    case 'WON':
      return (
        <div>
          <p>You won, play again</p>
        </div>
      );
    case 'LOST':
      return (
        <div>
          <p>The answer was "{word}".</p>
          <p>Play again.</p>
        </div>
      );
    case 'LOADING':
      return (
        <div>
          <p>Please wait...</p>
        </div>
      );
    case 'PLAYING':
      return (
        <div>
          {keyboard}
        </div>
      );
    default:
      return (
        <div>
          <p>Oops, something went wrong.  Did not expect that game status.</p>
        </div>
      );
  }
};

Keyboard.propTypes = {
  action: PropTypes.func.isRequired,
  letters: PropTypes.arrayOf(PropTypes.string).isRequired,
  status: PropTypes.string.isRequired,
  word: PropTypes.string.isRequired,
};

export default Keyboard;
