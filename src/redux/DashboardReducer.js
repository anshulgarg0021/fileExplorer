import DashboardActionTypes from './DashboardActionTypes';
import RawData from '../data/RootFolderStructure.json';
import {
  addFile, removeFile,
} from '../utils';

const initialState = {
  foldersData: RawData,
};

const DashboardReducer = (state = initialState, action) => {
  switch (action.type) {
    case DashboardActionTypes.ADD_FILE:
      return addFile(state, action);
    case DashboardActionTypes.REMOVE_FILE:
      return removeFile(state, action);
    default:
      return state;
  }
};

export default DashboardReducer;
