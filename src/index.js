import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
//import state from './redux/state';
//import { addPost, updateNewPostText, subscribe } from './redux/state';
import store from './redux/state';

let renderTree = (state) => {


  ReactDOM.render(
    <React.StrictMode>
      <App
        state={state}//state?
        addPost={store.addPost.bind(store)}
        updateNewPostText={store.updateNewPostText.bind(store)} />
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
store.subscribe(renderTree);
reportWebVitals();
