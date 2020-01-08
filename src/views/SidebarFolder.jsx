import React, { useState } from 'react';
import PropTypes from 'prop-types';

import '../styles/sidebar-folder.scss';
import Button from './Button';

/**
 * This is the file folder dropdown component.
 */

const SideBarFolder = ({
  filename, foldersData, path, history,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const file = foldersData[filename];

  const handleFileClick = () => {
    switch (foldersData[filename].type) {
      case 'folder':
        history.push(path);
        break;
      case 'file':
        window.open(foldersData[filename].path);
        break;
      default:
        break;
    }
    setIsOpen(prevState => !prevState);
  };

  return (
    <div className={SideBarFolder.styles.container}>
      <Button
        className={SideBarFolder.styles.folderName}
        handleClick={handleFileClick}
      >
        {filename}
      </Button>
      {(isOpen && file.files.length) ? file.files.map(internalFile => (
        <SideBarFolder history={history} path={`${path}/${internalFile}`} filename={internalFile} foldersData={foldersData} />
      )) : <span />}
    </div>
  );
};

SideBarFolder.styles = {
  container: 'file-manager__sidebar-folder__container',
  folderName: 'file-manager__sidebar-folder__folder-name',
};

SideBarFolder.propTypes = {
  filename: PropTypes.string.isRequired,
  foldersData: PropTypes.object.isRequired,
  path: PropTypes.string.isRequired,
  history: PropTypes.object.isRequired,
};

export default SideBarFolder;
