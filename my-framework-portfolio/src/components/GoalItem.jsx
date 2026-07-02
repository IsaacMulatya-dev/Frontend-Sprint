import React from 'react';

function GoalItem(props) {
  return (
    <li style={{ padding: '8px 0', fontSize: '16px' }}>
       {props.text}
    </li>
  );
}

export default GoalItem;