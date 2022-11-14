import classNames from 'classnames';
import styles from './Title.module.scss';

export const Title = ({ text, customClassName = '' }) => {
  return (
    <div className={classNames(styles.pageTitle, customClassName)}>
      <span>{text}</span>
    </div>
  );
};
