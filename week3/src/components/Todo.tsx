import React, { useState, type FormEvent } from 'react'
import type { TTodo } from '../types/todo';

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
        <form id='todo-form' onSubmit={handleSubmit}>
          <input id="todo-input" type="text" placeholder='할 일 입력'
            value={input} onChange={(e):void => {setInput(e.target.value)}}
            //e는 이벤트 객체 (React.ChangeEvent<HTMLInputElement>).
            //e.target.value는 사용자가 입력한 현재 문자열 값.
          />
          <button type="submit">할 일 추가</button>
        </form>
        <div className='show-wrap'>
          <section className='ongoing-wrap'>
            <h1>할 일</h1>
            <ul id='todo-list'>
              {todos.map((todo) => (
                <li key={todo.id}>
                  <span>{todo.text}</span>
                  <button onClick={():void=>completeTodo(todo)}>완료</button>
                </li>
              ))}
            </ul>
          </section>
          <section className='complete-wrap'>
            <h1>완료</h1>
            <ul id='complete-list'>
              {doneTodos.map((todo) => (
                <li key={todo.id}>
                  <span>{todo.text}</span>
                  <button onClick={():void=>deleteTodo(todo)}>삭제</button>
                </li>
              ))}  
            </ul>  
          </section>
        </div>
      </div>
  )
}

export default Todo
