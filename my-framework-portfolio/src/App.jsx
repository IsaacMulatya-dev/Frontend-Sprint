import React, { useState } from 'react';
import Navbar from './components/Navbar';
import GoalItem from './components/GoalItem';

<ul style={{ marginTop: '20px', paddingLeft: '20px' }}>
  <GoalItem text="Master HTML & CSS layouts perfectly" />
  <GoalItem text="Learn how to use JavaScript for interactivity" />
  <GoalItem text="Deploy a live portfolio site to the web" />
</ul>

function App() {
  const [clicked, setClicked] = useState(false);

  function handleButtonClick() {
    setClicked(true);
  }

  return (
    <div>
      <Navbar />
      <main style={{ padding: '20px' }}>
        <h1 style={{ color: clicked ? '#dc2626' : '#1e40af' }}>
          {clicked ? 'You Clicked Me!' : 'Click the button below'}
        </h1>
        
        <p>Migrating my codebase into a modular component architecture!</p>
        
        <button 
          onClick={handleButtonClick}
          style={{ padding: '10px 20px', cursor: 'pointer', borderRadius: '4px' }}
        >
          Click Me
        </button>
      </main>
    </div>
  );
}

export default App;