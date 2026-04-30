import { AnimatePresence } from "framer-motion";
import type { Task, FilterStatus } from "../types";
import TaskCard from "./TaskCard";
import EmptyState from "./EmptyState";

interface TaskListProps {
    tasks: Task[];
    filter: FilterStatus;
    searchQuery: string;
    onToggle: (id: string) => void;
    onDelete: (id: string) => void;
}

const TaskList = ({ tasks, filter, searchQuery, onToggle, onDelete }: TaskListProps) => {
    if (tasks.length === 0) {
        return (
            <EmptyState
                filter={filter}
                hasSearch={searchQuery.trim().length > 0}
            />
        );
    }

    return (
        <ul className="flex flex-col gap-2">
            <AnimatePresence initial={false}>
            {tasks.map(task => (
                <li key={task.id}>
                    <TaskCard
                        task={task}
                        onToggle={onToggle}
                        onDelete={onDelete}
                    />
                </li>
            ))}
            </AnimatePresence>
        </ul>
    );
};

export default TaskList;