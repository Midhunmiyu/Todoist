import React from 'react'
import TodoList from './components/TodoList'
import './App.css';


export default function App() {
  return (
    <div className='app-container'>
      {/* <img className='todo-image' src="src/assets/Todoist.png" alt="todoist" /> */}
      <div className="todo-app">

        <TodoList />
      </div>
    </div>


  )
}


