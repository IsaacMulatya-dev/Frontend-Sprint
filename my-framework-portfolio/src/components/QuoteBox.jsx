import React, { useState, useEffect } from 'react';

function QuoteBox() {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {

    const fetchQuote = async () => {
      try {
        setLoading(true);
        setError(false);
        
        const response = await fetch('https://dummyjson.com/quotes/random');
      
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        
        const data = await response.json();
        setQuote(data.quote);
        setAuthor(data.author);
      } catch (err) {
        console.error("Network or API compilation error:", err);
        setError(true);
      } finally {

        setLoading(false);
      }
    };

    fetchQuote();
  }, []);

  if (loading) {
    return (
      <div style={{ padding: '15px', fontStyle: 'italic', color: '#6b7280' }}>
        🔄 Fetching server data packets...
      </div>
    );
  }


  if (error) {
    return (
      <div style={{
        backgroundColor: 'rgba(239, 68, 68, 0.05)',
        borderLeft: '4px solid #ef4444',
        padding: '15px',
        borderRadius: '4px',
        marginTop: '20px',
        color: '#991b1b'
      }}>
        <p style={{ margin: 0, fontWeight: 'bold' }}>⚠️ Systems Alert</p>
        <p style={{ margin: 0, fontSize: '14px' }}>Failed to securely resolve external API stream. Standing by with local cache defaults.</p>
      </div>
    );
  }

  return (
    <div style={{
      backgroundColor: 'rgba(30, 64, 175, 0.05)',
      borderLeft: '4px solid #1e40af',
      padding: '15px',
      borderRadius: '4px',
      marginTop: '20px',
      fontStyle: 'italic'
    }}>
      <p style={{ margin: 0, fontSize: '16px' }}>"{quote}"</p>
      {author && (
        <span style={{ 
          display: 'block', 
          textAlign: 'right', 
          fontWeight: 'bold', 
          fontSize: '14px', 
          marginTop: '5px' 
        }}>- {author}</span>
      )}
    </div>
  );
}

export default QuoteBox;