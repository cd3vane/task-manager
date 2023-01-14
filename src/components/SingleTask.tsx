import {Task} from "../types";
import {useContext} from "react";
import {TaskContext} from "../context/AppContext";

type TaskProps = {
    task: Task
}
const SingleTask = ({ task }: TaskProps) => {
    const { removeTask } = useContext(TaskContext);
    const onDelete = () => {
        let confirmation = window.confirm("Are you sure you want to delete the task: " + task.title);
        if(confirmation){
            removeTask(task.id);
            alert("Task deleted successfully!");
        }
        return;
    }
  return (
    <div className="task">
      <i className="material-icons circle">assignment</i>
        <span className="title">{task.title}</span>
        <p>{task.date}</p>
        <button onClick={() => onDelete()} className="secondary-content btn red"><i className="material-icons">delete</i></button>
    </div>
  )
}

export default SingleTask
