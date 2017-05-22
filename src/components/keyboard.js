import React from 'react';
import Button from './button';

const alphabet = 'abcdefghijklmnopqrstuvwxyz';
const alpha = alphabet.split('');

const Keyboard = ({ action }) => {
  const keyboard = alpha.map(letter => (
    <Button key={letter} text={letter} action={() => action(letter)} />
  ));
  return (
    <div>
      {keyboard}
    </div>
  );
};

export default Keyboard;
