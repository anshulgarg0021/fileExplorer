import React, { useState } from 'react';
import PropTypes from 'prop-types';
import fileIcon from '../images/fileIcon.png'
import folderIcon from '../images/folderIcon.png'
import '../styles/file.scss';
import Button from './Button';
import FileInfo from './FileInfo';
import Dropdown from './DropDown';

/**
 * This component is the file component that has features like open, remove etc.
 */

const File = ({
  fileName, fileInfo, removeFile, history, currentDirectory, currentDirectoryPathName,
}) => {
  const [showInfoModal, setShowInfoModal] = useState(false);
  const [showDropDown, setShowDropDown] = useState(false);

  const updateCurrentDirectory = () => {
    switch (fileInfo.type) {
      case 'folder':
        history.push(`${currentDirectoryPathName}${fileName}/`);
        break;
      case 'file':
        window.open(fileInfo.path);
        break;
      default:
        break;
    }
  };

  const dropDownAction = (action) => {
    switch (action) {
      case 'open':
        updateCurrentDirectory();
        break;
      case 'info':
        setShowInfoModal(true);
        break;
      case 'delete':
        removeFile(fileName, currentDirectory);
        break;
      default:
    }
  };

  const handleClick = () => {
    const mq = window.matchMedia('(max-width: 1200px)');
    if (mq.matches) {
      updateCurrentDirectory();
    }
  };

  return (
    <div className={File.styles.container}>
      <Button
        handleDblClick={updateCurrentDirectory}
        handleClick={handleClick}
        handleRightClick={(e) => {
          e.preventDefault();
          setShowDropDown(true);
        }}
      >
        <div className={File.styles.wrapper}>
          <img
            src={fileInfo.type === 'folder' ? folderIcon : fileIcon}
            alt="loading"

          />
          <p className={File.styles.fileName}>{fileName}</p>
        </div>
      </Button>
      <div className={File.styles.dropDown}>
        <Dropdown
          showDropDown={showDropDown}
          setShowDropDown={setShowDropDown}
          dropDownAction={dropDownAction}
        />
      </div>
      {showInfoModal
      && (
      <FileInfo
        fileName={fileName}
        fileInfo={fileInfo}
        showInfoModal={showInfoModal}
        onClose={setShowInfoModal}
      />
      )}
    </div>
  );
};

File.styles = {
  container: 'file-manager__file__container',
  wrapper: 'file-manager__file__wrapper',
  fileName: 'file-manager__file__name',
  dropDown: 'file-manager__file__drop-down',
};

File.propTypes = {
  fileName: PropTypes.string.isRequired,
  fileInfo: PropTypes.object.isRequired,
  removeFile: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
  currentDirectory: PropTypes.array.isRequired,
  currentDirectoryPathName: PropTypes.string.isRequired,
};

export default File;
