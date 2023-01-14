import Task from './SingleTask'
import {useContext} from "react";
import { TaskContext } from "../context/AppContext";

const Tasks = () => {
  const {tasks} = useContext(TaskContext);
  return (
    <>
      <ul className="collection">
        {tasks.map((task, index) => (
            <li className="collection-item avatar grey lighten-2">
            <Task key={index} task={task}  />
            </li>
        ))}
      </ul>

    </>
  )
}

export default Tasks
