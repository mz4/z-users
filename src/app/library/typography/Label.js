import styles from './Label.module.scss';

export const Label = ({ text }) => {
  return (
    <div className={styles.label}>
      <label htmlFor="favorite">{text}</label>
    </div>
  );
};
