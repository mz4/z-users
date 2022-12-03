import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import store from './app/store/store';

import App from './app/App';
const rootElement = document.getElementById('root');
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
