import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
import Profile from './components/Profile/Profile';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer'
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
              store={props.store}
            />}
            />
            <Route path='/dialogs/*' element={<DialogsContainer
              store={props.store}
            />}
            />
            <Route path='/profile' element={<Profile
              store={props.store}
            />}
            />
            <Route path='/users' element={<UsersContainer
              store={props.store}
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
