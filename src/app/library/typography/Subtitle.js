import styles from "./Subtitle.module.scss";

export const Subtitle = ({ text }) => {
  return (
    <div className={styles.pageSubTitle}>
      <span>{text}</span>
    </div>
  );
};
