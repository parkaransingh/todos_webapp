import React from 'react';
import './App.css';
import { InputField } from './components/InputField';
import { useState } from 'react';
import { Todo } from './model';
import TodoList from './components/TodoList';
import { DragDropContext } from 'react-beautiful-dnd';
const App:React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);
  const [completedTodos, setCompletedTodos] = useState<Todo[]>([]);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();

    if (todo) {
               // ...take whats inside already, add the rest of the todos
      setTodos([...todos,{id:Date.now(), todo: todo, isDone: false}]);
      console.log(todos)
      setTodo("");
    }
  };
  console.log(todo);
  return (
    // <DragDropContext onDragEnd={() => {}}>
    <div className='App'>
      <span className="heading">Missions</span>
      <InputField todo={todo} setTodo={setTodo} handleAdd= {handleAdd}/>
      <TodoList todos={todos} setTodos={setTodos} completedTodos={completedTodos} setCompletedTodos={setCompletedTodos}/>
    </div>
    // </DragDropContext>
  )

}

export default App;
