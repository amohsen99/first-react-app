import './Counter.css';
import { useState } from 'react';

function Counter() {
  // State to store the current count
  const [count, setCount] = useState(0);

  // State to store the maximum count limit
  const [limit, setLimit] = useState(Infinity); // default to no limit

  // This function handles changing the limit
  const handleLimitChange = (e) => {
    const value = e.target.value;

    // If the user selects "Infinity", convert it to the actual Infinity value
    setLimit(value === 'Infinity' ? Infinity : parseInt(value));
    setCount(0); // Reset the counter whenever limit changes
  };

  // Function to increment the count, but only if it's below the limit
  const increment = () => {
    if (count < limit) {
      setCount(prevCount => prevCount + 1);
    }
  };

  // Function to decrement the count
  const decrement = () => {
    setCount(prevCount => (prevCount > 0 ? prevCount - 1 : 0)); // prevent negative values
  };

  // Function to reset the counter
  const reset = () => setCount(0);

  return (
    <div className="counter-container">
      <h1 className="counter-title">Muslim Counter</h1>

      {/* Dropdown to select counting limit */}
      <label htmlFor="limit-select" className="limit-label">
        Select Count Limit:
      </label>
      <select id="limit-select" onChange={handleLimitChange} className="limit-select">
        <option value="30">30</option>
        <option value="100">100</option>
        <option value="Infinity">∞ (No Limit)</option>
      </select>

      {/* Display the current count */}
      <h2 className="counter-display">{count}</h2>

      {/* Buttons to control the counter */}
      <div className="button-group">
        <button className="counter-button increment" onClick={increment}>
          +
        </button>
        <button className="counter-button decrement" onClick={decrement}>
          -
        </button>
        <button className="counter-button reset" onClick={reset}>
          Reset
        </button>
      </div>
    </div>
  );
}

export default Counter;
  