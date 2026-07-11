import { useState } from 'react';
import { Plus, Sparkles, TrendingUp, Target, Calendar } from 'lucide-react';
import { useTasks } from '../context/TaskContext';
import TaskStats from '../components/tasks/TaskStats';
import TaskList from '../components/tasks/TaskList';
import Modal from '../components/ui/Modal';
import TaskForm from '../components/tasks/TaskForm';
import Button from '../components/ui/Button';
import { calculateProgress, isToday } from '../utils/helpers';

const Dashboard = () => {
  const { tasks } = useTasks();
  const [showModal, setShowModal] = useState(false);

  const recentTasks = tasks.slice(0, 5);
  const highPriorityTasks = tasks.filter((t) => t.priority === 'high' && !t.completed).slice(0, 5);
  const todayTasks = tasks.filter((t) => isToday(t.dueDate) && !t.completed);
  const progress = calculateProgress(tasks);

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

      {/* Progress Card */}
      {tasks.length > 0 && (
        <div className="bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl p-6 text-white shadow-xl">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h2 className="text-xl font-bold mb-1 flex items-center gap-2">
                <Target size={22} /> Your Progress
              </h2>
              <p className="text-white/80 text-sm">
                Keep going, you're doing great!
              </p>
            </div>
            <div className="text-right">
              <p className="text-4xl font-bold">{progress}%</p>
              <p className="text-sm text-white/80">Completed</p>
            </div>
          </div>
          <div className="w-full bg-white/20 rounded-full h-3 overflow-hidden">
            <div 
              className="bg-white h-3 rounded-full transition-all duration-500 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      )}

      {/* Today's Tasks */}
      {todayTasks.length > 0 && (
        <div>
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
            <Calendar className="text-blue-500" size={22} />
            Due Today ({todayTasks.length})
          </h2>
          <TaskList tasks={todayTasks} />
        </div>
      )}

      {/* Two Column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Tasks */}
        <div>
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
            <TrendingUp className="text-green-500" size={22} />
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