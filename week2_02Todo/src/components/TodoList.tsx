import type { JSX } from "react";
import type { TTodo } from "../types/todo";


interface TodoListProps{
    title: string;
    todos: TTodo[];
    onclick: (todo:TTodo)=>void
}


const TodoList = ({title,todos,onclick}:TodoListProps): JSX.Element => { 
  return (
    <section className='ongoing-wrap'>
            <h1>{title}</h1>
            <ul id='todo-list'>
              {todos.map((todo) => (
                <li key={todo.id}>
                  <span>{todo.text}</span>
                  <button onClick={():void=>onclick(todo)}>완료</button>
                </li>
              ))}
            </ul>
    </section>
  )
}

export default TodoList
