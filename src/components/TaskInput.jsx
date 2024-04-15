import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "./TodoSlice";
import { generateTodoId } from "../utils/todoId";

export default function TaskInput() {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const dispatch = useDispatch();

  async function handleSubmit(e) {
    e.preventDefault();

    if (!title || !desc) {
      alert("Title or Description can't be empty!");
      return;
    }

    const todoId = await generateTodoId();
    const todo = {
      id: todoId,
      title,
      desc,
      completed: false,
    };

    dispatch(addTodo(todo));
    setTitle("");
    setDesc("");
  }

  return (
    <div className="mb-8">
      <h3 className="text-lg font-semibold mb-2">Add a Todo</h3>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            htmlFor="title"
            className="block text-sm font-medium text-gray-700"
          >
            Todo Title
          </label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            id="title"
            className="mt-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-blue-300 w-full"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="desc"
            className="block text-sm font-medium text-gray-700"
          >
            Todo Description
          </label>
          <input
            type="text"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            id="desc"
            className="mt-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-blue-300 w-full"
          />
        </div>
        <button
          type="submit"
          className="py-2 px-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-700"
        >
          Add Todo
        </button>
      </form>
    </div>
  );
}
