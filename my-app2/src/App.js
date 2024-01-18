import React, { useState, useRef } from 'react';
import './App.css';
import Button from './componentes/Button';
import Accountant from './componentes/Accountant';

function App() {
  const [sec, setSec] = useState(0);
  const [min, setMin] = useState(0);
  const intervalRef = useRef(null);

  function iniciar() {
    if (!intervalRef.current) {
      intervalRef.current = setInterval(() => {
        setSec((prevSec) => (prevSec + 1) % 60);
        setMin((prevMin) => (sec + 1) % 60 === 0 ? prevMin + 1 : prevMin);
        console.log(sec, min);
      }, 1000);
    }
  }

function stop() {
  clearInterval(intervalRef.current);
  intervalRef.current = null;
}

function reset() {
  clearInterval(intervalRef.current);
  intervalRef.current = null;
  setSec(0);
  setMin(0);
}

return (
  <div className="App">
    <div className='timer-container'>
      <Accountant sec={sec} min={min} />
      <div className='button-container'>
        <Button text="iniciar" def={iniciar} />
        <Button text="stop" def={stop} />
        <Button text="reset" def={reset} />
      </div>
    </div>
  </div>
);
}

export default App;
