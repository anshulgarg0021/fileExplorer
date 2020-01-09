import React from 'react';
import PropTypes from 'prop-types';
import AddIcon from '../images/AddIcon.png'
import '../styles/add-file-icon.scss';
import Button from './Button';

/**
 * This component is the add file with the design and the click functionality .
 */

const AddFileIcon = ({ handleClick }) => (
  <Button handleClick={handleClick} className={AddFileIcon.styles.container}>
    <img
      src={AddIcon}
      alt="loading"
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
