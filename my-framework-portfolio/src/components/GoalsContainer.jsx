import React, { useState, useEffect } from 'react';
import GoalItem from './GoalItem';

function GoalsContainer() {

  const [goalsArray, setGoalsArray] = useState(() => {
    const savedGoals = localStorage.getItem('userTechGoals');
    return savedGoals ? JSON.parse(savedGoals) : [
      "Master HTML & CSS layouts perfectly",
      "Learn how to use JavaScript for interactivity",
      "Deploy a live portfolio site to the web"
    ];
  });

  const [inputValue, setInputValue] = useState("");


  useEffect(() => {
    localStorage.setItem('userTechGoals', JSON.stringify(goalsArray));
  }, [goalsArray]);

  function handleAddGoal() {
    if (inputValue.trim() !== "") {
      setGoalsArray([...goalsArray, inputValue]);
      setInputValue("");
    }
  }

  return (
    <div style={{ backgroundColor: '#f8fafc', padding: '20px', borderRadius: '8px', marginTop: '25px' }}>
      <h2>My Tech Goals</h2>

      <div style={{ marginBottom: '15px' }}>
        <input 
          type="text" 
          placeholder="Type a new goal here..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          style={{ padding: '8px', width: '250px', marginRight: '10px', borderRadius: '4px', border: '1px solid #ccc' }}
        />
        <button 
          onClick={handleAddGoal}
          style={{ padding: '8px 16px', backgroundColor: '#1e40af', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
        >
          Add Goal
        </button>
      </div>

      <ul style={{ paddingLeft: '20px' }}>
        {goalsArray.map((goal, index) => (
          <GoalItem key={index} text={goal} />
        ))}
      </ul>
    </div>
  );
}

export default GoalsContainer;