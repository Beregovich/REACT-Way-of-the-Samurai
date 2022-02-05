import React, { useState } from 'react';

function ProfileStatus(props) {
    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status)


    let activateEditMode = () => {
        setEditMode(true)
        props.updateUserStatus(status)
    }
    let deactivateEditMode = () => {
        setEditMode(false)
        props.updateUserStatus(status)
    }

    let updateStatus = (e) => {
        setStatus(e.currentTarget.value)
    }
    return (
        <div>
            {!editMode ? <div>
                <span onDoubleClick={activateEditMode}>{props.status}</span>
            </div>
                : <div>
                    <input onChange={updateStatus} autoFocus={true} defaultValue={props.status} onBlur={deactivateEditMode} />
                </div>}
        </div>)
}

export default ProfileStatus;