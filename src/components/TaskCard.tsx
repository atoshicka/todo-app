import { Check, Trash2 } from 'lucide-react';
import type { Task } from '../types';
import Badge from './Badge';
import clsx from 'clsx';
import { motion } from 'framer-motion';

interface TaskCardProps {
    task: Task;
    onToggle: (id: string) => void;
    onDelete: (id: string) => void;
}

const TaskCard = ({ task, onToggle, onDelete }: TaskCardProps) => {
    return (
       <motion.div 
            layout
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.2 }}
            className={clsx(
                'group flex items-start gap-3 p-4 rounded-2xl border transition-all duration-200',
                    task.completed
                    ? 'bg-stone-50 border-stone-100'
                    : 'bg-white border-stone-200 hover:border-stone-300'
       )}>

        <button
            onClick={() => onToggle(task.id)}
            className={clsx(
                `mt-0.5 flex-shrink-0 w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all duration-200`,
                    task.completed
                    ? 'bg-stone-800 border-stone-800'
                    : 'border-stone-300 hover:border-stone-500'
            )}
        >
            {task.completed && (
                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.15 }}
                >
                    <Check size={10} color='white' strokeWidth={3}/>
                </motion.div>
            )}   
        </button>
        <div className='flex-1 min-w-0'>
            <p className={clsx(
                'text-sm font-medium',
                 task.completed
                 ? 'line-through text-stone-400'
                 : 'text-stone-800'
            )}>
                {task.title}
            </p>

            {task.description && (
                <p className='text-xs text-stone-400 mt-0.5 truncate'>
                    {task.description}
                </p>
            )}

            <div className='flex items-center gap-2 mt-2 flex-wrap'>
                <Badge priority={task.priority}/>
                {task.tags.map(tag => (
                    <span
                        key={tag}
                        className='text-xs text-stone-400 bg-stone-100 px-2 py-0.5 rounded-full'
                    >
                        #{tag}
                    </span>
                ))}
            </div>
        </div>

        <button
            onClick={() => onDelete(task.id)}
            className='opacity-0 group-hover:opacity-100 transition-opacity text-stone-300 hover:text-red-400 flex-shrink-0 mt-0.5'
        >
            <Trash2 size={16}/>
        </button>
       </motion.div>
    );
};

export default TaskCard;