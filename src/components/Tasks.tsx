import Task from './SingleTask'
import {useContext} from "react";
import { TaskContext } from "../context/AppContext";

const Tasks = () => {
  const {tasks} = useContext(TaskContext);
  return (
    <>
      <ul className="collection">
        {tasks.map((task) => (
            <li key={task.id} className="collection-item avatar light-green lighten-5">
                <Task task={task} />
            </li>
        ))}
      </ul>

    </>
  )
}

export default Tasks
