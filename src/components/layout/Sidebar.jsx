import { NavLink } from 'react-router-dom';
import { 
  LayoutDashboard, 
  ListTodo, 
  CheckCircle2, 
  Settings,
  Zap
} from 'lucide-react';
import { APP_NAME } from '../../utils/constants';
import { useTasks } from '../../context/TaskContext';

const Sidebar = () => {
  const { tasks } = useTasks();
  
  const activeCount = tasks.filter(t => !t.completed).length;
  const completedCount = tasks.filter(t => t.completed).length;

  const menuItems = [
    { path: '/', label: 'Dashboard', icon: LayoutDashboard, badge: null },
    { path: '/tasks', label: 'All Tasks', icon: ListTodo, badge: activeCount },
    { path: '/completed', label: 'Completed', icon: CheckCircle2, badge: completedCount },
    { path: '/settings', label: 'Settings', icon: Settings, badge: null },
  ];

  return (
<aside className="flex flex-col w-64 bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-800 h-screen lg:sticky top-0">      {/* Logo */}
      <div className="p-6 border-b border-gray-200 dark:border-gray-800">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
            <Zap className="text-white" size={22} />
          </div>
          <div>
            <h1 className="font-bold text-lg text-gray-900 dark:text-white">
              {APP_NAME}
            </h1>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              Productivity Suite
            </p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-1">
        {menuItems.map((item) => {
          const Icon = item.icon;
          return (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === '/'}
              className={({ isActive }) =>
                `flex items-center justify-between px-4 py-3 rounded-lg transition-all font-medium group ${
                  isActive
                    ? 'bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-md'
                    : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <div className="flex items-center gap-3">
                    <Icon size={20} />
                    <span>{item.label}</span>
                  </div>
                  {item.badge !== null && item.badge > 0 && (
                    <span className={`px-2 py-0.5 rounded-full text-xs font-bold ${
                      isActive 
                        ? 'bg-white/20 text-white' 
                        : 'bg-indigo-100 dark:bg-indigo-900/50 text-indigo-600 dark:text-indigo-400'
                    }`}>
                      {item.badge}
                    </span>
                  )}
                </>
              )}
            </NavLink>
          );
        })}
      </nav>

      {/* Footer */}
      <div className="p-4 border-t border-gray-200 dark:border-gray-800">
        <div className="bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl p-4 text-white shadow-lg">
          <p className="text-sm font-semibold mb-1">Pro Tip 💡</p>
          <p className="text-xs opacity-90">
            Press <kbd className="px-1.5 py-0.5 bg-white/20 rounded text-xs">Ctrl+N</kbd> to add task quickly!
          </p>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;