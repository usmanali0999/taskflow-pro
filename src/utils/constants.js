// Task Priorities
export const PRIORITIES = {
  HIGH: 'high',
  MEDIUM: 'medium',
  LOW: 'low',
};

export const PRIORITY_COLORS = {
  high: 'bg-red-100 text-red-700 border-red-300',
  medium: 'bg-yellow-100 text-yellow-700 border-yellow-300',
  low: 'bg-green-100 text-green-700 border-green-300',
};

export const PRIORITY_COLORS_DARK = {
  high: 'dark:bg-red-900/30 dark:text-red-400 dark:border-red-800',
  medium: 'dark:bg-yellow-900/30 dark:text-yellow-400 dark:border-yellow-800',
  low: 'dark:bg-green-900/30 dark:text-green-400 dark:border-green-800',
};

// Task Categories
export const CATEGORIES = [
  { id: 'work', name: 'Work', color: 'bg-blue-500' },
  { id: 'personal', name: 'Personal', color: 'bg-purple-500' },
  { id: 'study', name: 'Study', color: 'bg-green-500' },
  { id: 'health', name: 'Health', color: 'bg-pink-500' },
  { id: 'other', name: 'Other', color: 'bg-gray-500' },
];

// Filter Types
export const FILTERS = {
  ALL: 'all',
  ACTIVE: 'active',
  COMPLETED: 'completed',
};

// App Info
export const APP_NAME = 'TaskFlow Pro';
export const APP_VERSION = '1.0.0';