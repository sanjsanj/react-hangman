import React from 'react';
import PropTypes from 'prop-types';
import Button from './button';

const Keyboard = ({ action, letters, status }) => {
  const keyboard = letters.map(letter => (
    <Button key={letter} text={letter} action={() => action(letter)} />
  ));
  if (status === 3) {
    return (
      <div>
        {keyboard}
      </div>
    );
  }
  return (
    <div>
        Play again
    </div>
  );
};

Keyboard.propTypes = {
  action: PropTypes.func.isRequired,
  letters: PropTypes.array.isRequired,
  status: PropTypes.number.isRequired,
};

export default Keyboard;
