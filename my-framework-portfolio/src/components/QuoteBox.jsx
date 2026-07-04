import React, { useState, useEffect } from 'react';

function QuoteBox() {
  const [quote, setQuote] = useState("Loading your daily motivation...");
  const [author, setAuthor] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Make a GET request to a public quotes API
    fetch('https://dummyjson.com/quotes/random')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setQuote(data.quote);
        setAuthor(data.author);
        setLoading(false);
      })
      .catch((error) => {
        setQuote("Keep pushing! Consistency beats talent every single time.");
        setAuthor("Dev Proverb");
        setLoading(false);
        console.error("Error fetching data: ", error);
      });
  }, []); // Empty dependency array means this effect runs exactly once when the page loads!

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
      {author && <span style={{ display: 'block', textAlign: 'right', fontWeight: 'bold', fontSize: '14px', marginTop: '5px' }}>- {author}</span>}
    </div>
  );
}

export default QuoteBox;