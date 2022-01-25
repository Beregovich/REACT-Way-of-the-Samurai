import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './redux/redux-store';
import StoreContext from './StoreContext'


let renderTree = (state) => {


  ReactDOM.render(

    <StoreContext.Provider value={store}>
      <React.StrictMode>
        <App />
      </React.StrictMode>,
    </StoreContext.Provider>,
    document.getElementById('root')
  )
}
renderTree(store.getState());

store.subscribe(() => {
  let state = store.getState();
  renderTree(state);
});

reportWebVitals();
