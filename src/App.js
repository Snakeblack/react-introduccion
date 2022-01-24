import React from "react";
import { CreateTodoButton } from "./components/CreateTodoButton";
import { TodoCounter } from "./components/TodoCounter";
import { TodoList } from "./components/TodoList";
import { TodoSearch } from "./components/TodoSearch";
import { TodoItem } from "./components/TodoItem";
// import "./App.css";

function App() {

  const todos = [
    { text: "Aprender Bases de datos", completed: false },
    { text: "Aprender Angular", completed: false },
    { text: "Aprender React", completed: false },
  ];

  return (
    <>
      <TodoCounter />
      <TodoSearch />
      <TodoList>
        {todos.map(todo => (
          <TodoItem key={todo.text} text={todo.text}/>
        ))}
      </TodoList>
      <CreateTodoButton />
    </>
  );
}

export default App;
