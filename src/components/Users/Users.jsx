import React from 'react';
import classes from './Users.module.css';
import * as axios from 'axios';
import userAvatar from '../../assets/images/ava.png'


class Users extends React.Component {

    constructor(props) {
        super(props);
        axios.get('https://jsonplaceholder.typicode.com/users').then(response => {
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
                        <div>{/*
                        {u.followed
                            ? <button onClick={() => { props.unfollow(u.id) }}>Unfollow</button>
                            : <button onClick={() => { props.follow(u.id) }}
                            >Follow</button>}
                    */}</div>
                    </span>
                    <span>
                        <div>name: {u.name}</div>
                        <div>email: {u.email}</div>
                    </span>
                    <span>
                        <div>city: {u.address.city}</div>
                        <div>street: {u.address.street}</div>
                    </span>
                </div>
            )
            } 
        </div>
    
    }
}
export default Users;