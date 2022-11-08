import styles from "./Button.module.scss";

export const Button = ({ actionButton, text }) => {
  return (
    <button onClick={actionButton} className={styles.primaryButton}>
      {text}
    </button>
  );
};
