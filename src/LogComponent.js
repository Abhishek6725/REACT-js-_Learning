import React, { useState, useEffect } from 'react';

const LogComponent = ({ watchProp }) => {
  // useState hook to manage a state value
  const [count, setCount] = useState(0);

  // useEffect hook to log message when the component re-renders based on state or prop changes
  useEffect(() => {
    console.log('Component re-rendered due to count or watchProp change.');
  }, [count, watchProp]); // Dependency array contains count and watchProp

  return (
    <div style={styles.container}>
      <h2>React useEffect Example</h2>

      {/* Display the current count value */}
      <p>Count: {count}</p>

      {/* Button to update the count state */}
      <button style={styles.button} onClick={() => setCount(count + 1)}>
        Increment Count
      </button>

      {/* Display the prop value being watched */}
      <p>Watch Prop: {watchProp}</p>
    </div>
  );
};

// Inline styles for simplicity
const styles = {
  container: {
    textAlign: 'center',
    marginTop: '50px',
    fontFamily: 'Arial, sans-serif',
  },
  button: {
    padding: '10px 20px',
    fontSize: '1rem',
    cursor: 'pointer',
    margin: '10px 0',
  },
};

export default LogComponent;
