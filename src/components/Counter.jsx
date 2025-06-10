import React from 'react';
import { Link } from 'react-router-dom';

const Counter = () => {
  const [count, setCount] = React.useState(0);
  const [lastUpdated, setLastUpdated] = React.useState(new Date());

  React.useEffect(() => {
    // Update the last updated time whenever count changes
    setLastUpdated(new Date());
    document.title = `Count: ${count}`;
  }, [count]);

  return (
    <div style={{ padding: '20px' }}>
      <h1>Counter Page</h1>
      <p>Current count: {count}</p>
      <p>Last updated: {lastUpdated.toLocaleTimeString()}</p>
      <button onClick={() => setCount(c => c + 1)}>Increment</button>
      <button onClick={() => setCount(c => c - 1)}>Decrement</button>
      <button onClick={() => setCount(0)}>Reset</button>
      <div style={{ marginTop: '20px' }}>
        <Link to="/todos">Go to Todo List</Link>
      </div>
    </div>
  );
};

export default Counter; 