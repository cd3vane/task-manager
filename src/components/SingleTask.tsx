import {Task} from "../types";
import {useContext, useState} from "react";
import {TaskContext} from "../context/AppContext";
import TaskDetails from "./TaskDetails";

type TaskProps = {
    task: Task
}

const SingleTask = ({ task }: TaskProps) => {
    const [open, setOpen] = useState(false);
    const [, setCount] = useState(0);
    const { removeTask } = useContext(TaskContext);

    const onDelete = () => {
        let confirmation = window.confirm("Are you sure you want to delete the task: " + task.title);
        if(confirmation){
            removeTask(task.id);
            alert("Task deleted successfully!");
        }
        return;
    }

    const toggleComplete = () => {
        task.completed = !task.completed;
        setCount(c => c +1);
    }
    if(task.completed){
        return (
            <div className="task-complete" onDoubleClick={() => toggleComplete()}>
                <i onClick={() => toggleComplete()} className="material-icons circle grey">check_box</i>
                <s><span className="title">{task.title}</span>
                    <p>{task.date}</p></s>
                <button className="btn" onClick={() => setOpen(true)}>View details</button>
                {open ? <TaskDetails task={task} closePopup={() => setOpen(false)} /> : null}
                <button onClick={() => onDelete()} className="secondary-content btn red"><i className="material-icons">delete</i></button>
            </div>)
    }else{
        return (
            <div className="task" onDoubleClick={() => toggleComplete()}>
                <i onClick={() => toggleComplete()} className="material-icons circle grey">check_box_outline_blank</i>
                <span className="title">{task.title}</span>
                <p>{task.date}</p>
                <button className="btn" onClick={() => setOpen(true)}>View details</button>
                {open ? <TaskDetails task={task} closePopup={() => setOpen(false)} /> : null}
                <button onClick={() => onDelete()} className="secondary-content btn red"><i className="material-icons">delete</i></button>
            </div>
        )
    }
}

export default SingleTask
