import { useEffect, useState } from 'react';
import { getProjects } from './../../Infrastructure/api.instance';
import { Project } from '../../Module/Project/project.type';
import { Task } from '../../Module/Task/task.type';
import { createTask, removeTask, editTask, toggleTaskCompleted } from '../../Module/Task/taskService';
import { createProject, removeProject } from '../../Module/Project/projectService';
import { FaRegTrashAlt } from "react-icons/fa";
import { MdModeEdit } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import { FaCheck } from "react-icons/fa6";

export const Home = () => {
  const [newTask, setNewTask] = useState<string>(''); 
  const [newProject, setNewProject] = useState<string>(''); 
  const [loadingTaskId, setLoadingTaskId] = useState<string | null>(null);
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null);
  const [editingTaskId, setEditingTaskId] = useState<string | null>(null);
  const [editedTaskContent, setEditedTaskContent] = useState<string>('');
  const [projects, setProjects] = useState<Project[]>([]); 
  const [tasks, setTasks] = useState<Task[]>(() => {
    const savedTasks = localStorage.getItem('tasks');
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  useEffect(() => {
    const getData = async () => {
      try {
        const ListProjects = await getProjects();
        setProjects(ListProjects);
      } catch (error) {
        console.error("Erreur lors de la récupération des données :", error);
      }
    };
    getData();
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const saveTaskEdit = () => {
    if (editingTaskId) {
      editTask(editingTaskId, editedTaskContent, tasks, setTasks, setLoadingTaskId, setEditingTaskId);
    }
  };

  const cancelTaskEdit = () => {
    setEditingTaskId(null);
    setEditedTaskContent(''); // Réinitialiser le contenu de la tâche en édition
  };

  const startEditingTask = (task: Task) => {
    setEditingTaskId(task.id);
    setEditedTaskContent(task.content);
  };

  const filteredTasks = selectedProjectId
    ? tasks.filter(task => task.projectId === selectedProjectId)
    : [];

  const totalTasks = filteredTasks.length;
  const incompleteTasks = filteredTasks.filter(task => !task.isCompleted).length;

  return (
    <div className='flex h-screen'>
      <nav className='bg-gray w-2/12 h-full flex flex-col justify-center items-center hidden lg:block'>
        <a href="#" onClick={() => setSelectedProjectId(null)} className="flex justify-center">
          <img src="../public/logo-todo.svg" className='size-36 mt-8' alt='Logo Todo'/>
        </a>
        <ul className='pt-12 w-full text-center'>
          <li className='bg-dark text-lg font-bold'>
            <a href="#" onClick={() => setSelectedProjectId(null)}>Home</a> 
          </li>
        </ul>
      </nav>
      
      <div className='w-full flex flex-col'>
        <header className='bg-gray uppercase py-8 text-center flex justify-center items-center'>
          <a href="#" onClick={() => setSelectedProjectId(null)} className="flex items-center">
            <img src="../public/logo-todo.svg" alt="Logo de l'application Todo" width={40} className='mr-2 lg:hidden' />
            <h1 className='text-red font-semibold text-4xl'>todo</h1>
          </a>
        </header>
        <div className='flex flex-col items-center text-white p-8 flex-grow overflow-auto'>
          <h1 className='text-4xl mt-8 mb-6 font-bold'>{selectedProjectId ? projects.find(p => p.id === selectedProjectId)?.name : 'Liste des projets'}</h1>

          {selectedProjectId && (
            <div className='my-5 text-center text-md text-red'>
              <p>Total de tâches : {totalTasks}</p>
              <p>Tâches à faire : {incompleteTasks}</p>
            </div>
          )}

          {!selectedProjectId && (
            <div className='mt-5 flex gap-4'>
              <input
                type="text"
                value={newProject}
                onChange={(e) => setNewProject(e.target.value)}
                placeholder='Nom du projet'
                className='rounded-lg p-2 bg-gray w-[300px]'
              />
              <button
                onClick={() => createProject(newProject, projects, setProjects, setNewProject)}
                className='bg-gray text-red text-sm rounded-lg p-3 font-bold'
                disabled={newProject.trim() === ''}
              >
                Ajouter un projet
              </button>
            </div>
          )}

          {selectedProjectId && (
            <div className='mt-5 flex gap-4'>
              <input
                type="text"
                value={newTask}
                onChange={(e) => setNewTask(e.target.value)}
                placeholder='Nom de la tâche'
                className='rounded-lg p-2 bg-gray w-[250px]'
              />
              <button
                onClick={() => createTask(newTask, selectedProjectId, tasks, setTasks, setNewTask)}
                className='bg-gray text-red text-sm rounded-lg p-3 font-bold'
                disabled={newTask.trim() === ''}
              >
                Ajouter une tâche
              </button>
            </div>
          )}

          {selectedProjectId ? (
            <>
              <ul className='flex flex-col gap-5 mt-10 flex-wrap'>
                {filteredTasks.map(task => (
                  <li key={task.id} className='flex items-center text-xl flex-wrap'>
                    <input
                      type="checkbox"
                      checked={task.isCompleted}
                      onChange={() => toggleTaskCompleted(task, tasks, setTasks, setLoadingTaskId)}
                      className='mr-5'
                    />
                    {editingTaskId === task.id ? (
                      <>
                        <input
                          type="text"
                          value={editedTaskContent}
                          onChange={(e) => setEditedTaskContent(e.target.value)}
                          className='bg-dark text-white rounded flex-grow mr-10 w-[250px] bg-gray'
                        />
                        <button
                          onClick={saveTaskEdit}
                          className='text-green-500 rounded p-2'
                        >
                          <FaCheck />
                        </button>
                        <button
                          onClick={cancelTaskEdit}
                          className='text-red rounded p-2'
                        >
                          <RxCross2 />
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
                          onClick={() => startEditingTask(task)}
                          className='text-blue-500 rounded p-2'
                        >
                          <MdModeEdit />
                        </button>
                        <button
                          onClick={() => removeTask(task.id, tasks, setTasks, setLoadingTaskId)}
                          disabled={loadingTaskId === task.id}
                          className='text-red rounded p-2'
                        >
                          <FaRegTrashAlt />
                        </button>
                      </>
                    )}
                  </li>
                ))}
              </ul>
            </>
          ) : (
            <ul className='flex gap-4 mt-10 flex-wrap'>
              {projects.map(project => (
                <li
                  key={project.id}
                  className='flex items-center space-x-4 text-white cursor-pointer bg-gray px-5 py-2 flex-wrap'
                  onClick={() => setSelectedProjectId(project.id)}
                >
                  <span className=''>{project.name}</span>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      removeProject(project.id, projects, setProjects, setLoadingTaskId, setSelectedProjectId);
                    }}
                    disabled={loadingTaskId === project.id}
                    className='text-red-500 rounded'
                  >
                    <FaRegTrashAlt />
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};
