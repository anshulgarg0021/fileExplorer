import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';

import '../styles/dropdown.scss';
import Button from './Button';

/**
 * This component is the generic dropdown component i.e used throughout.
 */

const fileState = {
  open: 'Open',
  info: 'Get Info',
  delete: 'Delete',
};

const Dropdown = ({ showDropDown, setShowDropDown, dropDownAction }) => {
  const dropDownRef = useRef(null);

  const handleClickOutside = (event) => {
    if (dropDownRef.current && !dropDownRef.current.contains(event.target)) {
      setShowDropDown(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  if (showDropDown) {
    return (
      <div className={Dropdown.styles.container} ref={dropDownRef}>
        {Object.keys(fileState).map(state => (
          <Button className={Dropdown.styles.listItem} handleClick={() => dropDownAction(state)}>
            {fileState[state]}
          </Button>
        ))}
      </div>
    );
  }
  return <div />;
};

Dropdown.styles = {
  container: 'file-manager__dropdown-container',
  listItem: 'file-manager__dropdown-list-item',
};

Dropdown.propTypes = {
  showDropDown: PropTypes.bool.isRequired,
  setShowDropDown: PropTypes.func.isRequired,
  dropDownAction: PropTypes.func.isRequired,

};

Dropdown.defaultProps = {

};

export default Dropdown;
