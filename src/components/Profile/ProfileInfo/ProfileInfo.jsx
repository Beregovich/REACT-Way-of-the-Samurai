import React from 'react';
import classes from './ProdileInfo.module.css'
import Preloader from '../../common/Preloader/Preloader'
import userAvatar from '../../../assets/images/ava.png'
import ProfileStatus from './ProfileStatus'

function ProdileInfo(props) {

    if (!props.profile) { return <Preloader /> }
    else return (
        <div>
            <div>
                <img src='https://images.unsplash.com/photo-1504194104404-433180773017?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80' />
            </div>
            <div>
                <span><img src={props.profile.photos.large ? props.profile.photos.large : userAvatar} /></span><span><h2>{props.profile.fullName}</h2></span>
            </div>
            <ProfileStatus {...props} />
            <div>
                {props.profile.aboutMe}

            </div>
            <div>
                Job: {props.profile.lookingForAJobDescription}
            </div>
        </div>
    );
}

export default ProdileInfo;
