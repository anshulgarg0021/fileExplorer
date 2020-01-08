import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import '../styles/toggle.scss';
import Button from './Button';

/**
 * This is generic the toggle switch component.
 */

const Toggle = ({ options, selectedValue, updateToggleValue }) => (
  <div className={Toggle.styles.container}>
    {options.map(option => (
      <Button
        className={classNames({
          [Toggle.styles.selected]: option === selectedValue,
          [Toggle.styles.unselected]: option !== selectedValue,
        })}
        handleClick={() => updateToggleValue(option)}
      >
        {option}
      </Button>
    ))}
  </div>
);

Toggle.propTypes = {
  options: PropTypes.array.isRequired,
  selectedValue: PropTypes.string.isRequired,
  updateToggleValue: PropTypes.func.isRequired,
};

Toggle.styles = {
  container: 'file-manager__toggle__container',
  selected: 'file-manager__toggle__selected',
  unselected: 'file-manager__toggle__unselected',
};

export default Toggle;
