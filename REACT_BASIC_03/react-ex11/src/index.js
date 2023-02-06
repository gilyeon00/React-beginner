import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import store from './store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>      {/*  스토어를 app에 전달 <- store의 위치는 상단에서 import 해줘야함 */}
    <App />
  </Provider>
);

reportWebVitals();
