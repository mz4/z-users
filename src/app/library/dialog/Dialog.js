import { useRef } from 'react';
import { useClickOutside } from '../../hooks';
import styles from './Dialog.module.scss';

export const Dialog = ({ header, body, footer, handleClickOutside }) => {
  const dialogRef = useRef();
  useClickOutside(dialogRef, handleClickOutside);
  return (
    <div className={styles.pageContainer}>
      <div className={styles.container} ref={dialogRef}>
        <div className={styles.header}>{header}</div>
        <div className={styles.body}>{body}</div>
        <div className={styles.footer}>{footer}</div>
      </div>
    </div>
  );
};
