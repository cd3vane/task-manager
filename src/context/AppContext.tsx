import {Task} from "../types";
import {createContext, useEffect, useReducer} from "react";
import AppReducer, { State } from "./AppReducer";

const initialState : State = {
    tasks: [{
        id: 1,
        title: 'Hello world',
        date: 'tomorrow',
        completed: false,
    },],
        //JSON.parse(localStorage.getItem("tasks") || '[]'),
    addTask: () => {},
    removeTask: () => {},
};

export const TaskContext = createContext<State>(initialState);

export const TaskProvider = (props : any) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(state.tasks));
    }, [state]);

    const addTask = (movie : Task) => {
        dispatch({ type: "ADD_TASK", payload: movie});
    }
    const removeTask = (id : number) => {
        dispatch({ type: "REMOVE_TASK", payload: id})
    }
   

    return (
        <TaskContext.Provider
            value={{
                tasks: state.tasks,
                addTask: addTask,
                removeTask: removeTask,
            }}>
            {props.children}
        </TaskContext.Provider>
    );
}