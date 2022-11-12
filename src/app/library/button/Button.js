import styles from './Button.module.scss';

export const Button = ({ actionButton, text, type }) => {
  const buttonType = {
    primary: styles.primary,
    secondary: styles.secondary,
    tertiary: styles.tertiary
  };
  return (
    <button onClick={actionButton} className={buttonType[type]}>
      {text}
    </button>
  );
};
