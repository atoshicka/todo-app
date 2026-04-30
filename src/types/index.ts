export type Priority = 'low' | 'medium' | 'high';

export type FilterStatus = 'all' | 'active' | 'completed';

export interface Task {
    id: string;
    title: string;
    description?: string;
    priority: Priority;
    completed: boolean;
    createdAt: Date;
    tags: string[];
}

export interface TaskFilter {
    status: FilterStatus;
    priority: Priority | 'all';
    searchQuery: string;
}