import React from 'react';

function Lista({ username, fullName, age }) {
    return (
        <div className='lista-container'>
            <ul>
                <li>UserName: {username}</li>
                <li>fullName: {fullName}</li>
                <li>Age: {age}</li>
            </ul>
        </div>
    )
}

export default Lista;
