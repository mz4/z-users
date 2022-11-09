import styles from "./Button.module.scss";

export const Button = ({ actionButton, text, type }) => {
  const buttonType = {
    primary: styles.primary,
    secondary: styles.secondary,
  };
  return (
    <button onClick={actionButton} className={buttonType[type]}>
      {text}
    </button>
  );
};
