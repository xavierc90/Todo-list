import { FaRegTrashAlt, FaCheck } from "react-icons/fa";
import { MdModeEdit } from "react-icons/md";
import { TaskListProps } from '../../Module/Task/taskListProps';

export const TaskList: React.FC<TaskListProps> = ({
  tasks,
  onToggleTaskCompleted,
  onEditTask,
  onDeleteTask,
  onSaveTaskEdit,
  editingTaskId,
  editedTaskContent,
  setEditedTaskContent,
  loadingTaskId,
}) => {
  return (
    <ul className='flex flex-col gap-5 mt-10'>
      {tasks.map(task => (
        <li key={task.id} className='flex items-center text-xl'>
          <input
            type="checkbox"
            checked={task.isCompleted}
            onChange={() => onToggleTaskCompleted(task)}
            className='mr-5'
          />
          {editingTaskId === task.id ? (
            <>
              <input
                type="text"
                value={editedTaskContent}
                onChange={(e) => setEditedTaskContent(e.target.value)}
                className='bg-dark text-white rounded flex-grow mr-10 w-[250px]'
              />
              <button
                onClick={onSaveTaskEdit}
                className='text-green-500 rounded p-2'
              >
                <FaCheck />
              </button>
            </>
          ) : (
            <>
              <span
                className={`flex-grow mr-14 ${task.isCompleted ? 'line-through' : ''}`}
              >
                {task.content}
              </span>
              <button
                onClick={() => onEditTask(task)}
                className='text-blue-500 rounded p-2'
              >
                <MdModeEdit />
              </button>
            </>
          )}
          <button
            onClick={() => onDeleteTask(task.id)}
            disabled={loadingTaskId === task.id}
            className='text-red rounded p-2'
          >
            <FaRegTrashAlt />
          </button>
        </li>
      ))}
    </ul>
  );
};