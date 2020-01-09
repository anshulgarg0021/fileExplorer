import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Navbar from './Navbar';
import '../styles/folder-viewer.scss';
import File from './File';
import { filteredResult } from '../utils';
import CreateFile from './CreateFile';
import AddFileIcon from './AddFileIcon';

/**
 * This component is the folder viewer component that displays all the files and folder the current path has.
 */

const FolderViewer = ({
  currentDirectory, currentFolderFiles,
  foldersData, addFile, removeFile, history, currentDirectoryPathName,
}) => {
  const [searchKeyword, setSearchKeyword] = useState('');
  const [showCreateFileModal, setCreateFileModal] = useState(false);

  const filteredFiles = filteredResult(currentFolderFiles, searchKeyword);

  return (
    <div className={FolderViewer.styles.container}>
      <Navbar
        currentDirectory={currentDirectory}
        searchKeyword={searchKeyword}
        setSearchKeyword={setSearchKeyword}
        history={history}
      />
      <div className={FolderViewer.styles.wrapper}>
        {currentFolderFiles.length ? filteredFiles.map(file => (
          <File
            currentDirectory={currentDirectory}
            key={file}
            fileName={file}
            fileInfo={foldersData[file]}
            removeFile={removeFile}
            history={history}
            currentDirectoryPathName={currentDirectoryPathName}
          />
        )) : <span className={FolderViewer.styles.emptyText}>The folder is empty.</span>}
        <AddFileIcon handleClick={() => setCreateFileModal(true)} />
       </div>
       <CreateFile
        addFile={addFile}
        showCreateFileModal={showCreateFileModal}
        setCreateFileModal={setCreateFileModal}
        currentDirectory={currentDirectory}
      />
    </div>
  );
};

FolderViewer.styles = {
  container: 'file-manager__folder-viewer__container',
  wrapper: 'file-manager__folder-viewer__wrapper',
  emptyText: 'file-manager__folder-viewer__empty-text',
};

FolderViewer.propTypes = {
  currentDirectory: PropTypes.array.isRequired,
  currentFolderFiles: PropTypes.array.isRequired,
  foldersData: PropTypes.object.isRequired,
  addFile: PropTypes.func.isRequired,
  removeFile: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
  currentDirectoryPathName: PropTypes.string.isRequired,
};

export default FolderViewer;
