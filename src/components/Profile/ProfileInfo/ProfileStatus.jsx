import React, { useState } from 'react';

function ProfileStatus(props) {
    let [editMode, setEditMode] = useState(false);
    let toggleEditMode = () => {
        setEditMode(!editMode)
    }
    return <div>
        {editMode
            ? <div>
                <span onDoubleClick={toggleEditMode}>{props.profile.userId}</span>
            </div>
            : <div>
                <input autoFocus={true} value={props.profile.userId} onBlur={toggleEditMode} />
            </div>
        }

    </div>;
}

export default ProfileStatus;
