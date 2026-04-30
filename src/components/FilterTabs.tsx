import clsx from "clsx";
import type { FilterStatus } from "../types";

interface FilterTabsProps {
    current: FilterStatus;
    onChange: (filter: FilterStatus) => void;
    counts: Record<FilterStatus, number>;
}

const LABELS: Record<FilterStatus, string> = {
    all: 'Все',
    active: 'Активные',
    completed: 'Выполненные',
};

const FilterTabs = ({ current, onChange, counts }: FilterTabsProps) => {
    const filters: FilterStatus[] = ['all', 'active', 'completed'];

    return (
        <div className="flex gap-1 mb-5 p-1 bg-stone-100 rounded-xl">
            {filters.map(filter => (
                <button
                    key={filter}
                    onClick={() => onChange(filter)}
                    className={clsx(
                        'flex-1 text-xs py-1.5 rounded-lg font-medium transition-all duration-200',
                            current === filter
                            ? 'bg-white text-stone-800 shadow-sm'
                            : 'text-stone-400 hover:text-stone-600'
                    )}
                >
                    {LABELS[filter]}
                    <span className={clsx(
                        'ml-1.5',
                            current === filter 
                            ? 'text-stone-400'
                            : 'text-stone-300'
                    )}>
                        {counts[filter]}
                    </span>
                </button>
            ))}
        </div>
    );
};

export default FilterTabs;