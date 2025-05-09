import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import store from './store/configureStore.js';
import './index.css';
import App from './App/App.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
);
