import CallToAction from '../components/CallToAction';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

// Sample project data
const projects = [
  {
    title: 'Project 1',
    description: 'Job Hunting mobile app build with react native .',
    github: 'https://github.com/nikhil109955/MobileApp',
    demo: 'https://www.example.com/project1-demo'
  },
  {
    title: 'Project 2',
    description: 'Book website using MERN.',
    github: 'https://github.com/nikhil109955/webAppOfBookWebsite',
    demo: 'https://www.example.com/project2-demo'
  }
  // Add more projects as needed
];

export default function Projects() {
  return (
    <div className='min-h-screen max-w-4xl mx-auto p-8'>
      <div className='text-center'>
        <h1 className='text-4xl font-bold mb-4'>Projects</h1>
        <p className='text-lg text-gray-600 mb-8'>
          Build fun and engaging projects while learning HTML, CSS, and JavaScript!
        </p>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
        {projects.map((project, index) => (
          <div key={index} className='bg-white rounded-lg shadow-md p-6'>
            <h2 className='text-xl font-semibold mb-2'>{project.title}</h2>
            <p className='text-gray-600 mb-4'>{project.description}</p>
            <div className='flex justify-between'>
              <a
                href={project.github}
                target='_blank'
                rel='noopener noreferrer'
                className='text-blue-500 hover:underline flex items-center'
              >
                <FaGithub className='mr-2' /> GitHub
              </a>
              {project.demo && (
                <a
                  href={project.demo}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-blue-500 hover:underline flex items-center'
                >
                  Demo
                </a>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className='flex flex-col mt-8'>
        <a
          href='https://github.com/nikhil109955'
          target='_blank'
          rel='noopener noreferrer'
          className='text-blue-500 hover:underline flex items-center'
        >
          <FaGithub className='mr-2' /> Visit my GitHub
        </a>
        <a
          href='https://www.linkedin.com/in/nikhil-kumar-419205234/'
          target='_blank'
          rel='noopener noreferrer'
          className='text-blue-500 hover:underline flex items-center mt-2'
        >
          <FaLinkedin className='mr-2' /> Connect with me on LinkedIn
        </a>
      </div>

      <CallToAction />
    </div>
  );
}
