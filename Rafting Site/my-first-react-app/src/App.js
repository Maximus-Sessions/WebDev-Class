import React, { useState } from 'react';
import Home from './components/Home';
import Trips from './components/Trips';

function App() {
  // Active page state
  const [page, setPage] = useState('home');

  return (
    <div className="App">
      {/* Navigation Menu */}
      <nav style={{ padding: '15px', backgroundColor: '#0284c7', color: 'white' }}>
        <button onClick={() => setPage('home')}>Home</button>
        <button onClick={() => setPage('trips')}>Trips</button>
      </nav>

      {/* Dynamic View Swapping */}
      {page === 'home' && <Home />}
      {page === 'trips' && <Trips />}
    </div>
  );
}

export default App;