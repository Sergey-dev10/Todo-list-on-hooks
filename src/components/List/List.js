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
  const handleRemoveTask = (id) => {
    const finalTasks = tasks.filter((task) => task.id !== id);
    setTasks(finalTasks);
  };
  const handleComplition = (id) => {
    const finalTasks = tasks.map((task) => {
      const handledTask = task;
      if (task.id === id) {
        handledTask.complited = !handledTask.complited;
      }
      return handledTask;
    });
    setTasks(finalTasks);
  };
  const handleSearch = (value) => setFilterText(value);

  return (
    <TasksLists
      tasks={tasks}
      filterText={filterText}
      onHandleAddTask={handleAddTask}
      onHandleRemoveTask={handleRemoveTask}
      onHandleComplition={handleComplition}
      onHandleSearch={handleSearch}
    />
  );
};
