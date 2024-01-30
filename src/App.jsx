import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

import Home from './pages/Home';
import AboutMe from './pages/AboutMe';
// ... import other pages

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutMe />} />
        {/* ... other routes */}
      </Routes>
    </Router>
  );
}

export default App;
