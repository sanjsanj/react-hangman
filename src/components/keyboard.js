import React from 'react';
import Button from './button';

const alphabet = 'abcdefghijklmnopqrstuvwxyz';
const alpha = alphabet.split('');
const keyboard = alpha.map(letter => (
  <Button key={letter} text={letter} />
));

const Keyboard = () => (
  <div>
    {keyboard}
  </div>
);

export default Keyboard;
