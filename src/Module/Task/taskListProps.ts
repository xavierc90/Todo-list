import { Task } from "./task.type";

export type TaskListProps = {
    tasks: Task[];
    onToggleTaskCompleted: (task: Task) => void;
    onEditTask: (task: Task) => void;
    onDeleteTask: (taskId: string) => void;
    onSaveTaskEdit: () => void;
    editingTaskId: string | null;
    editedTaskContent: string;
    setEditedTaskContent: (content: string) => void;
    loadingTaskId: string | null;
  };