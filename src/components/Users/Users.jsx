import React from 'react';
import classes from './Users.module.css';
import * as axios from 'axios';
import userAvatar from '../../assets/images/ava.png'


class Users extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.count}`).then(response => {
            this.props.setUsers(response)
        }
        )
    }
    render() {
        let pagesCount = Math.ceil(this.props.totalCount / this.props.count)
        let pages = [];
        for (let i = 1; i < 11; i++) {
            pages.push(i)
        }
        return <div className={classes.users}>
            <h4>Pages: {pagesCount}</h4>
            <div>
                {pages.map(p => {
                    return <span className={this.props.currentPage === p ? classes.selectedPage : classes.pageNumber}>{p}</span>
                })}
            </div>

            {this.props.users.map(u =>
                <div key={u.id} className={classes.user}>
                    <span>
                        <div>
                            <img src={userAvatar} />
                        </div>
                        <div>{
                            u.followed
                                ? <button onClick={() => { this.props.unfollow(u.id) }}>Unfollow</button>
                                : <button onClick={() => { this.props.follow(u.id) }}
                                >Follow</button>

                        }</div>
                    </span>
                    <span>
                        <div>name: {u.name}</div>
                        <div>status: {u.status}</div>
                    </span>
                </div>
            )
            }
        </div>

    }
}
export default Users;