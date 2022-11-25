import styles from './Header.module.scss';

const Header = ({ children }) => {
  return <div className={styles.header}>{children}</div>;
};
export default Header;
