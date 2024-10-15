// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>Abhishek</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
// //           href="https://reactjs.org"
// //           target="_blank"
// //           rel="noopener noreferrer"
// //         >
// //           Learn React by Abhishek
// //         </a>
// //       </header>
// //     </div>
// //   );
// // }

// // export default App;
// import React, { useState } from 'react';
// import './App.css';

// function App() {
//   const [input, setInput] = useState("");
//   const [result, setResult] = useState("");

//   const handleClick = (value) => {
//     setInput(input + value);
//   };

//   const clearInput = () => {
//     setInput("");
//     setResult("");
//   };

//   const calculate = () => {
//     try {
//       setResult(eval(input));  // Note: eval() can be risky in real apps.
//     } catch (error) {
//       setResult("Error");
//     }
//   };

//   return (
//     <div className="App">
//       <div className="calculator">
//         <input type="text" value={input} placeholder="0" readOnly />
//         <div className="result">= {result}</div>
//         <div className="buttons">
//           <button onClick={clearInput}>C</button>
//           <button onClick={() => handleClick("/")}>/</button>
//           <button onClick={() => handleClick("*")}>*</button>
//           <button onClick={() => handleClick("-")}>-</button>
//           <button onClick={() => handleClick("7")}>7</button>
//           <button onClick={() => handleClick("8")}>8</button>
//           <button onClick={() => handleClick("9")}>9</button>
//           <button onClick={() => handleClick("+")}>+</button>
//           <button onClick={() => handleClick("4")}>4</button>
//           <button onClick={() => handleClick("5")}>5</button>
//           <button onClick={() => handleClick("6")}>6</button>
//           <button onClick={calculate}>=</button>
//           <button onClick={() => handleClick("1")}>1</button>
//           <button onClick={() => handleClick("2")}>2</button>
//           <button onClick={() => handleClick("3")}>3</button>
//           <button onClick={() => handleClick("0")}>0</button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;
// import React from "react";
// import Card from "./Card";

// function App() {
//   return (
//     <div className="App">
//       <Card
//         title="Card Title"
//         description="This is a description of the card. It provides more details about the content of the card."
//         imageUrl="https://via.placeholder.com/300"
//       />
//       {/* You can add more cards here */}
//     </div>
//   );
// }

// export default App;
// import React from 'react';
// import './App.css';
// import ToggleList from './ToggleList'; // Import the ToggleList component

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <h1>React Toggle List Example</h1>
//         <ToggleList /> {/* Render the ToggleList component */}
//       </header>
//     </div>
//   );
// }

// export default App;
// import React, { useState } from 'react';
// import './App.css';
// import LogComponent from './LogComponent'; // Import the LogComponent

// function App() {
//   const [propValue, setPropValue] = useState(0);

//   return (
//     <div className="App">
//       <header className="App-header">
//         <h1>React useEffect with Dependency Example</h1>

//         {/* Button to change the prop passed to LogComponent */}
//         <button
//           onClick={() => setPropValue(propValue + 1)}
//           style={{ marginBottom: '20px', padding: '10px' }}
//         >
//           Update watchProp (Current value: {propValue})
//         </button>

//         {/* Pass the propValue as watchProp to LogComponent */}
//         <LogComponent watchProp={propValue} />
//       </header>
//     </div>
//   );
// }

// export default App;
// import React, { useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';

// function App() {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     password: ''
//   });
//   const [errors, setErrors] = useState({});

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const validate = () => {
//     const newErrors = {};
//     if (!formData.name) newErrors.name = 'Name is required';
//     if (!formData.email) {
//       newErrors.email = 'Email is required';
//     } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
//       newErrors.email = 'Email is invalid';
//     }
//     if (!formData.password || formData.password.length < 6) {
//       newErrors.password = 'Password must be at least 6 characters';
//     }
//     return newErrors;
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const validationErrors = validate();
//     if (Object.keys(validationErrors).length === 0) {
//       alert('Form submitted successfully');
//     } else {
//       setErrors(validationErrors);
//     }
//   };

//   return (
//     <div className="container mt-5">
//       <h2>Bootstrap Form with Validation</h2>
//       <form onSubmit={handleSubmit}>
//         <div className="mb-3">
//           <label className="form-label">Name</label>
//           <input
//             type="text"
//             className={`form-control ${errors.name ? 'is-invalid' : ''}`}
//             name="name"
//             value={formData.name}
//             onChange={handleChange}
//           />
//           {errors.name && <div className="invalid-feedback">{errors.name}</div>}
//         </div>

//         <div className="mb-3">
//           <label className="form-label">Email</label>
//           <input
//             type="email"
//             className={`form-control ${errors.email ? 'is-invalid' : ''}`}
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//           />
//           {errors.email && <div className="invalid-feedback">{errors.email}</div>}
//         </div>

//         <div className="mb-3">
//           <label className="form-label">Password</label>
//           <input
//             type="password"
//             className={`form-control ${errors.password ? 'is-invalid' : ''}`}
//             name="password"
//             value={formData.password}
//             onChange={handleChange}
//           />
//           {errors.password && <div className="invalid-feedback">{errors.password}</div>}
//         </div>

//         <button type="submit" className="btn btn-primary">Submit</button>
//       </form>
//     </div>
//   );
// }

// export default App;
import React, { useState, useEffect } from 'react';

function App() {
  // Declare a state variable 'count' and a function 'setCount' to update it
  const [count, setCount] = useState(0);

  // useEffect hook will run when the component mounts and when 'count' changes
  useEffect(() => {
    console.log(`Component mounted or count changed. Current count is ${count}`);

    // Optionally, return a cleanup function to run when the component unmounts
    return () => {
      console.log('Component will unmount');
    };
  }, [count]); // Dependency array, runs the effect only when 'count' changes

  return (
    <div className="container mt-5 text-center">
      <h1>React Counter with Hooks</h1>
      <p>Current count: {count}</p>
      <button className="btn btn-primary" onClick={() => setCount(count + 1)}>
        Increment
      </button>
      <button className="btn btn-danger ms-3" onClick={() => setCount(count - 1)}>
        Decrement
      </button>
      <button className="btn btn-secondary ms-3" onClick={() => setCount(0)}>
        Reset
      </button>
    </div>
  );
}

export default App;









