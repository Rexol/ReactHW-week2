import './App.css';
import {useState} from 'react';

function App() {
  const [age, setAge] = useState(1);
  const [uLimit, setULimit] = useState(0);
  const [dLimit, setDLimit] = useState(0);
  
  function calculateLimits() {
    setULimit((220-age)*0.85);
    setDLimit((220-age)*0.65);
  }
  function handleSubmit(e) {
    e.preventDefault();
    if (age <= 0) {
      setULimit('Height cant be negative');
      return;
    }
    calculateLimits();
  }

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <div>
          <label>Age</label>
          <input type="number" min={1} value={age} onChange={e => setAge(e.target.value)}/>
        </div>
        <button>Calculate</button>
      </form>
      <div>
        <p>Heart rate limits for your age is {dLimit} - {uLimit}</p>
      </div>
    </div>
  );
}

export default App;
