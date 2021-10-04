import React from 'react';
import { nanoid } from 'nanoid';
import { TaskListWrapper } from './Styled/TaskListWrapper';
import { Title } from '../Title/Title';

export const TasksLists = ({
  tasks, filterText,
}) => (
  <TaskListWrapper>
    <Title />
  </TaskListWrapper>
);
