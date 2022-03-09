import React, { useContext } from "react";
import { FiDelete } from "react-icons/fi";
import { toDoContext } from "../App";

function Todo() {
  const todo = useContext(toDoContext);
  return (
    <>
      <div
        className="flex justify-between bg-gray-100 shadow-lg p-5 mt-5 rounded-md w-full"
        key={todo.toDos[0].id}
      >
        <p className="font-medium text-xl">{todo.toDos[0].task}</p>
        <FiDelete
          className="font-medium text-xl hover:text-2xl"
          onClick={todo.deleteTodo(todo.toDos[0].id)}
        />
      </div>
    </>
  );
}

export default Todo;
