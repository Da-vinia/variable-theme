import { useState } from 'react'
import './App.css'
import Counter from "./components/Counter";

function App() {

  const [theme, setTheme] = useState('light');

  const toggleTheme = event => {
    setTheme(event.target.value);
  };

  return (
    <div className={"App " + theme}>
      <h1>React - state and events</h1>
      <Counter />

      <select onChange={ toggleTheme }>
        <option value="light">Light mood 🔆 </option>
        <option value="dark">Dark mood 🌙 </option>
      </select>
    </div>
  );
}

export default App;
