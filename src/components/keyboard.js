import React from 'react';
import PropTypes from 'prop-types';
import Button from './button';

// const alphabet = 'abcdefghijklmnopqrstuvwxyz';
// const alpha = alphabet.split('');

const Keyboard = ({ action, letters }) => {
  const keyboard = letters.map(letter => (
    <Button key={letter} text={letter} action={() => action(letter)} />
  ));
  return (
    <div>
      {keyboard}
    </div>
  );
};

Keyboard.propTypes = {
  action: PropTypes.func.isRequired,
  letters: PropTypes.array.isRequired,
};

export default Keyboard;
