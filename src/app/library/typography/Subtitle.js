import classnames from 'classnames';
import styles from './Subtitle.module.scss';

export const Subtitle = ({ text, customClassName = '' }) => {
  return (
    <div className={classnames(styles.pageSubTitle, customClassName)}>
      <span>{text}</span>
    </div>
  );
};
