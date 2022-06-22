import React from 'react';
import useAPIUserContext from "../../common/hooks/useAPIUserContext";

const Profile = () => {
    const { options } = useAPIUserContext();
    console.log(options);
    return (
        <div>
            <h1 className="header">Profile</h1>
        </div>
    )
}

export default Profile
