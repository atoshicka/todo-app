import { useEffect, useReducer, useState, useMemo } from "react";
import type { FilterStatus, Task } from "../types";
import { tasksReducer } from "../store/tasksReducer";

const STORAGE_KEY = 'todo-tasks';

const loadFromStorage = (): Task[] => {
    try {
        const raw = localStorage.getItem(STORAGE_KEY);
        if (!raw) return [];

        const parsed = JSON.parse(raw);

        return parsed.map((task: Task) => ({
            ...task,
            createdAt: new Date(task.createdAt),
        }));
    } catch {
        return [];
    }
};

export const useTasks = () => {
    const [tasks, dispatch] = useReducer(tasksReducer, [], loadFromStorage);
    const [filter, setFilter] = useState<FilterStatus>('all');
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
    }, [tasks]);

    const addTask = (task: Task) => {
        dispatch({ type: 'ADD_TASK', payload: task });
    };

    const toggleTask = (id: string) => {
        dispatch({ type: 'TOGGLE_TASK', payload: id });
    };

    const deleteTask = (id: string) => {
        dispatch({ type: 'DELETE_TASK', payload: id });
    };

    const clearCompleted = () => {
        dispatch({ type: 'CLEAR_COMPLETED' });
    };

    const filteredTasks = useMemo(() => {
        return tasks
        .filter(task => {
            if (filter === 'active') return !task.completed;
            if (filter === 'completed') return task.completed;
            return true;
        })
        .filter(task => {
            if (!searchQuery.trim()) return true;
            return task.title.toLowerCase().includes(searchQuery.toLowerCase());
        });
    }, [tasks, filter, searchQuery]);

    const counts: Record<FilterStatus, number> = {
        all: tasks.length,
        active: tasks.filter(t => !t.completed).length,
        completed: tasks.filter(t => t.completed).length,
    };

    const completedCount = tasks.filter(t => t.completed).length;
    const hasCompleted = completedCount > 0;

    return {
        tasks: filteredTasks,
        completedCount,
        totalCount: tasks.length,
        filter,
        setFilter,
        counts,
        searchQuery,
        setSearchQuery,
        hasCompleted,
        addTask,
        toggleTask,
        deleteTask,
        clearCompleted,
    };
};