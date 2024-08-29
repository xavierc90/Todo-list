import { addTask, deleteTask, updateTask } from '../../Infrastructure/api.instance';
import { Task } from '../Module/task.type';

export const createTask = (
  newTask: string,
  selectedProjectId: string | null,
  tasks: Task[],
  setTasks: (tasks: Task[]) => void,
  setNewTask: (value: string) => void
) => {
  if (newTask.trim() === '' || !selectedProjectId) return;

  addTask({ content: newTask, projectId: selectedProjectId })
    .then((task) => {
      setTasks([...tasks, task]);
      setNewTask('');
    })
    .catch((error) => {
      console.error("Erreur lors de l'ajout de la tâche :", error);
    });
};

export const removeTask = (
  taskId: string,
  tasks: Task[],
  setTasks: (tasks: Task[]) => void,
  setLoadingTaskId: (id: string | null) => void
) => {
  setLoadingTaskId(taskId);
  deleteTask(taskId)
    .then(() => {
      setTasks(tasks.filter(task => task.id !== taskId));
      setLoadingTaskId(null);
    })
    .catch((error) => {
      console.error("Erreur lors de la suppression de la tâche :", error);
      setLoadingTaskId(null);
    });
};

export const editTask = (
  taskId: string,
  newContent: string,
  tasks: Task[],
  setTasks: (tasks: Task[]) => void,
  setLoadingTaskId: (id: string | null) => void,
  setEditingTaskId: (id: string | null) => void
) => {
  setLoadingTaskId(taskId);
  updateTask(taskId, { content: newContent })
    .then((updatedTask) => {
      setTasks(tasks.map(task => task.id === taskId ? updatedTask : task));
      setLoadingTaskId(null);
      setEditingTaskId(null);
    })
    .catch((error) => {
      console.error("Erreur lors de la mise à jour de la tâche :", error);
      setLoadingTaskId(null);
    });
};

export const toggleTaskCompleted = (
  task: Task,
  tasks: Task[],
  setTasks: (tasks: Task[]) => void,
  setLoadingTaskId: (id: string | null) => void
) => {
  setLoadingTaskId(task.id);
  const updatedTask = { ...task, isCompleted: !task.isCompleted };
  updateTask(task.id, updatedTask)
    .then(() => {
      setTasks(tasks.map(t => t.id === task.id ? updatedTask : t));
      setLoadingTaskId(null);
    })
    .catch((error) => {
      console.error("Erreur lors de la mise à jour de la tâche :", error);
      setLoadingTaskId(null);
    });
};
