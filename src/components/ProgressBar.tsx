import { motion } from "framer-motion";

interface ProgressBarProps {
    completed: number;
    total: number;
}

const ProgressBar = ({ completed, total }: ProgressBarProps) => {
    const percentage = total === 0 ? 0 : Math.round((completed / total) * 100);

    return (
        <div className="mb-7">
            <div className="flex justify-between items-center mb-2">
                <p className="text-sm text-stone-400">
                    {completed} из {total} выполнено
                </p>
                <p className="text-sm font-medium text-stone-600">
                    {percentage}%
                </p>
            </div>
            <div className="h-1.5 bg-stone-100 rounded-full overflow-hidden">
                <motion.div
                    className="h-full bg-stone-800 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: `${percentage}%` }}
                    transition={{ duration: 0.4, ease: 'easeOut' }}
                />
            </div>
        </div>
    );
};

export default ProgressBar;