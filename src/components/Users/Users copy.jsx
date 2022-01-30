import React from 'react';
import * as axios from 'axios';


class Users extends React.Component {

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
        return <Users />
    }
}
export default Users;