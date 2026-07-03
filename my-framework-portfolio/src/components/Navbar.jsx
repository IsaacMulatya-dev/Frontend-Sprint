import React from 'react';

function Navbar(props) {
  const navStyles = {
    backgroundColor: props.theme === 'dark' ? '#a3e635' : '#1e40af', 
    color: props.theme === 'dark' ? '#000000' : '#ffffff',
    padding: '15px', 
    borderRadius: '6px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    transition: 'background-color 0.3s, color 0.3s'
  };

  return (
    <nav style={navStyles}>
      <strong>Frontend</strong>
      
      <button 
        onClick={props.onToggleTheme}
        style={{
          padding: '4px 12px',
          cursor: 'pointer',
          borderRadius: '4px',
          border: '1px solid currentColor',
          backgroundColor: 'transparent',
          color: 'inherit',
          fontWeight: 'bold'
        }}
      >
        {props.theme === 'light' ? 'Dark Mode' : 'Light Mode'}
      </button>
    </nav>
  );
}

export default Navbar;