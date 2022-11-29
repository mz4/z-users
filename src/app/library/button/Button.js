import styles from './Button.module.scss';

export const Button = ({ actionButton, text, type, dataTestId }) => {
  const buttonType = {
    primary: styles.primary,
    secondary: styles.secondary,
    tertiary: styles.tertiary,
    quaternary: styles.quaternary
  };
  return (
    <button
      onClick={actionButton}
      className={buttonType[type]}
      data-testid={dataTestId}
    >
      {text}
    </button>
  );
};
