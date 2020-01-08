import React from 'react';
import PropTypes from 'prop-types';

import '../styles/sidebar.scss';
import SideBarFolder from './SidebarFolder';

/**
 * This is the side bar component i.e has the folders nesting.
 */

const Sidebar = ({ foldersData, history }) => (
  <div className={Sidebar.styles.container}>
    <div className={Sidebar.styles.header}>Root</div>
    {foldersData.root.files.map(fileName => (
      <SideBarFolder history={history} key={fileName} path={`/${fileName}/`} filename={fileName} foldersData={foldersData} />
    ))}
  </div>
);

Sidebar.styles = {
  container: 'file-manager__sidebar__container',
  header: 'file-manager__sidebar__header',
  folder: 'file-manager__sidebar__folder',
  folderSelected: 'file-manager__sidebar__folder-selected',
};

Sidebar.propTypes = {
  foldersData: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
};

export default Sidebar;
