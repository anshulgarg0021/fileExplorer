import React from 'react';
import PropTypes from 'prop-types';

import '../styles/file-info.scss';
import { faFile, faFolder } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Modal from './Modal';

const traverseKeys = {
  size: 'Size:',
  creator: 'Creator Name:',
  dateCreated: 'Created Date:',
};

/**
 * This component is the file info modal that displays all the properties of the files.
 */

const FileInfo = ({
  showInfoModal, fileName, fileInfo, onClose,
}) => (
  <Modal showModal={showInfoModal} onClose={onClose} headerText="File Info">
    <div className={FileInfo.styles.fileIcon}>
      <FontAwesomeIcon
        icon={fileInfo.type === 'folder' ? faFolder : faFile}
        size="4x"
        color={fileInfo.type === 'folder' ? '#ADD8E6' : '#FDCD53'}
      />
    </div>
    <div className={FileInfo.styles.container}>
      <div className={FileInfo.styles.header}>
              Name:
      </div>
      <div className={FileInfo.styles.description}>
        {fileName}
      </div>
    </div>
    {Object.keys(traverseKeys).map(key => (
      <div className={FileInfo.styles.container}>
        <div className={FileInfo.styles.header}>
          {traverseKeys[key]}
        </div>
        <div className={FileInfo.styles.description}>
          {fileInfo[key]}
        </div>
      </div>
    ))}
  </Modal>
);


FileInfo.styles = {
  container: 'file-manager__file-info__container',
  header: 'file-manager__file-info__header',
  description: 'file-manager__file-info__description',
  fileIcon: 'file-manager__file-info__file-icon',
};

FileInfo.propTypes = {
  fileName: PropTypes.string.isRequired,
  fileInfo: PropTypes.object.isRequired,
  showInfoModal: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default FileInfo;
