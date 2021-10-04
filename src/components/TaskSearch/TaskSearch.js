import React, { useState } from 'react';
import { TaskSearchWrapper } from './Styled/TaskSearchWrapper';
import { InputSearch } from './Styled/InputSearch';

export const TaskSearch = ({ handleSearch }) => {
  const [InputValue, setInputValue] = useState('');
  const onHandleSearch = (event) => {
    const value = event.target.value.trim();
    handleSearch(value);
    setInputValue(value);
  };
  return (
    <TaskSearchWrapper>
      <InputSearch type="text" placeholder="type to search" onChange={onHandleSearch} />
    </TaskSearchWrapper>
  );
};
