import { useState} from 'react';
import './App.css';

function App() {
  const [minVal,setMinVal] = useState(0);
  const [maxVal,setMaxVal] =useState(10);
  const [randomNumber,setRandomNumber] =useState();
  
  const giveRandomNum = () => {
    setRandomNumber(Math.floor(Math.random()*(maxVal - minVal + 1) + minVal))
  }
 
  return (
    <div className="App">
      <h1 className='header'>Random Number App</h1>
     <div className='container'>
        <div className='randomNumber'>
         <h3>Random Number : <span>{randomNumber}</span></h3> 
        </div>
        <div className='numContainer'>
          <div>
            <p>Min :</p>
            <input type="number" value={minVal} onChange={e => setMinVal(parseInt (e.target.value))} />
          </div>
          <div>
            <p>Max :</p>
            <input type="number" value={maxVal} onChange={e => setMaxVal(parseInt(e.target.value))} />
          </div>
        </div>
        <button onClick={giveRandomNum}>Get Random Number</button>
     </div>
    </div>
  );
}

export default App;
