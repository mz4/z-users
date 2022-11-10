import { useRef } from 'react';
import { useClickOutside } from '../../hooks/index';
import styles from './Modal.module.scss';

export const Modal = ({ action, children }) => {
  const modalRef = useRef();
  useClickOutside(modalRef, action);
  return (
    <div className={styles.modalContainer}>
      <div ref={modalRef} className={styles.modalBody}>
        {children}
      </div>
    </div>
  );
};
