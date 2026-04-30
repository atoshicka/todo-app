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

    return (
        <div className='min-h-screen bg-stone-100 flex items-center justify-center p-6'>
            <div className='max-full max-w-md bg-white rounded-3xl p-8 shadow-sm border border-stone-200'>
                    <h1 className='text-xl font-semibold text-stone-800'>
                        Todo
                    </h1>

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