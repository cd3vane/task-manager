import { Task } from '../types'

export type State = {
    tasks: Task[]
    addTask: (task: Task) => void
    removeTask: (id: number) => void
}


type ReducerAction = 
{type: 'ADD_TASK', payload: Task} |
{type: 'REMOVE_TASK', payload: number}

const AppReducer = (state : State, action : ReducerAction) : State => {
    switch (action.type) {
        case "ADD_TASK":
            return {
                ...state,
                tasks: [...state.tasks, action.payload],
            } ;
        case "REMOVE_TASK":
            return {
                ...state,
                tasks: state.tasks.filter(
                    (task : Task) => task.id !== action.payload
                ),
            };
        default:
            return state;
    }
};

export default AppReducer;