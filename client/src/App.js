import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

function App() {

  const [apiResponse, setApiResponse] = useState("")

  const callAPI = () => {
    fetch("http://localhost:9000/testAPI")
      .then(res => res.text())
      .then(res => setApiResponse({ apiResponse: res }));
  }

  useEffect(() => {
    callAPI()
  })

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {apiResponse}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
