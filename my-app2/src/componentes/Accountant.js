import React from 'react';
import '../styles/Accountant.css';

function Accountant({ sec, min }) {
    return (
        <div className='accountant-container'>
            <h1 className='accountant-text'>
                sec {sec} min {min}
            </h1>
        </div>
    )
}

export default Accountant;