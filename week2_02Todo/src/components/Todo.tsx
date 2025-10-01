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
<div className='h-auto bg-white w-100 p-8 rounded-2xl'>
        <header className='text-2xl font-bold text-center mb-6 mt-4'>TODO LIST</header>
        <TodoForm input={input} setInput={setInput} handleSubmit={handleSubmit}/>
        <div className='flex justify-between pd-5 mt-5'>
          <TodoList title='할 일' todos={context.todos} onclick={context.completeTodo} buttonColor='#0d7729' buttonText='완료'/>
          <TodoList title='완료' todos={context.doneTodos} onclick={context.deleteTodo} buttonColor='#d40f0f' buttonText='삭제'/>
        </div>
      </div>
  )
}

export default Todo
