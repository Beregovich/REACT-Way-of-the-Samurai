import React from 'react';
import Users from './Users';
import { connect } from 'react-redux';
import { followAC, unfollowAC, setUsersAC, setCurrentPageAC, setTotalUsersCountAC } from '../../redux/users-reducer';
import * as axios from 'axios';

class UsersContainer extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.count}`).then(response => {
            this.props.setUsers(response)
            this.props.setTotalUsersCount(response.data.totalCount)
        }
        )
    }
    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.count}`).then(response => {
            this.props.setUsers(response)
        })
    }
    render() {
        return <Users
            users={this.props.users}
            totalCount={this.props.totalCount}
            count={this.props.count}
            currentPage={this.props.currentPage}
            onPageChanged={this.onPageChanged}
            unfollow={this.props.unfollow}
            follow={this.props.follow}
        />
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId) => {
            dispatch(unfollowAC(userId))
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users))
        },
        setCurrentPage: (currentPage) => {
            dispatch(setCurrentPageAC(currentPage))
        },
        setTotalUsersCount: (totalCount) => {
            dispatch(setTotalUsersCountAC(totalCount))
        }

    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        count: state.usersPage.count,
        totalCount: state.usersPage.totalCount,
        currentPage: state.usersPage.currentPage
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);