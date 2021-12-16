import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

interface State {
  people: {
    name: string
    age: number
    url: string
    // The ? mark makes it optional
    notes?: string
  }
}

function App() {

  const [people, setPeople] = useState<State["people"]>([])

  people.map(person => {
    person.age
  })

  return (
    <div className="App">
      <h1>Haallo People</h1>
    </div>
  );
}

export default App;
