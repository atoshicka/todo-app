import './index.css';
import TaskList from './components/TaskList';
import AddTaskForm from './components/AddTaskForm';
import { useTasks } from './hooks/useTasks';
import FilterTabs from './components/FilterTabs';
import SearchInput from './components/SearchInput';
import ProgressBar from './components/ProgressBar';

const App = () => {
    
    const {
        tasks,
        completedCount,
        totalCount,
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
    } = useTasks();

    const handleClearAll = () => {
        if (window.confirm('Удалить все задачи?')) {
            tasks.forEach(task => deleteTask(task.id))
        }
    };

    return (
        <div className="min-h-screen bg-stone-100 md:min-h-screen md:flex md:items-center md:justify-center md:p-6">
            <div className='w-full md:max-w-md bg-white md:rounded-3xl md:shadow-sm md:border md:border-stone-200 p-6 md:p-8 min-h-screen md:min-h-0'>
                    
                    <div className='flex items-center justify-between mb-6'>
                    <h1 className='text-xl font-semibold text-stone-800'>
                        Todo
                    </h1>
                    {totalCount > 0 && (
                        <button
                            onClick={handleClearAll}
                            className='text-xs text-stone-400 hover:text-red-400 transition-colors'
                        >
                            Удалить все
                        </button>
                    )}
                    </div>

                <ProgressBar
                    completed={completedCount}
                    total={totalCount}
                />
                
                <AddTaskForm  onAdd={addTask}/>

                <SearchInput
                    value={searchQuery}
                    onChange={setSearchQuery}
                />

                <FilterTabs
                    current={filter}
                    onChange={setFilter}
                    counts={counts}
                />

                {hasCompleted && (
                    <button
                        onClick={clearCompleted}
                        className='w-full mb-3 text-xs text-stone-400 hover:text-red-400 transition-colors py-1.5'
                    >
                        Очистить выполненные
                    </button>
                )}

                <TaskList
                    tasks={tasks}
                    filter={filter}
                    searchQuery={searchQuery}
                    onToggle={toggleTask}
                    onDelete={deleteTask}
                />
            </div>
        </div>
    );
};

export default App;