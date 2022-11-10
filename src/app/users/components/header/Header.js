import classnames from 'classnames';
import styles from './Header.module.scss';

const Header = ({ children }) => {
  return (
    <div
      className={classnames(
        styles.headOptionsContainer,
        styles.headOptions,
        styles.marginTop24
      )}
    >
      {children}
    </div>
  );
};
export default Header;
