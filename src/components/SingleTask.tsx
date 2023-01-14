import { Link } from 'react-router-dom';
import {Task} from "../types";

type TaskProps = {
    task: Task
}
const SingleTask = ({ task }: TaskProps) => {
  return (
    <div className="task">
      <i className="material-icons circle">assignment</i>
        <span className="title">{task.title}</span>
        <p>{task.date}</p>
        <Link to="/edit" className="secondary-content"><i className="material-icons">grade</i></Link>
    </div>
  )
}

export default SingleTask
