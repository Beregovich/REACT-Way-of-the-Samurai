import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import state from './redux/state';
import { addPost, updateNewPostText, subscribe } from './redux/state';



let renderTree = (state) => {


  ReactDOM.render(
    <React.StrictMode>
      <App
        state={state}
        addPost={addPost}
        updateNewPostText={updateNewPostText} />
    </React.StrictMode>,
    document.getElementById('root')
  )
}

renderTree(state);
subscribe(renderTree);
reportWebVitals();
