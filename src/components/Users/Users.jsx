import React from 'react';
import classes from './Users.module.css';
import userAvatar from '../../assets/images/ava.png'
import { NavLink } from 'react-router-dom';



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
                        <NavLink to={`/profile/${u.id}`}>
                            <img src={userAvatar} />
                        </NavLink>
                    </div>
                    <div>{
                        u.followed
                            ? <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                                props.unfollow(u.id)
                            }}>Unfollow</button>
                            : <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                                props.follow(u.id)
                            }}>Follow</button>

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