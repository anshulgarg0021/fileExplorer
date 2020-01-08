import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import '../styles/text-input.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

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
          <FontAwesomeIcon icon={faSearch} size="1x" color="#AFB2B6" />
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
