import React, { useState } from 'react';
import { TaskAdditionWrapper } from './Styled/TaskAdditionWrapper';
import { InputAddField } from './Styled/InputAddField';
import { InputSubmit } from './Styled/InputSubmit';

export const TaskAddition = ({ handleAddTask }) => {
  const [inputValue, setInputValue] = useState('');

  const handleChangeInput = (event) => {
    setInputValue(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    handleAddTask(inputValue);
    setInputValue('');
  };

  return (
    <TaskAdditionWrapper onSubmit={handleSubmit}>
      <InputAddField
        type="text"
        placeholder="What needs to be done"
        value={inputValue}
        onChange={handleChangeInput}
      />
      <InputSubmit type="submit" value="Add task" />
    </TaskAdditionWrapper>
  );
};
