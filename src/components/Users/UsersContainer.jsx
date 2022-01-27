import React from 'react';
import Users from './Users';
import { connect } from 'react-redux';
import { followAC, unfollowAC, setUsersAC } from '../../redux/users-reducer';

let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId) => {
            dispatch(unfollowAC(userId))
        },
        setUsers: (users) => {
            setUsersAC(users)
        }

    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
    }
}

const UserContainer = connect(mapStateToProps, mapDispatchToProps)(Users);
export default UserContainer;