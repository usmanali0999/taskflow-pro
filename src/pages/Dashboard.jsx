import { useState } from 'react';
import { Plus, Sparkles } from 'lucide-react';
import { useTasks } from '../context/TaskContext';
import TaskStats from '../components/tasks/TaskStats';
import TaskList from '../components/tasks/TaskList';
import Modal from '../components/ui/Modal';
import TaskForm from '../components/tasks/TaskForm';
import Button from '../components/ui/Button';

const Dashboard = () => {
  const { tasks } = useTasks();
  const [showModal, setShowModal] = useState(false);

  const recentTasks = tasks.slice(0, 5);
  const highPriorityTasks = tasks.filter((t) => t.priority === 'high' && !t.completed);

  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
            Dashboard <Sparkles className="text-yellow-500" size={28} />
          </h1>
          <p className="text-gray-500 dark:text-gray-400 mt-1">
            Overview of your tasks and productivity
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

      {/* Stats */}
      <TaskStats tasks={tasks} />

      {/* Two Column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Tasks */}
        <div>
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Recent Tasks
          </h2>
          <TaskList tasks={recentTasks} />
        </div>

        {/* High Priority */}
        <div>
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            🔥 High Priority
          </h2>
          <TaskList tasks={highPriorityTasks} />
        </div>
      </div>

      {/* Add Task Modal */}
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

export default Dashboard;