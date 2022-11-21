import UsersManagement from './users/containers/usersManagement/UsersManagement';
import styles from './App.module.scss';

export default function App() {
  return (
    <div className={styles.App}>
      <UsersManagement />
    </div>
  );
}
