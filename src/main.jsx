import App from './App';
import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { cartReducer } from './reducers/cartReducer';
import { legacy_createStore } from 'redux';

const store = legacy_createStore(
  cartReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
