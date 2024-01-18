import React from "react";

import '../styles/Button.css';

function Button({ show }) {
  return (
    <div className="button-container">
      <button className="button" onClick={show}>
        <span>Mostrar</span>
      </button>
    </div>
  );
}

export default Button;
