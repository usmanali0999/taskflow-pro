import { NavLink } from 'react-router-dom';
import { 
  LayoutDashboard, 
  ListTodo, 
  CheckCircle2, 
  Settings,
  Zap
} from 'lucide-react';
import { APP_NAME } from '../../utils/constants';

const Sidebar = () => {
  const menuItems = [
    { path: '/', label: 'Dashboard', icon: LayoutDashboard },
    { path: '/tasks', label: 'All Tasks', icon: ListTodo },
    { path: '/completed', label: 'Completed', icon: CheckCircle2 },
    { path: '/settings', label: 'Settings', icon: Settings },
  ];

  return (
    <aside className="hidden lg:flex flex-col w-64 bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-800 h-screen sticky top-0">
      {/* Logo */}
      <div className="p-6 border-b border-gray-200 dark:border-gray-800">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center">
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
                `flex items-center gap-3 px-4 py-3 rounded-lg transition-all font-medium ${
                  isActive
                    ? 'bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400'
                    : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800'
                }`
              }
            >
              <Icon size={20} />
              <span>{item.label}</span>
            </NavLink>
          );
        })}
      </nav>

      {/* Footer */}
      <div className="p-4 border-t border-gray-200 dark:border-gray-800">
        <div className="bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl p-4 text-white">
          <p className="text-sm font-semibold mb-1">Pro Tip 💡</p>
          <p className="text-xs opacity-90">
            Set priorities to stay focused on what matters most!
          </p>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;