import React from 'react';
import "./styles.css";
import { Todo } from '../model';
import SingleTodo from './SingleTodo';
import { Droppable } from 'react-beautiful-dnd';

interface Props {
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
    completedTodos: Todo[];
    setCompletedTodos:React.Dispatch<React.SetStateAction<Todo[]>>;
}

export default function TodoList( {todos, setTodos, completedTodos, setCompletedTodos } : Props) {
  return (
    <div className ="container">
      {/* <Droppable droppableId='TodosList'> */}
        {/* {(provided) => ( */}
          <div className="todos" 
          // ref={provided.innerRef} {...provided.droppableProps}
           >
        <span className="todos_heading">
          Active
        </span>
        {todos.map((todo) => (
          <SingleTodo todo={todo} todos={todos} key={todo.id} setTodos={setTodos}/>
        ))}
      </div>
        {/* )} */}
    
      {/* </Droppable> */}

      {/* <Droppable droppableId='TodosRemove'> */}
        {/* {(provided) => (  */}
        {/* <div className="todos_remove"
        //  ref={provided.innerRef} {...provided.droppableProps}
        >
      <span className="todos_heading">
          Complete
        </span>
      {todos.map((todo) => (
          <SingleTodo todo={todo} todos={completedTodos} key={todo.id} setTodos={setCompletedTodos}/>
        ))}
      </div> */}
      {/* )} */}
    
      {/* </Droppable> */}
      
    </div>
  )
}
