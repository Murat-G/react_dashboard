import React from 'react';
import {userElStyle} from './UserEl.style';

const User = ({user}) => {
    return (
        <div style={userElStyle.container}>
            <div style={userElStyle.image}>
                <img src="https://pngimg.com/uploads/cursor/cursor_PNG4.png" alt='2' width="90%"/>
            </div>
            <div style={userElStyle.message}>
                <p style={userElStyle.messageText}> {user.message} </p>
            </div>
        </div>
    )
}

export default User;



