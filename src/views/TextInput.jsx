import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import '../styles/text-input.scss';
import searchIcon from '../images/searchIcon.svg'


/**
 * This component is the generic text input component used through out.
 */

const TextInput = ({
  showIcon, containerClassName, inputClassName, ...props
}) => {
  const containerStyles = classNames(TextInput.styles.container, {
    [containerClassName]: containerClassName,
  });

  const textInputStyles = classNames(TextInput.styles.textInput, {
    [inputClassName]: inputClassName,
  });

  return (
    <div className={containerStyles}>
      {showIcon && (
        <div className={TextInput.styles.icon}>
          <img src={searchIcon} alt="search" />
        </div>
      )}
      <input
        className={textInputStyles}
        {...props}
      />
    </div>
  );
};

TextInput.styles = {
  container: 'file-manager__text-input-container',
  textInput: 'file-manager__text-input-wrapper',
  icon: 'file-manager__text-input-icon',
};

TextInput.propTypes = {
  showIcon: PropTypes.bool,
  containerClassName: PropTypes.string,
  inputClassName: PropTypes.string,
};

TextInput.defaultProps = {
  showIcon: false,
  containerClassName: '',
  inputClassName: '',
};

export default TextInput;
