import PropTypes from 'prop-types';
import styles from './Button.module.scss';

export const Button = ({ actionButton, text, type, dataTestId }) => {
  const buttonType = {
    one: styles.one,
    two: styles.two,
    three: styles.three,
    four: styles.four,
    five: styles.five,
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

Button.propTypes = {
  actionButton: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  dataTestId: PropTypes.string.isRequired,
};
