import type { FilterStatus } from "../types";

interface EmptyStateProps {
    filter: FilterStatus;
    hasSearch: boolean;
}

const MESSAGES: Record<FilterStatus, string> = {
    all: 'Добавьте первую задачу',
    active: 'Активных задач пока нет',
    completed: 'Выполненных задач пока нет',
};

const EmptyState = ({ filter, hasSearch }: EmptyStateProps) => {
    const message = hasSearch
    ? 'Ничего не найдено'
    : MESSAGES[filter];

    return (
        <div className="text-center py-12">
            <p className="text-sm text-stone-400">
                {message}
            </p>
        </div>
    );
};

export default EmptyState;