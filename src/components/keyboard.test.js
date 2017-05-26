import React from 'react';
import { shallow } from 'enzyme';

import Keyboard from './keyboard';
import Constants from '../constants/status';

describe('Keyboard', () => {
  let fn = null;
  let letters = null;

  beforeEach(() => {
    fn = jest.fn();
    letters = 'abcdefghijklmnopqrstuvwxyz'.split('');
  });

  it('renders the keyboard when the status is PLAYING', () => {
    const status = Constants.PLAYING;
    const component = shallow(<Keyboard action={fn} letters={letters} status={status} />);
  });

  it('does not render the keyboard when the status is not PLAYING', () => {
    const status = 'NOT_PLAYING';
    const component = shallow(<Keyboard action={fn} letters={letters} status={status} />);
  });

  it('renders the PLAY AGAIN text when the status is LOST', () => {
    const status = Constants.LOST;
    const component = shallow(<Keyboard action={fn} letters={letters} status={status} />);
    expect(component.text()).toEqual('Play again');
  });
});
