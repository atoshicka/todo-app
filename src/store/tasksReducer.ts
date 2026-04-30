import type { Task } from "../types";

export type TasksActions =
    | { type: 'ADD_TASK'; payload: Task }
    | { type: 'TOGGLE_TASK'; payload: string }
    | { type: 'DELETE_TASK'; payload: string }
    | { type: 'CLEAR_COMPLETED' };

export const tasksReducer = (state: Task[], action: TasksActions): Task[] => {
    switch (action.type) {
        case 'ADD_TASK':
            return [action.payload, ...state];
        case 'TOGGLE_TASK':
            return state.map(task =>
                task.id === action.payload
                ? { ...task, completed: !task.completed }
                : task
            );
        case 'DELETE_TASK':
            return state.filter(task => task.id !== action.payload);
        case 'CLEAR_COMPLETED':
            return state.filter(task => !task.completed);
        default:
            return state;
    }
};