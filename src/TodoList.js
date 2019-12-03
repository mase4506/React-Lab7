import React from 'react';

// Todo List item component 
const Todo = props => (
  <ul>{props.items.map((item, index) => <li key={index}>{item}</li>)}</ul>
);

export default Todo;