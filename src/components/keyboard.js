import React from 'react';
import PropTypes from 'prop-types';
import Button from './button';

const Keyboard = ({ action, letters, status }) => {
  const keyboard = letters.map(letter => (
    <Button key={letter} text={letter} action={() => action(letter)} />
  ));

  switch (status) {
    case 'WON':
      return (
        <div>
          You won, play again
        </div>
      );
    case 'LOST':
      return (
        <div>
          You lost, play again
        </div>
      );
    case 'LOADING':
      return (
        <div>
          Please wait...
        </div>
      );
    default:
      return (
        <div>
          {keyboard}
        </div>
      );
  }
};

Keyboard.propTypes = {
  action: PropTypes.func.isRequired,
  letters: PropTypes.arrayOf(PropTypes.string).isRequired,
  status: PropTypes.string.isRequired,
};

export default Keyboard;
