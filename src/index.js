import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './redux/redux-store';
import { Provider } from 'react-redux';


let renderTree = () => {


  ReactDOM.render(
    <Provider store={store}>
      <React.StrictMode>
        <App />
      </React.StrictMode>,
    </Provider>,
    document.getElementById('root')
  )
}

renderTree();

store.subscribe(() => {
  renderTree();
});

reportWebVitals();
