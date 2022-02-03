import React from 'react';
import classes from './Users.module.css';
import userAvatar from '../../assets/images/ava.png'
import { NavLink } from 'react-router-dom';
import * as axios from 'axios';



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
                                props.toggleFollowingProgress(true, u.id)
                                axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                                    withCredentials: true,
                                    headers: {
                                        "API-KEY": "ac12b3de-980c-4483-be61-c655540ce8b7"
                                    }
                                }).then(response => {
                                    if (response.data.resultCode === 0) {
                                        props.unfollow(u.id)
                                        console.log('unfollowed')
                                    }
                                    props.toggleFollowingProgress(false, u.id)
                                })
                            }}>Unfollow</button>
                            : <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                                props.toggleFollowingProgress(true, u.id)
                                //props.follow(u.id)
                                axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, null, {
                                    withCredentials: true,
                                    headers: {
                                        "API-KEY": "ac12b3de-980c-4483-be61-c655540ce8b7"
                                    }
                                }).then(response => {
                                    if (response.data.resultCode === 0) {
                                        props.follow(u.id)
                                        console.log('followed')
                                    }
                                    props.toggleFollowingProgress(false, u.id)
                                })
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