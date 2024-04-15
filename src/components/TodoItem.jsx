import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteTodo } from "./TodoSlice";
import { completedTodo } from "./TodoSlice";

export default function TodoItem({ todo }) {
  const [completed, setCompleted] = useState(false);

  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteTodo(id));
  };

  const handleChange = (id) => {
    setCompleted(!completed);
    dispatch(completedTodo(id));
  };

  return (
    <li className="mb-4">
        <hr className="my-4 border-t border-gray-200" />
      <h4 className={`text-lg font-semibold ${todo.completed && "line-through text-red-500"} `}>{todo.title}</h4>
      <p className="text-gray-600">{todo.desc}</p>

      {!todo.completed && (
        <div className="mt-2">
          <label
            htmlFor="completed"
            className="inline-flex items-center"
          >
            <input
              type="checkbox"
              checked={completed}
              onChange={() => handleChange(todo.id)}
              id="completed"
              className="form-checkbox h-5 w-5 text-blue-500"
            />
            <span className="ml-2 text-sm text-gray-700">Completed</span>
          </label>
        </div>
      )}

      <button
        onClick={() => handleDelete(todo.id)}
        className="mt-2 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 focus:outline-none focus:ring focus:border-red-700"
      >
        Delete
      </button>
    </li>
  );
}
