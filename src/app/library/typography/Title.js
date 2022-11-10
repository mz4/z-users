import styles from './Title.module.scss';

export const Title = ({ text }) => {
  return (
    <div className={styles.pageTitle}>
      <span>{text}</span>
    </div>
  );
};
