import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import store from '../app/store/store';
import styles from './App.module.scss';
import UsersContextProvider from './context/Context';
import Views from './views';

export default function App() {
  return (
    <div className={styles.App}>
      <Provider store={store}>
        <UsersContextProvider>
          <Router>
            <Views />
          </Router>
        </UsersContextProvider>
      </Provider>
    </div>
  );
}
