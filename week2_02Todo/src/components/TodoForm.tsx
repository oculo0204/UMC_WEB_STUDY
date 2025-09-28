import type { FormEvent, JSX } from "react";

interface TodoFormProps{
    input:string,
    setInput:(input:string) => void,
    handleSubmit: (e : FormEvent<HTMLFormElement>)=> void;
}

const TodoForm =({input, setInput, handleSubmit}: TodoFormProps) : JSX.Element => {
  return (
        <form id='todo-form' onSubmit={handleSubmit}>
          <input id="todo-input" type="text" placeholder='할 일 입력'
            value={input} onChange={(e):void => {setInput(e.target.value)}}
            //e는 이벤트 객체 (React.ChangeEvent<HTMLInputElement>).
            //e.target.value는 사용자가 입력한 현재 문자열 값.
          />
          <button type="submit">할 일 추가</button>
        </form>
  )
}

export default TodoForm
