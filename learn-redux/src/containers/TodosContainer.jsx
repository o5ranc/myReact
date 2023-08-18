import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Todos from '../components/Todos';
import { addTodo, toggleTodo } from '../modules/todos';
import { useCallback } from 'react';

const TodosContainer = () => {
  const todos = useSelector(state => state.todos);
  const dispatch = useDispatch();

  function onCreate(text) { 
    dispatch(addTodo(text));
  } 
  
  const onToggle = useCallback(id => 
    dispatch(toggleTodo(id)), [dispatch]);

  return (
    <Todos todos={todos} onCreate={onCreate} onToggle={onToggle}></Todos>
  )
}

export default TodosContainer