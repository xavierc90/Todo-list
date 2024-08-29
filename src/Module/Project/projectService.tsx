import { deleteProject, addProject } from '../../Infrastructure/api.instance';
import { Project } from './project.type';

export const removeProject = (
  projectId: string,
  projects: Project[],
  setProjects: (projects: Project[]) => void,
  setLoadingTaskId: (id: string | null) => void,
  setSelectedProjectId: (id: string | null) => void
) => {
  setLoadingTaskId(projectId);
  deleteProject(projectId)
    .then(() => {
      setProjects(projects.filter(project => project.id !== projectId));
      setLoadingTaskId(null);
      setSelectedProjectId(null);
    })
    .catch((error) => {
      console.error("Erreur lors de la suppression du projet :", error);
      setLoadingTaskId(null);
    });
};

export const createProject = (
  newProject: string,
  projects: Project[],
  setProjects: (projects: Project[]) => void,
  setNewProject: (value: string) => void
) => {
  if (newProject.trim() === '') return;

  addProject(newProject)
    .then((project) => {
      setProjects([...projects, project]);
      setNewProject('');
    })
    .catch((error) => {
      console.error("Erreur lors de l'ajout du projet :", error);
    });
};
