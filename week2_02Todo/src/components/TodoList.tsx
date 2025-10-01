import type { TTodo } from "../types/todo";


interface TodoListProps{
    title: string;
    todos: TTodo[];
    onclick: (todo:TTodo)=>void;
    buttonColor: string;
    buttonText: string;
}


const TodoList = ({title,todos,onclick, buttonColor, buttonText}:TodoListProps) => { 
  return (
    <section className='w-1/2 flex flex-col items-center'>
            <h1 className="font-bold flex justify-center text-xl mb-4">{title}</h1>
            <ul id='todo-list' className="justify-between">
              {todos.map((todo) => (
                <li key={todo.id}  className="h-auto w-40 px-2 mb-2 py-2 flex bg-[#f3f3f3] justify-between items-center rounded"
                    style={{boxShadow: "0 2px 2px rgba(0,0,0,0.2)"}}
                >
                  <span className="text-xs flex justify-center items-center font-bold max-w-25">{todo.text}</span>
                  <button onClick={():void=>onclick(todo)}
                    style={{ backgroundColor: buttonColor }}
                    className="w-10 h-6 text-white text-xs pd-0 rounded flex items-center justify-center"
                    >{buttonText}</button>
                </li>
              ))}
            </ul>
    </section>
  )
}

export default TodoList
