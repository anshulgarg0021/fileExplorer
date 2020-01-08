import DashboardActionTypes from './DashboardActionTypes';

const DashboardActions = {
  addFile: (fileName, file, currentDirectory) => ({
    type: DashboardActionTypes.ADD_FILE, fileName, file, currentDirectory,
  }),
  removeFile: (fileName, currentDirectory) => ({
    type: DashboardActionTypes.REMOVE_FILE,
    fileName,
    currentDirectory,
  }),
};

export default DashboardActions;
