import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
//import state from './redux/state';
//import { addPost, updateNewPostText, subscribe } from './redux/state';
import store from './redux/redux-store';

let renderTree = (state) => {


  ReactDOM.render(
    <React.StrictMode>
      <App
        state={state}//state?
        dispatch={store.dispatch.bind(store)}
      />
    </React.StrictMode>,
    document.getElementById('root')
  )
}

/*let renderTree = (state) => {


  ReactDOM.render(
    <React.StrictMode>
      <App
        state={state}
        addPost={addPost}
        updateNewPostText={updateNewPostText} />
    </React.StrictMode>,
    document.getElementById('root')
  )
}*/

renderTree(store.getState());

store.subscribe(() => {
  let state = store.getState();
  renderTree(state);
});

reportWebVitals();
