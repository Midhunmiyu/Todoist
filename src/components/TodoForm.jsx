import React, { useState, useEffect, useRef } from 'react'


function TodoForm(props) {
  const [input, setInput] = useState(props.edit ? props.edit.value : '');

  const inputRef = useRef(null)
  useEffect(() => {
    inputRef.current.focus();

  });


  const handleChange = (e) => {
    setInput(e.target.value);

  }

  const handleSubmit = (e) => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 1000),
      text: input
    });
    setInput('');
  }

  return (
   
    <form className='todo-form' onSubmit={handleSubmit}>
      {props.edit ? (
        <>
          <input type="text" className='todo-input' value={input} name='text' placeholder='Update your Todo' onChange={handleChange} ref={inputRef} />
        <button className='todo-button'>Update</button>
        </>
      ) : (
          <>
            <input type="text" className='todo-input' value={input} name='text' placeholder='Add a Todo' onChange={handleChange} ref={inputRef} />
        <button className='todo-button'>Add</button>
          </>
      )
    }
        
      </form>
    
  )
}

export default TodoForm;