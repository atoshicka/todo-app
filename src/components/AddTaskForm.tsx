import { useState } from "react";
import { Plus } from "lucide-react";
import clsx from "clsx";
import type { Priority, Task } from "../types";

interface AddTaskFormProps {
    onAdd: (task: Task) => void;
}

const AddTaskForm = ({ onAdd }: AddTaskFormProps) => {
    const [title, setTitle] = useState('');
    const [priority, setPriority] = useState<Priority>('medium');

    const handleSubmit = () => {
        const trimmed = title.trim();
        if (!trimmed) return;

        const newTask: Task = {
            id: crypto.randomUUID(),
            title: trimmed,
            priority,
            completed: false,
            createdAt: new Date(),
            tags: [],
        };

        onAdd(newTask);
        setTitle('');
    };

    const handleKeyDowm = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') handleSubmit();
    };

    const priorities: Priority[] = ['low', 'medium', 'high'];

    const priorityLabels: Record<Priority, string> = {
        low: 'Низкий',
        medium: 'Средний',
        high: 'Высокий',
    };

    return (
        <div className="flex flex-col gap-3 mb-6">
            <div className="flex gap-2">
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    onKeyDown={handleKeyDowm}
                    placeholder="Новая задача..."
                    className="flex-1 text-sm px-4 py-2.5 rounded-xl border border-stone-200 bg-stone-50 text-stone-800 placeholder:text-stone-400 outline-none focus:border-stone-400 transition-colors"
                />
                <button
                    onClick={handleSubmit}
                    disabled={!title.trim()}
                    className={clsx(
                        'flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-200',
                            title.trim()
                            ? 'bg-stone-800 text-white border border-stone-800 hover:bg-white hover:text-stone-800'
                            : 'bg-stone-100 text-stone-400 border border-transparent cursor-not-allowed'
                    )}
                >
                    <Plus size={16}/>
                    Добавить
                </button>
            </div>
            <div className="flex gap-2">
                {priorities.map(p => (
                    <button
                        key={p}
                        onClick={() => setPriority(p)}
                        className={clsx(
                            'text-xs px-3 py-1.5 rounded-lg border transition-all duration-200',
                                priority === p
                                ? 'bg-stone-800 text-white border-stone-800'
                                : 'bg-white text-stone-500 border-stone-200 hover:border-stone-400'
                        )}
                    >
                        {priorityLabels[p]}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default AddTaskForm;