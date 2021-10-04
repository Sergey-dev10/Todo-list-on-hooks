import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import { TasksLists } from '../TasksLists/TasksLists';

export const List = () => {
  const [tasks, setTasks] = useState([{ text: 'Task 1', complited: false, id: 1 },
    { text: 'Task 2', complited: false, id: 2 }]);
  const [filterText, setFilterText] = useState('');

  const handleAddTask = (value) => {
    setTasks((oldTasks) => [...oldTasks, { text: value, complited: false, id: nanoid() }]);
  };

  return (
    <TasksLists
      tasks={tasks}
      filterText={filterText}
      onHandleAddTask={handleAddTask}
    />
  );
};
