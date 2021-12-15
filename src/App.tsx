import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const [people, setPeople] useState([
    {
      name: "Henrietha Njoku",
      url: "henrietha.com",
      age: "16",
      note: "Allergic to failure"
    },
    {
      name: "Timothy Fabelurin",
      url: "henrietha.com",
      age: "16",
    }
  ])

  people.map(person => {
    person.name 
  })

  return (
    <div className="App">
      <h1>Haallo People</h1>
    </div>
  );
}

export default App;
