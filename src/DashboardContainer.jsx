import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { extractCurrentFolderData } from './utils';
import './styles/dashboard.scss';
import Sidebar from './views/Sidebar';
import FolderViewer from './views/FolderViewer';
import DashboardActions from './redux/DashboardActions';

/**
 * This component is the main entry point i.e dashboard component.
 */


const DashboardContainer = ({
  history,
  router,
  dashboard: { foldersData }, addFile, removeFile,
}) => {
  const { currentFolderFiles, path } = extractCurrentFolderData(router.location.pathname, foldersData);

  return (
    <div className={DashboardContainer.styles.container}>
      <Sidebar history={history} foldersData={foldersData} />
     /* <FolderViewer
        currentDirectoryPathName={router.location.pathname}
        currentDirectory={path}
        currentFolderFiles={currentFolderFiles}
        foldersData={foldersData}
        addFile={addFile}
        removeFile={removeFile}
        history={history}
      />*/
    </div>
  );
};

DashboardContainer.styles = {
  container: 'file-manager__dashboard__container',
};

DashboardContainer.propTypes = {
  dashboard: PropTypes.object.isRequired,
  addFile: PropTypes.func.isRequired,
  removeFile: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
  router: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({ dashboard: state.dashboard, router: state.router });

const mapDispatchToProps = dispatch => ({
  addFile: (fileName, file, currentPath) =>
      dispatch(DashboardActions.addFile(fileName, file, currentPath)),
  removeFile: (fileName, currentPath) =>
    dispatch(DashboardActions.removeFile(fileName, currentPath)),
});

export default connect(mapStateToProps, mapDispatchToProps)(DashboardContainer);
