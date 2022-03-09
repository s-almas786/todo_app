import React from "react";

function Form() {
  return (
    <div>
      <form className="flex flex-col justify-center items-center p-5 mt-5">
        <input
          type="text"
          className="border-2 border-gray-500 rounded-lg w-100 p-2 focus:border-blue-500"
        />
        <input
          type="submit"
          value="Save"
          className="mt-3 bg-blue-500 text-white p-2 w-20 rounded-md hover:bg-blue-400 font-medium"
        />
      </form>
    </div>
  );
}

export default Form;
