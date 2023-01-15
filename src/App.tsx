import './App.css'
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom'
import Header from './components/Header'
import Tasks from './components/Tasks'
import {TaskProvider} from "./context/AppContext";
import AddTask from "./components/AddTask";

const App = () => {
  return (
      <TaskProvider>
          <Router>
            <div className='container-fluid'>
              <Header />
                <div className="container">
                    <AddTask />
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
