import React from "react";
import Header from "./Header";
import Hero from "./Hero";
import About from "./About";
import Skills from "./Skills";
import Contact from "./Contact";
import Footer from "./Footer";

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
      <Footer />
    </div>
  );
}

export default App;
