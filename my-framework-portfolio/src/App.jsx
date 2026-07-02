import React, { useState } from 'react';
import Navbar from './components/Navbar';
import GoalsContainer from './components/GoalsContainer';

function App() {
  const [clicked, setClicked] = useState(false);

  return (
    <div>
      <Navbar />
      <main style={{ padding: '20px' }}>
        <h1 style={{ color: clicked ? '#dc2626' : '#1e40af' }}>
          {clicked ? 'You Clicked Me!' : 'Click the button below'}
        </h1>
        
        <p>Migrating my codebase into a modular component architecture!</p>
        
        <button 
          onClick={() => setClicked(true)}
          style={{ padding: '10px 20px', cursor: 'pointer', borderRadius: '4px', marginBottom: '10px' }}
        >
          Click Me
        </button>

        <GoalsContainer />

      </main>
    </div>
  );
}

export default App;