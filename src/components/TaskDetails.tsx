import {Task} from "../types";

type TaskProps = {
    task: Task
    closePopup: () => void
}
const TaskDetails = ({ task, closePopup }: TaskProps) => {

    return (
        <div className="popup-container">
            <div className="popup-body">
                <h1>{task.title}</h1>
                <button onClick={closePopup}>Close X</button>
            </div>
        </div>
    )
}

export default TaskDetails