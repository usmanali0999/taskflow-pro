import { useState, useMemo } from 'react';
import { Plus } from 'lucide-react';
import { useTasks } from '../context/TaskContext';
import TaskList from '../components/tasks/TaskList';
import TaskFilters from '../components/tasks/TaskFilters';
import Button from '../components/ui/Button';
import Modal from '../components/ui/Modal';
import TaskForm from '../components/tasks/TaskForm';

const AllTasks = () => {
  const { tasks } = useTasks();
  const [filter, setFilter] = useState('all');
  const [categoryFilter, setCategoryFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [showModal, setShowModal] = useState(false);

  const filteredTasks = useMemo(() => {
    return tasks.filter((task) => {
      // Status filter
      if (filter === 'active' && task.completed) return false;
      if (filter === 'completed' && !task.completed) return false;

      // Category filter
      if (categoryFilter !== 'all' && task.category !== categoryFilter) return false;

      // Search filter
      if (searchQuery && !task.title.toLowerCase().includes(searchQuery.toLowerCase())) {
        return false;
      }

      return true;
    });
  }, [tasks, filter, categoryFilter, searchQuery]);

  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            All Tasks
          </h1>
          <p className="text-gray-500 dark:text-gray-400 mt-1">
            Manage and organize all your tasks
          </p>
        </div>
        <Button 
          variant="primary" 
          icon={Plus} 
          size="lg" 
          onClick={() => setShowModal(true)}
        >
          New Task
        </Button>
      </div>

      {/* Filters */}
      <TaskFilters
        filter={filter}
        setFilter={setFilter}
        categoryFilter={categoryFilter}
        setCategoryFilter={setCategoryFilter}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />

      {/* Results Count */}
      <p className="text-sm text-gray-500 dark:text-gray-400">
        Showing <strong>{filteredTasks.length}</strong> of <strong>{tasks.length}</strong> tasks
      </p>

      {/* Task List */}
      <TaskList tasks={filteredTasks} />

      {/* Modal */}
      <Modal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        title="Create New Task"
      >
        <TaskForm onClose={() => setShowModal(false)} />
      </Modal>
    </div>
  );
};

export default AllTasks;