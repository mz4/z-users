import { useContext } from 'react';
import { useDispatch } from 'react-redux';
import { UsersContext } from '../../../context/Context';
import { logout } from '../../auth/store/authSlice';
import Header from '../components/header/Header';
import Sidebar from '../components/sidebar/Sidebar';
import styles from './Layout.module.scss';

const Layout = ({ children }) => {
  const dispatch = useDispatch();
  const usersContext = useContext(UsersContext);
  const setTheme = () => {
    usersContext.toggleTheme();
  };
  const handleLogout = () => {
    dispatch(logout());
  };
  return (
    <div className={styles.container}>
      <Sidebar />
      <div className={styles.contentContainer}>
        <Header setTheme={setTheme} handleLogout={handleLogout} />
        {children}
      </div>
    </div>
  );
};

export default Layout;
