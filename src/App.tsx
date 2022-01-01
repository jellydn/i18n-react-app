import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Hello } from "./Hello";
import TypesafeI18n from "./i18n/i18n-react";
import { LanguageSelection } from "./LanguageSelection";

function App() {
  const [count, setCount] = useState(0);

  return (
    <TypesafeI18n initialLocale="en">
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <div>
            <LanguageSelection />
            <Hello />
          </div>
          <p>
            <button onClick={() => setCount((count) => count + 1)}>
              count is: {count}
            </button>
          </p>
          <p>
            Edit <code>App.tsx</code> and save to test HMR updates.
          </p>
          <p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
            {" | "}
            <a
              className="App-link"
              href="https://vitejs.dev/guide/features.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              Vite Docs
            </a>
          </p>
        </header>
      </div>
    </TypesafeI18n>
  );
}

export default App;
