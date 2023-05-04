import { useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { About } from "./components/About";
import { Portfolio } from "./components/Portfolio";
import { Resume } from "./components/Resume";
import { Contact } from "./components/Contact";
import { Waves } from "./components/Waves";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Sun } from "./components/Sun";

function App() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <Navbar />
      <Header />
      <Sun />
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/Portfolio" element={<Portfolio />} />
        <Route path="/Resume" element={<Resume />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
      <Waves />
      <Footer />
    </div>
  );
}

export default App;
