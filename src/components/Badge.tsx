import type { Priority } from "../types";
import clsx from "clsx";

interface BadgeProps {
    priority: Priority;
}

const PRIORITY_STYLES: Record<Priority, string> = {
    low: 'bg-blue-50 text-blue-700',
    medium: 'bg-amber-50 text-amber-700',
    high: 'bg-red-100 text-red-700',
};

const PRIORITY_LABELS: Record<Priority, string> = {
    low: 'Низкий',
    medium: 'Средний',
    high: 'Высокий',
};

const Badge = ({ priority }: BadgeProps) => {
    return (
        <span className={clsx(
            'text-xs font-medium px-2 py-0.5 rounded-full',
            PRIORITY_STYLES[priority]
        )}>
            {PRIORITY_LABELS[priority]}
        </span>
    );
};

export default Badge;