import React from 'react';
import classes from './Users.module.css';

const Users = (props) => {
    if (props.users.length === 0) {
        props.setUsers([
            {
                id: 1, photoUrl: 'https://cspromogame.ru//storage/upload_images/avatars/916.jpg',
                fullName: "Ivan!", status: 'Hello World!', followed: true,
                location: {
                    country: 'Russis',
                    city: 'Voronezh'
                }
            },
            {
                id: 2, photoUrl: 'https://cspromogame.ru//storage/upload_images/avatars/916.jpg',
                fuulName: "Petr!", status: 'Hello JS!', followed: false,
                location: {
                    country: 'Russis',
                    city: 'Novohopersk'
                }
            },
        ],
        )
    }
    return (
        <div className={classes.users}>
            <h4>USERS</h4>
            {props.users.map(u =>
                <div key={u.id}>
                    <span>
                        <div>
                            <img src={u.photoUrl} />
                        </div>
                        <div>
                            {u.followed ? <button
                                onClick={() => { props.unfollow(u.id) }}>Unfollow</button> :
                                <button onClick={() => { props.follow(u.id) }}
                                >Follow</button>}
                        </div>
                    </span>
                    <span>
                        <div>{u.fullName}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{u.location.country}</div>
                        <div>{u.location.city}</div>
                    </span>
                </div>
            )
            }
        </div>
    )
}
export default Users;