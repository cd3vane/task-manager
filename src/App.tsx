import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom'
import Header from './components/Header'
import Tasks from './components/Tasks'
import {TaskProvider} from "./context/AppContext";
import AddTask from "./components/AddTask";

const App = () => {
  const [showAddTask, setShowAddTask] = useState<boolean>(false)

  return (
      <TaskProvider>
          <Router>
            <div className='container-fluid'>
              <Header />
                <div className="container">
                    <div className="add-form">
                        <button className="btn orange darken-4" onClick={() => setShowAddTask(!showAddTask)}>{showAddTask ? 'Close Add Task': 'Add Task'}</button>
                        {showAddTask && <AddTask />}
                    </div>
                  <Routes>
                    <Route path='/task-manager' element={<Tasks/>}/>
                  </Routes>
                </div>
            </div>
          </Router>
      </TaskProvider>
  )
}

export default App
