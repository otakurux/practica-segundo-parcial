import React from 'react';

import '../styles/Titulo.css';

const Titulo = ({ title, show }) => {
    function def(show) {
        return show ? <h1 className='titulo'>{title}</h1> : null;
    }

    return (
        <div className='titulo-container'>{def(show)}</div>
    )
}

export default Titulo;
