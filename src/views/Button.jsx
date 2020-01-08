import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import '../styles/button.scss';

/**
 * This component is the generic Button wrapper used through out.
 */

const Button = ({
  handleClick, handleDblClick, disabled, children, appearance, className, handleRightClick,
}) => {
  const customContainer = classNames([
    Button.styles.container,
    {
      [Button.styles.primaryAppearance]: appearance === 'primary',
      [className]: className,
    },
  ]);
  return (
    <button
      className={customContainer}
      onClick={handleClick}
      onDoubleClick={handleDblClick}
      onContextMenu={handleRightClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

Button.styles = {
  container: 'file-manager__button__main-container',
  primaryAppearance: 'file-manager__button__primary-appearance',
};

Button.propTypes = {
  handleClick: PropTypes.func,
  handleDblClick: PropTypes.func,
  handleRightClick: PropTypes.func,
  children: PropTypes.node,
  disabled: PropTypes.bool,
  appearance: PropTypes.string,
  className: PropTypes.string,
};

Button.defaultProps = {
  handleClick: () => {},
  handleDblClick: () => {},
  handleRightClick: () => {},
  children: <div />,
  disabled: false,
  appearance: '',
  className: '',
};

export default Button;
