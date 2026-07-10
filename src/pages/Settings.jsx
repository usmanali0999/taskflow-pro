import { Moon, Sun, Info, Trash2, ExternalLink } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { useTasks } from '../context/TaskContext';
import Button from '../components/ui/Button';
import { APP_NAME, APP_VERSION } from '../utils/constants';
import toast from 'react-hot-toast';

const Settings = () => {
  const { theme, toggleTheme } = useTheme();
  const { tasks } = useTasks();

  const handleClearAll = () => {
    if (window.confirm('Are you sure you want to delete ALL tasks? This cannot be undone.')) {
      localStorage.removeItem('tasks');
      window.location.reload();
      toast.success('All data cleared!');
    }
  };

  return (
    <div className="space-y-6 max-w-3xl mx-auto">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
          Settings ⚙️
        </h1>
        <p className="text-gray-500 dark:text-gray-400 mt-1">
          Customize your experience
        </p>
      </div>

      {/* Appearance */}
      <div className="bg-white dark:bg-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-800">
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
          Appearance
        </h2>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            {theme === 'light' ? (
              <Sun className="text-yellow-500" size={24} />
            ) : (
              <Moon className="text-indigo-400" size={24} />
            )}
            <div>
              <p className="font-medium text-gray-900 dark:text-white">
                {theme === 'light' ? 'Light Mode' : 'Dark Mode'}
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Toggle between light and dark theme
              </p>
            </div>
          </div>
          <button
            onClick={toggleTheme}
            className={`relative w-14 h-8 rounded-full transition-colors ${
              theme === 'dark' ? 'bg-indigo-600' : 'bg-gray-300'
            }`}
          >
            <span
              className={`absolute top-1 left-1 w-6 h-6 bg-white rounded-full transition-transform ${
                theme === 'dark' ? 'translate-x-6' : 'translate-x-0'
              }`}
            />
          </button>
        </div>
      </div>

      {/* Data Management */}
      <div className="bg-white dark:bg-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-800">
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
          Data Management
        </h2>
        <div className="space-y-3">
          <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
            <div>
              <p className="font-medium text-gray-900 dark:text-white">
                Total Tasks
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {tasks.length} tasks stored locally
              </p>
            </div>
            <Button 
              variant="danger" 
              icon={Trash2} 
              onClick={handleClearAll}
            >
              Clear All Data
            </Button>
          </div>
        </div>
      </div>

      {/* About */}
      <div className="bg-white dark:bg-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-800">
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
          <Info size={20} /> About
        </h2>
        <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
          <p><strong className="text-gray-900 dark:text-white">App:</strong> {APP_NAME}</p>
          <p><strong className="text-gray-900 dark:text-white">Version:</strong> {APP_VERSION}</p>
          <p><strong className="text-gray-900 dark:text-white">Built with:</strong> React, Vite, Tailwind CSS</p>
        </div>
        <div className="mt-4">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-indigo-600 dark:text-indigo-400 hover:underline"
          >
            <ExternalLink size={18} /> View on GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

export default Settings;