import { useState } from 'react';
import { Check, Trash2, Edit2, Calendar, Flag } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTasks } from '../../context/TaskContext';
import { PRIORITY_COLORS, PRIORITY_COLORS_DARK, CATEGORIES } from '../../utils/constants';
import { formatDate, isOverdue, isToday } from '../../utils/helpers';
import Modal from '../ui/Modal';
import Button from '../ui/Button';
import TaskForm from './TaskForm';

const TaskCard = ({ task }) => {
  const { toggleTask, deleteTask } = useTasks();
  const [showDelete, setShowDelete] = useState(false);
  const [showEdit, setShowEdit] = useState(false);

  const category = CATEGORIES.find((c) => c.id === task.category) || CATEGORIES[4];
  const overdue = !task.completed && isOverdue(task.dueDate);
  const today = isToday(task.dueDate);

  return (
    <>
      <motion.div
        layout
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9 }}
        className={`bg-white dark:bg-gray-900 rounded-xl p-5 border border-gray-200 dark:border-gray-800 hover:shadow-lg transition-all ${
          task.completed ? 'opacity-60' : ''
        }`}
      >
        <div className="flex items-start gap-4">
          {/* Checkbox */}
          <button
            onClick={() => toggleTask(task.id)}
            className={`mt-1 w-6 h-6 rounded-lg border-2 flex items-center justify-center flex-shrink-0 transition-all ${
              task.completed
                ? 'bg-green-500 border-green-500'
                : 'border-gray-300 dark:border-gray-600 hover:border-indigo-500'
            }`}
          >
            {task.completed && <Check size={14} className="text-white" />}
          </button>

          {/* Content */}
          <div className="flex-1 min-w-0">
            <h3
              className={`font-semibold text-gray-900 dark:text-white mb-1 ${
                task.completed ? 'line-through' : ''
              }`}
            >
              {task.title}
            </h3>
            {task.description && (
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
                {task.description}
              </p>
            )}

            {/* Meta Info */}
            <div className="flex flex-wrap items-center gap-2">
              {/* Priority */}
              <span
                className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-xs font-medium border ${PRIORITY_COLORS[task.priority]} ${PRIORITY_COLORS_DARK[task.priority]}`}
              >
                <Flag size={12} />
                {task.priority}
              </span>

              {/* Category */}
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-medium bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300">
                <span className={`w-2 h-2 rounded-full ${category.color}`}></span>
                {category.name}
              </span>

              {/* Due Date */}
              {task.dueDate && (
                <span
                  className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-xs font-medium ${
                    overdue
                      ? 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400'
                      : today
                      ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400'
                      : 'bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300'
                  }`}
                >
                  <Calendar size={12} />
                  {overdue ? 'Overdue: ' : today ? 'Today' : formatDate(task.dueDate)}
                </span>
              )}
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-1">
            <button
              onClick={() => setShowEdit(true)}
              className="p-2 rounded-lg text-gray-400 hover:text-indigo-600 hover:bg-indigo-50 dark:hover:bg-indigo-900/30 transition"
            >
              <Edit2 size={16} />
            </button>
            <button
              onClick={() => setShowDelete(true)}
              className="p-2 rounded-lg text-gray-400 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-900/30 transition"
            >
              <Trash2 size={16} />
            </button>
          </div>
        </div>
      </motion.div>

      {/* Delete Modal */}
      <Modal
        isOpen={showDelete}
        onClose={() => setShowDelete(false)}
        title="Delete Task?"
      >
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          Are you sure you want to delete <strong>"{task.title}"</strong>? This action cannot be undone.
        </p>
        <div className="flex justify-end gap-3">
          <Button variant="secondary" onClick={() => setShowDelete(false)}>
            Cancel
          </Button>
          <Button
            variant="danger"
            onClick={() => {
              deleteTask(task.id);
              setShowDelete(false);
            }}
          >
            Delete
          </Button>
        </div>
      </Modal>

      {/* Edit Modal */}
      <Modal
        isOpen={showEdit}
        onClose={() => setShowEdit(false)}
        title="Edit Task"
      >
        <TaskForm
          initialData={task}
          onClose={() => setShowEdit(false)}
          isEdit={true}
        />
      </Modal>
    </>
  );
};

export default TaskCard;