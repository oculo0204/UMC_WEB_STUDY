import React, { useContext, useState, type FormEvent } from 'react'
import TodoForm from './TodoForm';
import type { TTodo } from '../types/todo';
import TodoList from './TodoList';
import { TodoContext, useTodo } from '../context/TodoContext';

function Todo() {
  const [input, setInput] = useState<string>('');
  const context = useTodo();
  //input받고 todos에 추가하기
  const handleSubmit = (e : FormEvent<HTMLFormElement>): void => {
    e.preventDefault(); //submit시 새로고침 막기
    const text = input.trim();
    console.log('됨');
    if(text){
        context?.addTodo(text);
      setInput(''); //입력창의 input초기화
    }
  }
  return (
<div className='todo-wrap'>
        <header>TODO LIST</header>
        <TodoForm input={input} setInput={setInput} handleSubmit={handleSubmit}/>
        <div className='show-wrap'>
          <TodoList title='할 일' todos={context.todos} onclick={context.completeTodo}/>
          <TodoList title='완료' todos={context.doneTodos} onclick={context.deleteTodo}/>
        </div>
      </div>
  )
}

export default Todo
