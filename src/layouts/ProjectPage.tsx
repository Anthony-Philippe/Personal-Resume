// ProjectPage.js
import { useParams } from 'react-router-dom';
import { projects } from '../assets/projectsData';

const ProjectPage = () => {
  const { id } = useParams();
  const project = projects.find(p => p.id === parseInt(id as string));

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className="project-page p-8">
      <h1 className="text-4xl font-bold mb-4">{project.name}</h1>
      <p className="text-lg mb-6">{project.description}</p>
      <img
        src={project.imageSrc}
        alt={project.name}
        className="w-full h-auto mb-6 rounded-lg"
      />
      <a 
        href={project.githubLink} 
        target="_blank" 
        rel="noopener noreferrer"
        className="text-blue-500 hover:underline"
      >
        Voir sur GitHub
      </a>
    </div>
  );
};

export default ProjectPage;