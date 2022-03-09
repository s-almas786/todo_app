import React from "react";
import Todo from "./Todo";

function TodoList() {
  return (
    <div className="flex flex-col items-center w-full mx-auto md:w-2/4 p-5">
      <Todo />
    </div>
  );
}

export default TodoList;
