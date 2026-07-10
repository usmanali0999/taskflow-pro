import { Trash2 } from 'lucide-react';
import { useTasks } from '../context/TaskContext';
import TaskList from '../components/tasks/TaskList';
import Button from '../components/ui/Button';

const Completed = () => {
  const { tasks, clearCompleted } = useTasks();
  const completedTasks = tasks.filter((t) => t.completed);

  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            Completed Tasks ✅
          </h1>
          <p className="text-gray-500 dark:text-gray-400 mt-1">
            {completedTasks.length} task{completedTasks.length !== 1 ? 's' : ''} completed
          </p>
        </div>
        {completedTasks.length > 0 && (
          <Button 
            variant="danger" 
            icon={Trash2} 
            onClick={clearCompleted}
          >
            Clear All
          </Button>
        )}
      </div>

      {/* Task List */}
      <TaskList tasks={completedTasks} />
    </div>
  );
};

export default Completed;