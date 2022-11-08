import styles from "./Text.module.scss";

export const Text = ({ text }) => {
  return (
    <div className={styles.text}>
      <span>{text}</span>
    </div>
  );
};
