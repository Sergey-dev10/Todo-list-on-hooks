import React from 'react';
import { TaskWrapper } from './Styled/TaskWrapper';
import { TextWrapper } from './Styled/TextWrapper';
import { ButtonsWrapper } from './Styled/ButtonsWrapper';
import { ButtonComplite } from './Styled/ButtonComplite';
import { ButtonRemove } from './Styled/ButtonRemove';

export const Task = ({
  text, handleRemoveTask, handleComplition, id, complited,
}) => {
  const onHandleRemove = () => {
    handleRemoveTask(id);
  };
  const onHandleComplition = () => {
    handleComplition(id);
  };

  return (
    <TaskWrapper>
      <TextWrapper complition={complited}>{text}</TextWrapper>
      <ButtonsWrapper>
        <ButtonComplite type="button" onClick={onHandleComplition}>Complite</ButtonComplite>
        <ButtonRemove type="button" onClick={onHandleRemove}>Remove</ButtonRemove>
      </ButtonsWrapper>
    </TaskWrapper>
  );
};
