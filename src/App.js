import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import Music from './components/Music/Music';
import News from './components/News/News';
import Settings from './components/Settings/Settings';
import { Route, Routes, BrowserRouter } from 'react-router-dom';

function App(props) {

  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <NavBar />
        <div className='app-wrapper-content'>
          <Routes>
            <Route path='/' element={<Profile
              posts={props.state.profilePage.posts}
              dispatch={props.dispatch}
              newPostText={props.state.profilePage.newPostText}
            />}
            />
            <Route path='/dialogs/*' element={<Dialogs
              newMessageBody={props.state.dialogsPage.newMessageBody}
              messages={props.state.dialogsPage._messages}
              dialogs={props.state.dialogsPage.dialogs}
              dispatch={props.dispatch}
            />}
            />
            <Route path='/profile' element={<Profile
              posts={props.state.profilePage.posts}
              dispatch={props.dispatch}
              newPostText={props.state.profilePage.newPostText}
            />}
            />
            <Route path='/music' element={<Music />} />
            <Route path='/news' element={<News />} />
            <Route path='/settings' element={<Settings />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}
export default App;
