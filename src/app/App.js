import { Provider } from 'react-redux';
import store from '../app/store/store';
import styles from './App.module.scss';
import UsersContextProvider from './views/context/Context';
import UsersManagement from './views/users/containers/usersManagement/UsersManagement';

export default function App() {
  return (
    <div className={styles.App}>
      <Provider store={store}>
        <UsersContextProvider>
          <UsersManagement />
        </UsersContextProvider>
      </Provider>
    </div>
  );
}
