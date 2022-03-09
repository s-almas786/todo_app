import React, { useState } from "react";
import Form from "./components/Form";
import TodoList from "./components/TodoList";

export const toDoContext = React.createContext();

function App() {
  const [toDos, setToDos] = useState([
    {
      id: "1",
      task: "I have to do this task",
    },
  ]);

  function deleteTodo(key) {
    let newTodos = toDos.filter((element) => {
      return element.id != key;
    });

    setToDos(newTodos);
  }
  return (
    <div className="">
      <h1 className="text-4xl font-bold text-center mt-10">To Do List App</h1>
      <Form />
      <toDoContext.Provider
        value={{
          toDos,
          deleteTodo,
        }}
      >
        <TodoList />
      </toDoContext.Provider>
    </div>
  );
}

export default App;
