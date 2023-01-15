import React, { useState, useContext } from 'react'
import {TaskContext} from "../context/AppContext";

const AddTask = () => {
    const [showAddTask, setShowAddTask] = useState<boolean>(false)
  const [title, setTitle] = useState<string>('')
  const [date, setDate] = useState<string>('')
  const [description, setDescription] = useState<string>('')
  const { tasks, addTask }  = useContext(TaskContext);

  const onSubmit = (e : React.FormEvent) => {
    e.preventDefault()

    if (!title) {
      alert('Please add a task title')
      return
    } else if (!date){
        alert('Please add a date')
        return
    }

    addTask({ id: tasks.length + 1, title, date, description, completed: false });
    alert("Task added successfully!");

    setTitle('')
    setDate('')
      setDescription('')
      setShowAddTask(false)
  }

  return (
      <div className="add-form ">
      <button className="btn orange darken-4" onClick={() => setShowAddTask(!showAddTask)}>{showAddTask ? 'Close Add Task': 'Add Task'}</button>
          {showAddTask &&
              <form className='add-form-open' onSubmit={onSubmit}>
      <div className='form-control'>
        <label>Task</label>
        <input
          type='text'
          placeholder='Task Title'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className='form-control'>
        <label>Date & Time</label>
        <input
          type='date'
          placeholder='Add Date & Time'
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </div>
      <div className='form-control'>
        <label>Description</label>
        <input
            type='text'
            placeholder='Description'
            value={description}
            onChange={(e) => setDescription(e.target.value)}
        />
      </div>

      <input type='submit' value='Save Task' className='btn btn-block orange darken-4' />
          </form> }
      </div>
  )
}

export default AddTask
