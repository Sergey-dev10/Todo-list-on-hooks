import React from 'react';
import { nanoid } from 'nanoid';
import { TaskListWrapper } from './Styled/TaskListWrapper';
import { Title } from '../Title/Title';
import { TaskAddition } from '../TaskAddition/TaskAddition';
import { TaskSearch } from '../TaskSearch/TaskSearch';
import { Task } from '../Task/Task';
import { TaskFilter } from '../TaskFilter/TaskFilter';
import { SearchFilterWrapper } from './Styled/SearchFilterWrapper';

export const TasksLists = ({
  tasks,
  onHandleAddTask,
  onHandleRemoveTask,
  onHandleComplition,
  onHandleSearch,
  filterText,
  onHandleFilterAction,
  fileterAction,
}) => {
  let handledTasks = tasks;
  if (fileterAction === 'All') {
    handledTasks = tasks;
  } else if (fileterAction === 'Active') {
    handledTasks = tasks.filter((task) => task.complited === false);
  } else if (fileterAction === 'Done') {
    handledTasks = tasks.filter((task) => task.complited === true);
  }
  if (filterText) {
    handledTasks = tasks.filter((task) => task.text.indexOf(filterText, 0) !== -1);
  }
  return (
    <TaskListWrapper>
      <Title />
      <TaskAddition handleAddTask={onHandleAddTask} />
      {
              handledTasks.map((task) => {
                const Id = nanoid();
                return (
                  <Task
                    handleRemoveTask={onHandleRemoveTask}
                    handleComplition={onHandleComplition}
                    key={Id}
                    text={task.text}
                    complited={task.complited}
                    id={task.id}
                  />
                );
              })
          }
      <SearchFilterWrapper>
        <TaskSearch handleSearch={onHandleSearch} />
        <TaskFilter handleFilterAction={onHandleFilterAction} />
      </SearchFilterWrapper>
    </TaskListWrapper>
  );
};
