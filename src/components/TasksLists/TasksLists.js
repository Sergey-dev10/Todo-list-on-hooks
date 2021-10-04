import React from 'react';
import { nanoid } from 'nanoid';
import { TaskListWrapper } from './Styled/TaskListWrapper';
import { Title } from '../Title/Title';
import { TaskAddition } from '../TaskAddition/TaskAddition';

export const TasksLists = ({
  tasks, filterText, onHandleAddTask,
}) => (
  <TaskListWrapper>
    <Title />
    <TaskAddition handleAddTask={onHandleAddTask} />
  </TaskListWrapper>
);
