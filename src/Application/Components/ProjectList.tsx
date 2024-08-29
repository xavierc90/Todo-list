import { FaRegTrashAlt } from "react-icons/fa";
import { ProjectListProps } from '../../Module/Project/projectListProps';

export const ProjectList: React.FC<ProjectListProps> = ({ projects, onProjectClick, onDeleteProject, loadingTaskId }) => {
  return (
    <ul className='flex gap-4 mt-10'>
      {projects.map(project => (
        <li
          key={project.id}
          className='flex items-center space-x-4 text-white cursor-pointer bg-gray px-5 py-2'
          onClick={() => onProjectClick(project.id)}
        >
          <span>{project.name}</span>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onDeleteProject(project.id);
            }}
            disabled={loadingTaskId === project.id}
            className='text-red-500 rounded'
          >
            <FaRegTrashAlt />
          </button>
        </li>
      ))}
    </ul>
  );
};