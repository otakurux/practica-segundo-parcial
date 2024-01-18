import React, { useState } from 'react';

import Input from './Input';
import Lista from './Lista';

function Formulario() {
  const [username, setUsername] = useState('');
  const [fullName, setFullName] = useState('');
  const [age, setAge] = useState('');
  const [lista, setLista] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const nuevoItem = [
      <Lista
        username={username}
        fullName={fullName}
        age={age}
      />
    ];
    setLista([...lista, nuevoItem]);
    setUsername('');
    setFullName('');
    setAge('');
  };

  function generarLista() {
    return (
      <ol>
        {lista.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ol>
    );
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Input
          id="username"
          label="Username:"
          type="text"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />
        <Input
          id="fullName"
          label="FullName:"
          type="text"
          value={fullName}
          onChange={(event) => setFullName(event.target.value)}
        />
        <Input
          id="age"
          label="Age:"
          type="number"
          value={age}
          onChange={(event) => setAge(event.target.value)}
        />
        <button type="submit">Agregar</button>
      </form>
      {generarLista()}
    </div>
  );
}

export default Formulario;
