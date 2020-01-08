import React, { useReducer } from 'react';
import PropTypes from 'prop-types';

import '../styles/create-file.scss';
import TextInput from './TextInput';
import Modal from './Modal';
import Button from './Button';
import Toggle from './Toggle';
import FileOptions from '../helpers/enums';


/**
 * This component is the create file modal with all the fields and create functionality.
 */

const initialState = {
  name: '',
  type: 'folder',
  creator: '',
  size: '',
  dateCreated: '',
};

const reducer = (prevState, newState) => ({ ...prevState, ...newState });

const CreateFile = ({
  showCreateFileModal, addFile, setCreateFileModal, currentDirectory,
}) => {
  const [state, setState] = useReducer(reducer, initialState);

  const updateValue = e => setState({ [e.target.name]: e.target.value });

  const handleFileCreation = () => {
    addFile(state.name, state, currentDirectory);
    setCreateFileModal(false);
  };

  const handleToggle = type => setState({ type });

  return (
    <Modal onClose={setCreateFileModal} showModal={showCreateFileModal} headerText="Create New">
      <Toggle options={FileOptions} selectedValue={state.type} updateToggleValue={handleToggle} />
      <TextInput
        name="name"
        placeholder="Name"
        value={state.name}
        onChange={updateValue}
        containerClassName={CreateFile.styles.inputContainer}
        inputClassName={CreateFile.styles.textInput}
      />
      <TextInput
        name="creator"
        placeholder="Creator"
        value={state.creator}
        onChange={updateValue}
        containerClassName={CreateFile.styles.inputContainer}
        inputClassName={CreateFile.styles.textInput}
      />
      <TextInput
        name="size"
        type="number"
        placeholder="Size"
        value={state.size}
        onChange={updateValue}
        containerClassName={CreateFile.styles.inputContainer}
        inputClassName={CreateFile.styles.textInput}
      />
      <TextInput
        name="dateCreated"
        type="date"
        placeholder="Date"
        value={state.date}
        onChange={updateValue}
        containerClassName={CreateFile.styles.inputContainer}
        inputClassName={CreateFile.styles.textInput}
      />
      <Button appearance="primary" handleClick={handleFileCreation}>
          Create
      </Button>
    </Modal>
  );
};

CreateFile.styles = {
  textInput: 'file-manager__create-file__text-input',
  inputContainer: 'file-manager__create-file__text-input-container',
};

CreateFile.propTypes = {
  showCreateFileModal: PropTypes.bool.isRequired,
  addFile: PropTypes.func.isRequired,
  setCreateFileModal: PropTypes.func.isRequired,
  currentDirectory: PropTypes.array.isRequired,
};

export default CreateFile;
