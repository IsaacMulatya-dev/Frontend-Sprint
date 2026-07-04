import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import GoalsContainer from './components/GoalsContainer';
import QuoteBox from './components/QuoteBox';

function App() {
  const [clicked, setClicked] = useState(false);
  
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('appTheme');
    return savedTheme ? savedTheme : 'light';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('appTheme', theme);
  }, [theme]);

  function toggleTheme() {
    setTheme(theme === 'light' ? 'dark' : 'light');
  }

  const appStyles = {
    backgroundColor: theme === 'dark' ? '#0f172a' : '#ffffff',
    color: theme === 'dark' ? '#f1f5f9' : '#0f172a',
    minHeight: '100vh',
    padding: '20px',
    transition: 'background-color 0.3s standard, color 0.3s standard'
  };

  return (
    <div style={appStyles}>

      <Navbar theme={theme} onToggleTheme={toggleTheme} />
      
      <main style={{ marginTop: '20px' }}>
        <main style={{ marginTop: '20px' }}>
  {/* ... existing code ... */}
  <QuoteBox />
  <GoalsContainer theme={theme} />
</main>

        <h1 style={{ color: clicked ? '#dc2626' : (theme === 'dark' ? '#a3e635' : '#1e40af') }}>
          {clicked ? 'You Clicked Me!' : 'Click the button below'}
        </h1>
        
        <p>Migrating my codebase into a modular component architecture!</p>
        
        <button 
          onClick={() => setClicked(true)}
          style={{ 
            padding: '10px 20px', 
            cursor: 'pointer', 
            borderRadius: '4px', 
            marginBottom: '10px',
            backgroundColor: theme === 'dark' ? '#334155' : '#e2e8f0',
            color: theme === 'dark' ? '#ffffff' : '#000000',
            border: 'none'
          }}
        >
          Click Me
        </button>

        <GoalsContainer theme={theme} />
      </main>
    </div>
  );
}

export default App;