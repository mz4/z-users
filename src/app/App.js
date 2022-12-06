import UsersManagement from './users/containers/usersManagement/UsersManagement';
import styles from './App.module.scss';
import UsersContextProvider from './users/context/Context';

export default function App() {
  return (
    <div className={styles.App}>
      <UsersContextProvider>
        <UsersManagement />
      </UsersContextProvider>
    </div>
  );
}
