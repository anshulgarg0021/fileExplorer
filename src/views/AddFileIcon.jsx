import React from 'react';
import PropTypes from 'prop-types';
import { faAd } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import '../styles/add-file-icon.scss';
import Button from './Button';

/**
 * This component is the add file with the design and the click functionality .
 */

const AddFileIcon = ({ handleClick }) => (
  <Button handleClick={handleClick} className={AddFileIcon.styles.container}>
    <FontAwesomeIcon
      icon={faAd}
      size="2x"
      color="#DDE0E4"
    />
  </Button>
);

AddFileIcon.styles = {
  container: 'file-manager__add-file__container',
};

AddFileIcon.propTypes = {
  handleClick: PropTypes.func.isRequired,
};

export default AddFileIcon;
