import React, { useState } from 'react';
import { nanoid } from 'nanoid';

export const List = () => {
    const [tasks, setTasks] = useState([{ text: 'Task 1', complited: false, id: 1 },
      { text: 'Task 2', complited: false, id: 2 }]);
    const [filterText, setFilterText] = useState('');
  

  
    return (
      <TasksLists
        tasks={tasks}
        filterText={filterText}
      />
    );
  };