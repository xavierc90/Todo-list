import { Project } from "./project.type";

export type ProjectListProps = {
    projects: Project[];
    onProjectClick: (projectId: string) => void;
    onDeleteProject: (projectId: string) => void;
    loadingTaskId: string | null;
  };