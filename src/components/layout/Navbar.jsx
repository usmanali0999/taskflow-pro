import { Moon, Sun, Bell, Search } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import { getGreeting } from '../../utils/helpers';

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 sticky top-0 z-30">
      <div className="flex items-center justify-between px-6 py-4">
        {/* Greeting */}
        <div>
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
            {getGreeting()} 👋
          </h2>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Let's make today productive
          </p>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <button className="p-2.5 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition text-gray-600 dark:text-gray-300">
            <Search size={20} />
          </button>
          <button className="p-2.5 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition text-gray-600 dark:text-gray-300 relative">
            <Bell size={20} />
            <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full"></span>
          </button>
          <button
            onClick={toggleTheme}
            className="p-2.5 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition text-gray-600 dark:text-gray-300"
          >
            {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;