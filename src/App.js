import React from 'react'
import TaskInput from './components/TaskInput'
import TaskList from './components/TaskList'


export default function App() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4 text-center">Todo List</h1>
      <TaskInput />

      <TaskList />
    </div>
  )
}
