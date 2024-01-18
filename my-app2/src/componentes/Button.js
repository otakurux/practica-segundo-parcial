import React from 'react';
import '../styles/Button.css';

function Button({def, text}){
    return(
        <div className='button-container'>
            <button className='button' onClick={def}><span>{text}</span></button>
        </div>
    )
}

export default Button;