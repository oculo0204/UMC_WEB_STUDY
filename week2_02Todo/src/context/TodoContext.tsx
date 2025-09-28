import { Children, createContext, useContext, useState, type PropsWithChildren } from "react";
import type { TTodo } from "../types/todo";

interface ITodoContext {
    todos: TTodo[],
    doneTodos: TTodo[],
    addTodo: (text:string)=> void,
    completeTodo: (todo: TTodo) => void,
    deleteTodo:(todo:TTodo)=> void
}

export const TodoContext = createContext<ITodoContext | undefined>(undefined);

export const TodoProvider = ({children}:PropsWithChildren)  =>{
      const [todos,setTodos] = useState<TTodo[]>([
      ]);
      const [doneTodos, setDoneTodos] = useState<TTodo[]>([]);
      const addTodo =(text:string): void => {
        const newTodo : TTodo ={id: Date.now(), text: text};
        setTodos((prev):TTodo[] => [...prev, newTodo]);
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
    };

    return (
    <TodoContext.Provider
      value={{ todos, doneTodos, addTodo, completeTodo, deleteTodo }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export const useTodo = () : ITodoContext => {
    const context  = useContext(TodoContext);
    if(!context){
        throw new Error(
            `useTodo를 사용하기 위해서는, 무조건 TodoProvider로 감싸야 한다.`
        );
    }
    return context;
}