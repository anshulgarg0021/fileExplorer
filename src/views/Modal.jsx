import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import '../styles/modal.scss';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from './Button';

/**
 * This component is the generic modal component i.e used through out.
 */

const Modal = ({
  showModal, className, children, headerText, onClose,
}) => {
  const styles = {
    container: 'file-manager__model-container',
    wrapper: 'file-manager__model-wrapper',
    content: 'file-manager__model-content',
    header: 'file-manager__model-header',
    headerText: 'file-manager__model-header-text',
    headerIcon: 'file-manager__model-header-icon',
  };

  if (showModal) {
    const customClass = classNames([styles.wrapper], {
      [className]: className,
    });

    const getAllChildren = () => (
      <div className={styles.container}>
        <div className={customClass}>
          <div className={styles.header}>
            <div className={styles.headerText}>{headerText}</div>
            <Button className={styles.headerIcon} handleClick={() => onClose(false)}>
              <FontAwesomeIcon icon={faTimes} size="1x" color="#AFB2B6" />
            </Button>
          </div>
          <div className={styles.content}>
            {children}
          </div>
        </div>
      </div>
    );
    return getAllChildren();
  }
  return <div />;
};

Modal.propTypes = {
  showModal: PropTypes.bool,
  children: PropTypes.node.isRequired,
  onClose: PropTypes.func.isRequired,
  className: PropTypes.string,
  headerText: PropTypes.string,
};

Modal.defaultProps = {
  showModal: false,
  className: '',
  headerText: '',
};

export default Modal;
