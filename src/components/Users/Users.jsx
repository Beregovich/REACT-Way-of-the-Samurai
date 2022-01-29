import React from 'react';
import classes from './Users.module.css';
import * as axios from 'axios';
import userAvatar from '../../assets/images/ava.png'


class Users extends React.Component {

    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
            this.props.setUsers(response)
        }
        )
    }
    render() {
        return <div className={classes.users}>
            <h4>USERS</h4>
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