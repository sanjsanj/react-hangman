import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ text, action, className }) => (
  <button className={className} onClick={action}>{text}</button>
);

Button.propTypes = {
  text: PropTypes.string,
  action: PropTypes.func,
};

Button.defaultProps = {
  text: '',
  action: () => {},
};

export default Button;
