import { useRef } from 'react';
import { useClickOutside } from '../../hooks/index';
import { Button } from '../index';
import styles from './Modal.module.scss';

export const Modal = ({ action, children, modalType }) => {
  const type = {
    primary: styles.primary,
    secondary: styles.secondary
  };
  const modalRef = useRef();
  useClickOutside(modalRef, action);
  return (
    <div className={type[modalType]} data-testid="modal">
      <div ref={modalRef} className={styles.modalBody}>
        <div className={styles.header}>
          <Button
            type="secondary"
            text="Close"
            actionButton={action}
            dataTestId="btnClose"
          />
        </div>
        {children}
      </div>
    </div>
  );
};
