import type { FormEvent } from "react";

interface TodoFormProps{
    input:string,
    setInput:(input:string) => void,
    handleSubmit: (e : FormEvent<HTMLFormElement>)=> void;
}

const TodoForm =({input, setInput, handleSubmit}: TodoFormProps) => {
  return (
        <form id='todo-form' onSubmit={handleSubmit} className="flex justify-between items-center">
          <input id="todo-input" type="text" placeholder='할 일 입력'
            value={input} onChange={(e):void => {setInput(e.target.value)}}
            //e는 이벤트 객체 (React.ChangeEvent<HTMLInputElement>).
            //e.target.value는 사용자가 입력한 현재 문자열 값.
            className="w-4/6 h-8 border border-gray-300 p-2 rounded outline-emerald-700" //focus: 로 선택되었을때 동작을 넣을 수 있다.
          />
          <button type="submit" className=" h-8 ml-4 bg-[#0d7729] text-white px-2 pd-0 rounded flex items-center justify-center">할 일 추가</button>
        </form>
  )
}

export default TodoForm
