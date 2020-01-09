import React from 'react';
import PropTypes from 'prop-types';

import '../styles/navbar.scss';
import upArrow from '../images/upArrow.png'
import TextInput from './TextInput';
import Button from './Button';

/**
 * This component provides navbar info like current path and facilities to search the files.
 */

const Navbar = ({
  currentDirectory, searchKeyword, setSearchKeyword, history,
}) => (
  <div className={Navbar.styles.container}>
    <div className={Navbar.styles.folderPath}>
      <Button
        handleClick={history.goBack}
      >
        <img src={upArrow} alt="Back" />
      </Button>
      <div className={Navbar.styles.folderPositionText}>
        /Root
        {currentDirectory.map(path => `/${path} `) }
      </div>
    </div>
    <TextInput
      showIcon
      placeholder="Search"
      value={searchKeyword}
      onChange={e => setSearchKeyword(e.target.value)}
    />
  </div>
);

Navbar.styles = {
  container: 'file-manager__navbar__container',
  folderPath: 'file-manager__navbar__folder-path-wrapper',
  folderPositionText: 'file-manager__navbar__folder-position-text',
};

Navbar.propTypes = {
  searchKeyword: PropTypes.string.isRequired,
  setSearchKeyword: PropTypes.func.isRequired,
  history: PropTypes.func.isRequired,
  currentDirectory: PropTypes.array.isRequired,
};

export default Navbar;
