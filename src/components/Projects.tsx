import { motion } from 'framer-motion';
import jobMarketImg from '../assets/images/Job_Market_Analyzer.jpg';
import rightKeeperImg from '../assets/images/AI_Law_Helper.jpg';
import propInsightImg from '../assets/images/PropInsight.jpg';
import rexburgRentalImg from '../assets/images/Rexburg_Rental.jpg';
import centKoreaImg from '../assets/images/cent_korea_website.jpg';

const projects = [
  {
    id: 1,
    title: 'Job Market Analyzer',
    company: 'Project',
    description: 'A comprehensive tool for analyzing job market trends, extracting insights, and visualizing data to help job seekers and recruiters make informed decisions.',
    tech: ['Data Analysis', 'Python', 'Visualization'],
    link: 'https://rtmvtyktedva47vb7psekx.streamlit.app/',
    github: 'https://github.com/nhs102/job-market-analyzer/blob/main/README.md',
    image: jobMarketImg
  },
  {
    id: 2,
    title: 'My Right Keeper',
    company: 'Project',
    description: 'An application designed to help users understand and protect their legal rights, providing accessible information and resources.',
    tech: ['Web Development', 'UI/UX', 'Frontend'],
    link: 'https://webapppy-rrdnk9acqomznvdt27osh9.streamlit.app/',
    github: 'https://github.com/nhs102/my-right-keeper/blob/main/README.md',
    image: rightKeeperImg
  },
  {
    id: 3,
    title: 'PropInsight Korea Real Estate',
    company: 'Project',
    description: 'A real estate analysis platform focusing on the Korean property market, offering insights, trends, and property valuations.',
    tech: ['Data Science', 'Real Estate', 'Analytics'],
    link: 'https://prop-insight-korea-real-estate.vercel.app/',
    github: 'https://github.com/nhs102/PropInsight-Korea_Real_Estate/blob/main/README.md',
    image: propInsightImg
  },
  {
    id: 4,
    title: 'BYUI Rexburg Rental',
    company: 'Project',
    description: 'A platform tailored for BYU-Idaho students to find, compare, and review rental properties in the Rexburg area.',
    tech: ['Web Development', 'Database', 'React'],
    link: 'https://byui-rexburg-rental.vercel.app/',
    github: 'https://github.com/nhs102/BYUI_Rexburg_Rental/blob/master/README.md',
    image: rexburgRentalImg
  },
  {
    id: 5,
    title: 'Cent Korea',
    company: 'Project',
    description: 'A corporate website for Cent Korea, showcasing their services, company profile, and business solutions.',
    tech: ['Web Development', 'Frontend', 'UI/UX'],
    link: 'https://cent-korea-website-29yk.vercel.app/',
    github: '',
    image: centKoreaImg
  }
];

export default function Projects() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    },
    exit: { opacity: 0, y: -20, transition: { duration: 0.3 } }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <motion.section 
      className="min-h-[calc(100vh-5rem)] py-20 bg-transparent"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-extrabold text-white text-center mb-12"
        >
          Projects
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <motion.div 
              variants={cardVariants}
              key={project.id} 
              className="bg-white/5 border border-white/10 rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col group transform hover:-translate-y-1"
            >
              <a href={project.link || project.github} target="_blank" rel="noopener noreferrer" className="block h-48 w-full overflow-hidden relative bg-gray-800">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center z-10">
                  <svg className="w-10 h-10 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </div>
              </a>
              <div className="p-6 flex-grow flex flex-col">
                <div className="text-sm font-semibold text-blue-400 mb-1">{project.company}</div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">{project.title}</h3>
                <p className="text-gray-400 mb-4 text-sm leading-relaxed flex-grow">{project.description}</p>
                <div className="flex flex-wrap gap-2 mt-auto mb-4">
                  {project.tech.map((tech, index) => (
                    <span key={index} className="px-3 py-1 bg-blue-900/50 text-blue-200 border border-blue-500/20 text-xs rounded-full font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3 mt-2">
                  {project.link && project.link !== project.github && (
                    <a 
                      href={project.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex-1 text-center py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded transition-colors"
                      onClick={(e) => e.stopPropagation()}
                    >
                      Live Demo
                    </a>
                  )}
                  {project.github && (
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex-1 text-center py-2 bg-white/10 hover:bg-white/20 text-white text-sm font-semibold rounded transition-colors"
                      onClick={(e) => e.stopPropagation()}
                    >
                      GitHub
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
