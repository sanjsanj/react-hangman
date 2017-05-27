import React from 'react';
import PropTypes from 'prop-types';

const Image = ({ imageSrc }) => (
  <div>
    <img
      src={imageSrc}
      alt="hangman"
    />
  </div>
);

Image.propTypes = {
  imageSrc: PropTypes.string.isRequired,
};

export default Image;
