import { ListTodo, CheckCircle2, Clock, TrendingUp } from 'lucide-react';
import { calculateProgress } from '../../utils/helpers';

const TaskStats = ({ tasks }) => {
  const total = tasks.length;
  const completed = tasks.filter((t) => t.completed).length;
  const pending = total - completed;
  const progress = calculateProgress(tasks);

  const stats = [
    {
      label: 'Total Tasks',
      value: total,
      icon: ListTodo,
      color: 'from-blue-500 to-blue-600',
      bg: 'bg-blue-50 dark:bg-blue-900/20',
    },
    {
      label: 'Completed',
      value: completed,
      icon: CheckCircle2,
      color: 'from-green-500 to-green-600',
      bg: 'bg-green-50 dark:bg-green-900/20',
    },
    {
      label: 'Pending',
      value: pending,
      icon: Clock,
      color: 'from-orange-500 to-orange-600',
      bg: 'bg-orange-50 dark:bg-orange-900/20',
    },
    {
      label: 'Progress',
      value: `${progress}%`,
      icon: TrendingUp,
      color: 'from-purple-500 to-purple-600',
      bg: 'bg-purple-50 dark:bg-purple-900/20',
    },
  ];

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((stat) => {
        const Icon = stat.icon;
        return (
          <div
            key={stat.label}
            className="bg-white dark:bg-gray-900 rounded-xl p-5 border border-gray-200 dark:border-gray-800 hover:shadow-lg transition"
          >
            <div className="flex items-center justify-between mb-3">
              <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${stat.color} flex items-center justify-center`}>
                <Icon className="text-white" size={20} />
              </div>
            </div>
            <p className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
              {stat.value}
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {stat.label}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default TaskStats;