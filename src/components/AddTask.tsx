import React, { useState, useContext } from 'react'
import {TaskContext} from "../context/AppContext";

const AddTask = () => {
  const [title, setTitle] = useState<string>('')
  const [date, setDate] = useState<string>('')
  const { addTask }  = useContext(TaskContext);

  const onSubmit = (e : React.FormEvent) => {
    e.preventDefault()

    if (!title) {
      alert('Please add a task')
      return
    }

    addTask({ id: 1, title, date, completed: false });

    setTitle('')
    setDate('')
  }

  return (
    <form className='add-form-open' onSubmit={onSubmit}>
      <div className='form-control'>
        <label>Task</label>
        <input
          type='text'
          placeholder='Add Task'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className='form-control'>
        <label>Date & Time</label>
        <input
          type='text'
          placeholder='Add Date & Time'
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </div>

      <input type='submit' value='Save Task' className='btn btn-block orange darken-4' />
    </form>
  )
}

export default AddTask
