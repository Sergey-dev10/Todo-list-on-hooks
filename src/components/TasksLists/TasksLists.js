import React from 'react';
import { nanoid } from 'nanoid';
import { TaskListWrapper } from './Styled/TaskListWrapper';
import { Title } from '../Title/Title';
import { TaskAddition } from '../TaskAddition/TaskAddition';
import { TaskSearch } from '../TaskSearch/TaskSearch';

export const TasksLists = ({
  tasks, filterText, onHandleAddTask, onHandleSearch,
}) => (
  <TaskListWrapper>
    <Title />
    <TaskAddition handleAddTask={onHandleAddTask} />
    <TaskSearch handleSearch={onHandleSearch} />
  </TaskListWrapper>
);
