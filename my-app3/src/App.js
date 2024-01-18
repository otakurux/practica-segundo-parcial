import React, { useState } from 'react';
import './App.css';
import Titulo from './conponentes/Titulo';
import Button from './conponentes/Button';

function App() {
  const [show, setShow] = useState(true);

  const handleButtonClick = () => {
    setShow(!show);
  };

  return (
    <div className="App">
      <Button show={handleButtonClick} />
      <Titulo title="Programacion Web II, Ejercicio 1, mostrar el titulo" show={show} />
    </div>
  );
}

export default App;
