import {Task} from "../types";

type TaskProps = {
    task: Task
    closePopup: () => void
}
const TaskDetails = ({ task, closePopup }: TaskProps) => {

    return (
        <div className="popup-container">
            <div className="popup-body">
                <div className="right-align">
                    <button className="waves-effect btn red" onClick={closePopup}>Close X</button>
                </div>
                <h1>{task.title}</h1>
                <h3>Due: {task.date}</h3>
                <p>{task.description}</p>

            </div>
        </div>
    )
}

export default TaskDetails