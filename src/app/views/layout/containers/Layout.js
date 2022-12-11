import { useContext } from 'react';
import { UsersContext } from '../../../context/Context';
import { Button } from '../../../library';
import Sidebar from '../components/sidebar/Sidebar';
import styles from './Layout.module.scss';

const Layout = ({ children }) => {
  const usersContext = useContext(UsersContext);
  const setTheme = () => {
    usersContext.toggleTheme();
  };
  return (
    <div className={styles.container}>
      <Sidebar />
      <div className={styles.contentContainer}>
        <div className={styles.header}>
          <Button
            actionButton={setTheme}
            text={'Toggle Theme'}
            type="primary"
            dataTestId="btnSort"
          />
        </div>
        {children}
      </div>
    </div>
  );
};

export default Layout;
