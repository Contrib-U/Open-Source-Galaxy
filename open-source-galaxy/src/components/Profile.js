import React from 'react'
import { useAuth0 } from '@auth0/auth0-react';
import './Profile.css';

function Profile() {
    const { user, isAuthenticated, logout} = useAuth0();
    return (
        isAuthenticated && (
            <div className='profile-pic'>
                <img src={user.picture} alt={user.name} onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}/>
            </div>
        )
        
    )
}

export default Profile
