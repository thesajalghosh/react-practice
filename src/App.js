
import './App.css';
import {useState}  from 'react';

function App() {

const [counter, setCounter] = useState(0);

const increase = () =>{
  setCounter(counter+1);
}
  return (
    <div className="App">
      <header className="App-header">
      {counter} <button onClick={increase}>Click Me</button>
        
      </header>
    </div>
  );
}

export default App;
