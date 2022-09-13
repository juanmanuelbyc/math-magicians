import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Calculator from './pages/Calculator';
import Quote from './pages/Quote';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Math Magicians</h1>
        <nav>
          <Link to="/">Home</Link>
          <hr />
          <Link to="/calculator">Calculator</Link>
          <hr />
          <Link to="/quote">Quote</Link>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="calculator" element={<Calculator />} />
        <Route path="quote" element={<Quote />} />
      </Routes>
    </div>
  );
}

export default App;
