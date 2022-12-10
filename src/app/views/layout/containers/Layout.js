import Sidebar from '../components/sidebar/Sidebar';
import styles from './Layout.module.scss';

const Layout = ({ children }) => {
  return (
    <div className={styles.container}>
      <Sidebar />
      <div className={styles.contentContainer}>
        <div className={styles.header}>header</div>
        {children}
      </div>
    </div>
  );
};

export default Layout;
