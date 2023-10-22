import React, { useRef } from 'react';
import "./styles.css"

interface props {
    todo: string;
    setTodo: React.Dispatch<React.SetStateAction<string>>;
    handleAdd: (e:React.FormEvent)=>void;
}
// or
// export const InputField: React.FC<Props> = ({todo, setTodo }) => {
export const InputField = ( {todo, setTodo, handleAdd} : props) => {
  const inputRef = useRef<HTMLInputElement>(null);
  // hooking particular component html 
  return (
    <form className='input' onSubmit={(e) => {
      handleAdd(e)
      inputRef.current?.blur();
      }}> 
        <input 
        ref={inputRef}
        type='input' placeholder="Enter a task"
        className="input_box" value={todo} onChange={(e)=>setTodo(e.target.value)}></input>
        <button className="input_submit" type='submit'>Do it</button>
    </form>
  );
};


