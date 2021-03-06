import { dialogsReducer } from './dialogs-reducer';
import { profileReducer } from './profile-reducer';
import { usersReducer } from './users-reducer';
import sidebarReducer from './sidebar-reducer';
import { authReducer } from './auth-reducer'
import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk'


let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;