import React, { useState } from 'react';

const ToggleList = () => {
  // useState to manage the visibility of the list
  const [isListVisible, setIsListVisible] = useState(true);

  // Function to toggle the visibility of the list
  const toggleListVisibility = () => {
    setIsListVisible(!isListVisible); // Toggle the state between true and false
  };

  // Example list of items
  const items = ['Item 1', 'Item 2', 'Item 3', 'Item 4'];

  return (
    <div style={styles.container}>
      <h2>Item List</h2>
      
      {/* Button to toggle list visibility */}
      <button style={styles.button} onClick={toggleListVisibility}>
        {isListVisible ? 'Hide List' : 'Show List'}
      </button>

      {/* Conditional rendering of the list */}
      {isListVisible && (
        <ul style={styles.list}>
          {items.map((item, index) => (
            <li key={index} style={styles.listItem}>
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

// Inline styles for simplicity
const styles = {
  container: {
    textAlign: 'center',
    marginTop: '50px',
  },
  button: {
    padding: '10px 20px',
    fontSize: '1rem',
    cursor: 'pointer',
    margin: '10px 0',
  },
  list: {
    listStyleType: 'none',
    padding: 0,
    margin: '20px 0',
  },
  listItem: {
    fontSize: '1.2rem',
    padding: '5px 0',
  },
};

export default ToggleList;
