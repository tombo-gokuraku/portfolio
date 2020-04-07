import React from "react";
import Header from "./Header";
import Hero from "./Hero";
import About from "./About";
import Skills from "./Skills";
import Contact from "./Contact";

import "./App.scss";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Contact />
      </main>
      <footer className="footer">©2020 TOMBO GOKURAKU PORTFOLIO.</footer>
    </div>
  );
}

export default App;
