import React from 'react';
import styles from './Field.module.scss';

export const Field = ({ children }) => {
  return <div className={styles.field}>{children}</div>;
};
