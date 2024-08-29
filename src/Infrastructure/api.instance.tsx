import { TodoistApi, Task, Project, AddTaskArgs, UpdateTaskArgs } from "@doist/todoist-api-typescript";

const api = new TodoistApi("1c080533020e3beafa4e792ba42d3c2788393741");

export const getProjects = async () => {
    try {
        const projects = await api.getProjects();
        return projects;
    } catch (error) {
        console.error("Erreur lors de la récupération des projets:", error);
        throw error;
    }
};

export const addProject = async (name: string): Promise<Project> => {
    try {
        const project = await api.addProject({ name });
        console.log("Projet ajouté:", project);
        return project;
    } catch (error) {
        console.error("Erreur lors de l'ajout du projet:", error);
        throw error;
    }
};

export const addTask = async (taskData: AddTaskArgs): Promise<Task> => {
    try {
        const task = await api.addTask(taskData);
        console.log("Tâche ajoutée:", task);
        return task;
    } catch (error) {
        console.error("Erreur lors de l'ajout de la tâche:", error);
        throw error;
    }
};

export const getTasks = async (): Promise<Task[]> => {
    try {
        return await api.getTasks();
    } catch (error) {
        console.error("Erreur lors de la récupération des tâches:", error);
        throw error;
    }
};

export const getProjectById = async (projectId: string): Promise<Project> => {
    try {
        return await api.getProject(projectId);
    } catch (error) {
        console.error(`Erreur lors de la récupération du projet avec l'ID ${projectId}:`, error);
        throw error;
    }
};

export const updateTask = async (taskId: string, taskData: UpdateTaskArgs): Promise<Task> => {
    try {
        return await api.updateTask(taskId, taskData);
    } catch (error) {
        console.error(`Erreur lors de la mise à jour de la tâche avec l'ID ${taskId}:`, error);
        throw error;
    }
};

export const deleteTask = async (taskId: string): Promise<void> => {
    try {
        await api.deleteTask(taskId);
    } catch (error) {
        console.error(`Erreur lors de la suppression de la tâche avec l'ID ${taskId}:`, error);
        throw error;
    }
};

export const updateProject = async (projectId: string, name: string): Promise<Project> => {
    try {
        return await api.updateProject(projectId, { name });
    } catch (error) {
        console.error(`Erreur lors de la mise à jour du projet avec l'ID ${projectId}:`, error);
        throw error;
    }
};

export const deleteProject = async (projectId: string): Promise<void> => {
    try {
        await api.deleteProject(projectId);
    } catch (error) {
        console.error(`Erreur lors de la suppression du projet avec l'ID ${projectId}:`, error);
        throw error;
    }
};

export const closeTask = async (taskId: string): Promise<void> => {
    try {
        await api.closeTask(taskId);
    } catch (error) {
        console.error(`Erreur lors de la fermeture de la tâche avec l'ID ${taskId}:`, error);
        throw error;
    }
};

export const reopenTask = async (taskId: string): Promise<void> => {
    try {
        await api.reopenTask(taskId);
    } catch (error) {
        console.error(`Erreur lors de la réouverture de la tâche avec l'ID ${taskId}:`, error);
        throw error;
    }
};
