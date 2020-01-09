const extractCurrentFolderData = (currentDirectory = '', data) => {
  const path = currentDirectory.split('/').filter(pathname => pathname !== '');
  const payload = { path, currentFolderFiles: data.root.files };
  if (path.length) payload.currentFolderFiles = data[path[path.length - 1]].files;
  return payload;
};

const escapeRegExp = string => string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

const occurenceInString = (word, textData) => {
  const count = (
    word
      .toLowerCase()
      .match(new RegExp(escapeRegExp(textData.toLowerCase()), 'g')) || []
  ).length;
  const indexOfCharacter = word
    .toLowerCase()
    .indexOf(escapeRegExp(textData.toLowerCase()));
  return {
    word,
    occurence: count,
    index: indexOfCharacter,
  };
};

const filteredResult = (arr, searchingCharacter) => {
  const order = [];
  const sortedArr = [];
  arr.forEach((key) => {
    const textData = searchingCharacter.toLowerCase();
    if (key.indexOf(textData) > -1) {
      order.push(occurenceInString(key, searchingCharacter));
    }
  });
  order.sort((a, b) => {
    if (a.index < b.index) {
      return -1;
    }
    if (a.index > b.index) {
      return 1;
    }
    if (a.index === b.index) {
      if (a.occurence < b.occurence) {
        return 1;
      }
      if (a.occurence > b.occurence) {
        return -1;
      }
    }
    return 0;
  });
  order.forEach(obj => sortedArr.push(obj.word));
  return sortedArr;
};

const addFile = (state, action) => {
  const { foldersData } = state;
  const { fileName, file, currentDirectory } = action;
  const currentFolderName = currentDirectory[currentDirectory.length - 1] || 'root';
  const newFoldersData = {
    ...foldersData,
    [fileName]: file,
    [currentFolderName]: {
      ...foldersData[currentFolderName],
      files: [...foldersData[currentFolderName].files, fileName],
    },
  };
  return { ...state, foldersData: newFoldersData };
};

const removeFile = (state, action) => {
  const { fileName, currentDirectory } = action;
  const { foldersData } = state;
  const currentFolderName = currentDirectory[currentDirectory.length - 1] || 'root';
  const removeFromDirectory = {
    ...foldersData,
    [currentFolderName]: {
      ...foldersData[currentFolderName],
      files: foldersData[currentFolderName].files.filter(name => name !== fileName),
    },
  };
  const { [fileName]: fileToBeRemove, ...newFoldersData } = removeFromDirectory;
 console.log("dsd",removeFromDirectory);
  return { ...state, foldersData: newFoldersData };
};

export {
  extractCurrentFolderData,
  filteredResult,
  addFile,
  removeFile,
};
