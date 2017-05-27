import React from 'react';
import { shallow, render } from 'enzyme';

import Keyboard from './keyboard';
import Constants from '../constants/status';

describe('Keyboard', () => {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  const fn = jest.fn();
  const letters = alphabet.split('');

  it('renders the keyboard when the status is PLAYING', () => {
    const status = Constants.PLAYING;
    const component = render(<Keyboard action={fn} letters={letters} status={status} word="ballers" />);
    expect(component.text()).toEqual(alphabet);
  });

  it('renders the right text when the status is WON', () => {
    const status = Constants.WON;
    const component = shallow(<Keyboard action={fn} letters={letters} status={status} word="ballers" />);
    expect(component.text()).toEqual('You won, play again');
  });

  it('renders the right text when the status is LOST', () => {
    const status = Constants.LOST;
    const component = shallow(<Keyboard action={fn} letters={letters} status={status} word="ballers" />);
    expect(component.text()).toEqual('The answer was \"ballers\".Play again.');
  });

  it('renders the right text when the status is LOADING', () => {
    const status = Constants.LOADING;
    const component = shallow(<Keyboard action={fn} letters={letters} status={status} word="ballers" />);
    expect(component.text()).toEqual('Please wait...');
  });

  it('renders the right text when the status is not expected', () => {
    const status = '';
    const component = shallow(<Keyboard action={fn} letters={letters} status={status} word="ballers" />);
    expect(component.text()).toEqual('Oops, something went wrong.  Did not expect that game status.');
  });
});
