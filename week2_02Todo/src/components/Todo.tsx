import React, { useState, type FormEvent } from 'react'
import TodoForm from './TodoForm';
import type { TTodo } from '../types/todo';
import TodoList from './TodoList';

function Todo() {
  const [todos,setTodos] = useState<TTodo[]>([
  ]);
  const [doneTodos, setDoneTodos] = useState<TTodo[]>([]);
  const [input, setInput] = useState<string>('');

  //input받고 todos에 추가하기
  const handleSubmit = (e : FormEvent<HTMLFormElement>): void => {
    e.preventDefault(); //submit시 새로고침 막기
    const text = input.trim();
    console.log('됨');
    if(text){
      const newTodo : TTodo ={id: Date.now(), text: text};
      setTodos((prev):TTodo[] => [...prev, newTodo]);
      setInput(''); //입력창의 input초기화
    }
  }
  //완료하기 버튼
  const completeTodo = (todo: TTodo): void =>{
    setTodos((prevTodos): TTodo[]=>prevTodos.filter((t):boolean=> t.id !==todo.id)) //선택한거 하기전에서 삭제
    //filter 안의 콜백 함수가 true를 반환하면 → 그 요소는 남음
    //false를 반환하면 → 그 요소는 제외됨
    setDoneTodos((prevDoneTodos):TTodo[] => [...prevDoneTodos,todo]);
  }
  //삭제하기 버튼
  const deleteTodo = (todo: TTodo): void => {
    setDoneTodos((prevDoneTodos):TTodo[]=>prevDoneTodos.filter((t):boolean=> t.id !==todo.id)); //선택한거 삭제
  }

  return (
<div className='todo-wrap'>
        <header>TODO LIST</header>
        <TodoForm input={input} setInput={setInput} handleSubmit={handleSubmit}/>
        <div className='show-wrap'>
          <TodoList title='할 일' todos={todos} onclick={completeTodo}/>
          <TodoList title='완료' todos={doneTodos} onclick={deleteTodo}/>
        </div>
      </div>
  )
}

export default Todo
