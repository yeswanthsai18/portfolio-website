import React from "react";
import Navbar from "./components/Navbar";
import About from "./components/About";

function App() {
  return (
    <div>
      <Navbar />
      <header className="header">
        <h1>Welcome to My Portfolio</h1>
        <p>A Data Enthusiast's Personal Space</p>
      </header>
      <About />
    </div>
  );
}

export default App;
