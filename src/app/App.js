import { Provider } from 'react-redux';
import store from '../app/store/store';
import styles from './App.module.scss';
import UsersContextProvider from './context/Context';
import Login from './views/auth/containers/login/Login';
import UsersManagement from './views/users/containers/usersManagement/UsersManagement';

export default function App() {
  return (
    <div className={styles.App}>
      <Provider store={store}>
        <UsersContextProvider>
          {/* <UsersManagement /> */}
          <Login />
        </UsersContextProvider>
      </Provider>
    </div>
  );
}
