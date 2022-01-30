import React from 'react';
import classes from './Users.module.css';
import userAvatar from '../../assets/images/ava.png'



const Users = (props) => {
    let pagesCount = Math.ceil(props.totalCount / props.count)
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    return <div className={classes.users}>
        <h4>Pages: {pagesCount}</h4>
        <div>
            {pages.map(p => {
                return <span className={props.currentPage === p ? classes.selectedPage : classes.pageNumber}
                    onClick={(e) => props.onPageChanged(p)}
                >{p}</span>
            })}
        </div>
        {props.users.map(u =>
            <div key={u.id} className={classes.user}>
                <span>
                    <div>
                        <img src={userAvatar} />
                    </div>
                    <div>{
                        u.followed
                            ? <button onClick={() => { props.unfollow(u.id) }}>Unfollow</button>
                            : <button onClick={() => { props.follow(u.id) }}
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

export default Users;