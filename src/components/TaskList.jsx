import React from "react";
import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";

export default function TaskList() {
  const todos = useSelector((store) => store.todo);
  return (
    <div className="mb-8">
      <h3 className="text-lg text-center font-semibold mb-2">Todos Items</h3>
      <ul className="divide-y divide-gray-200">
        {todos?.length === 0 ? (
          <li className="py-4 text-gray-500">No Todos currently available!</li>
        ) : (
          todos?.map((todo) => <TodoItem todo={todo} key={todo.id} />)
        )}
      </ul>
    </div>
  );
}
