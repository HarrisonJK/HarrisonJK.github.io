import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { About } from "./components/About";
import { Portfolio } from "./components/Portfolio";
import { Resume } from "./components/Resume";
import { Contact } from "./components/Contact";
import { Link } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/Portfolio" element={<Portfolio />} />
        <Route path="/Resume" element={<Resume />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </div>
    // <div className="App">
    //   <div>
    //       <img src={viteLogo} className="logo" alt="Vite logo" />
    //     </a>
    //     <a href="https://reactjs.org" target="_blank">
    //       <img src={reactLogo} className="logo react" alt="React logo" />
    //     </a>
    //   </div>
    //   <h1>Vite + React</h1>
    //   <div className="card">
    //     <button onClick={() => setCount((count) => count + 1)}>
    //       count is {count}
    //     </button>
    //     <p>
    //       Edit <code>src/App.jsx</code> and save to test HMR
    //     </p>
    //   </div>
    //   <p className="read-the-docs">
    //     Click on the Vite and React logos to learn more
    //   </p>
    // </div>
  );
}

export default App;
