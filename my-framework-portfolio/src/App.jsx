import React from 'react';
import Navbar from './components/Navbar';

function App() {
  return (
    <div>
      <Navbar/>
      <main style={{ padding: '20px' }}>
      <h1>My Tech Goals Portfolio</h1>
      <p>Migrating my codebase into a modular component architecture!</p>
      </main>
    </div>
  );
}

export default App;