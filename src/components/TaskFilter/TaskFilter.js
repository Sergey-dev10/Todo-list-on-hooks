import React, { useState } from 'react';
import { TaskFilterWrapper } from './Styled/TaskFilterWrapper';
import { ButtonAll } from './Styled/ButtonAll';
import { ButtonActive } from './Styled/ButtonActive';
import { ButtonDone } from './Styled/ButtonDone';

export const TaskFilter = ({ handleFilterAction }) => {
  const onHandleFilterAction = (event) => {
    const value = event.target.textContent;
    handleFilterAction(value);
  };

  return (
    <TaskFilterWrapper>
      <ButtonAll onClick={onHandleFilterAction}>All</ButtonAll>
      <ButtonActive onClick={onHandleFilterAction}>Active</ButtonActive>
      <ButtonDone onClick={onHandleFilterAction}>Done</ButtonDone>
    </TaskFilterWrapper>
  );
};
