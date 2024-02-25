import React, { useState,useEffect } from 'react'
import TodoForm from './TodoForm';
import Todo from './Todo';

function TodoList() {
    const [todos, setTodos] = useState(() => {
        // Load todos from local storage or use an empty array if there are no todos
        const storedTodos = localStorage.getItem('todos');
        return storedTodos ? JSON.parse(storedTodos) : [];
    });

    useEffect(() => {
        // Save todos to local storage whenever todos state changes
        localStorage.setItem('todos', JSON.stringify(todos));
      }, [todos]);

    const addTodo = (todo) => {
        if (!todo.text || /^\s*$/.test(todo.text)) {
            return;
        }
        const newTodos = [todo, ...todos];

        setTodos(newTodos);
        // console.log(newTodos);
    };

    const updateTodo = (todoId, newValue) => {
        if (!newValue.text || /^\s*$/.test(newValue.text)) {
            return;
        }
        setTodos(prev => prev.map(item => (item.id === todoId ? newValue:item)));
    }

    const removeTodo = (id) => {
        const removeArr = [...todos].filter(todo => todo.id !== id );
        // console.log(removeArr);
        setTodos(removeArr);
    }

    const completeTodo = (id) => {
        let updatedTodos = todos.map((todo) => {
            if (todo.id === id) {
                todo.isComplete = !todo.isComplete;
            }
            console.log(todo.isComplete);
            return todo;
        });
        setTodos(updatedTodos);
    };

  return (
      <div>
          <h1>What's the plan for today??</h1>
          <TodoForm onSubmit={addTodo} />
          <Todo todos={todos} completeTodo={completeTodo} removeTodo={removeTodo} updateTodo={ updateTodo } />
    </div>
  )
}

export default TodoList;