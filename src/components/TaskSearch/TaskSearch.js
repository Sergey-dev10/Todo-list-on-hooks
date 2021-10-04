import React, { useState } from 'react';
import { InputSearch } from './Styled/InputSearch';

export const TaskSearch = ({ handleSearch }) => {
  const [InputValue, setInputValue] = useState('');
  const onHandleSearch = (event) => {
    const value = event.target.value.trim();
    handleSearch(value);
    setInputValue(value);
  };
  return (
    <InputSearch type="text" placeholder="type to search" onChange={onHandleSearch} />
  );
};
