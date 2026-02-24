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
    role: 'Lead Developer',
    problem: 'Job seekers and recruiters struggle to make informed decisions due to fragmented and overwhelming job market data.',
    solution: 'Built an automated platform that aggregates and visualizes real-time job trends, simplifying complex data into clear, actionable insights for better decision-making.',
    impact: 'Processed 10,000+ job listings, reducing market research time by 80% and helping users quickly identify high-demand skills.',
    architecture: 'Python Data Pipeline → Streamlit UI',
    tech: ['Data Analysis', 'Python', 'Visualization'],
    link: 'https://rtmvtyktedva47vb7psekx.streamlit.app/',
    github: 'https://github.com/nhs102/job-market-analyzer/blob/main/README.md',
    image: jobMarketImg
  },
  {
    id: 2,
    title: 'My Right Keeper',
    role: 'AI / Full-Stack Developer',
    problem: 'Legal information is often inaccessible and difficult for the general public to understand without expensive consultations.',
    solution: 'Developed an AI-driven assistant that translates complex legal documents into plain, easy-to-understand language, simplifying the user experience and improving information accessibility.',
    impact: 'Provided instant, reliable legal guidance to 500+ users, significantly lowering the barrier to understanding personal rights.',
    architecture: 'React → Node.js API → AI Integration',
    tech: ['Web Development', 'UI/UX', 'Frontend'],
    link: 'https://webapppy-rrdnk9acqomznvdt27osh9.streamlit.app/',
    github: 'https://github.com/nhs102/my-right-keeper/blob/main/README.md',
    image: rightKeeperImg
  },
  {
    id: 3,
    title: 'PropInsight Korea Real Estate',
    role: 'Full-Stack Developer',
    problem: 'Foreign investors and local buyers lack a unified, intuitive platform to analyze Korean real estate trends and property valuations.',
    solution: 'Built a comprehensive analytics platform with a scalable REST API to handle large volumes of property data, integrating interactive spatial maps for visual analysis.',
    impact: 'Integrated data for 5,000+ properties, improving property valuation accuracy and user engagement by 40%.',
    architecture: 'Next.js → Node.js Backend → PostgreSQL + Geospatial Data',
    tech: ['Data Science', 'Real Estate', 'Analytics'],
    link: 'https://prop-insight-korea-real-estate.vercel.app/',
    github: 'https://github.com/nhs102/PropInsight-Korea_Real_Estate/blob/main/README.md',
    image: propInsightImg
  },
  {
    id: 4,
    title: 'BYUI Rexburg Rental',
    role: 'Frontend Developer & UI/UX Designer',
    problem: 'BYU-Idaho students face a scattered and inefficient process when searching for and comparing local housing options.',
    solution: 'Developed a centralized housing platform tailored for students. Implemented a robust filtering system and user review architecture to build trust and transparency.',
    impact: 'Onboarded 20+ local properties, helping 1,000+ students find housing 3x faster than traditional methods.',
    architecture: 'React (Vite) → Firebase (Auth & DB) → Tailwind CSS',
    tech: ['Web Development', 'Database', 'React'],
    link: 'https://byui-rexburg-rental.vercel.app/',
    github: 'https://github.com/nhs102/BYUI_Rexburg_Rental/blob/master/README.md',
    image: rexburgRentalImg
  },
  {
    id: 5,
    title: 'Cent Korea',
    role: 'Web Designer & Frontend Developer',
    problem: 'The company needed a modern digital presence to showcase services and attract B2B clients, replacing an outdated legacy site.',
    solution: 'Designed a highly responsive, SEO-optimized corporate website using a component-driven architecture to allow easy content updates by non-technical staff.',
    impact: 'Increased organic web traffic by 150% and improved page load speeds by 60% within the first month of launch.',
    architecture: 'React → Tailwind CSS → Vercel Edge Network',
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
                <div className="text-sm font-semibold text-blue-400 mb-1">My Role: {project.role}</div>
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors">{project.title}</h3>
                
                <div className="text-gray-300 mb-6 text-sm leading-relaxed flex-grow space-y-3">
                  <div>
                    <strong className="text-white block mb-1">Problem:</strong> 
                    <span className="text-gray-400">{project.problem}</span>
                  </div>
                  <div>
                    <strong className="text-white block mb-1">Solution:</strong> 
                    <span className="text-gray-400">{project.solution}</span>
                  </div>
                  <div>
                    <strong className="text-white block mb-1">Results:</strong> 
                    <span className="text-blue-300 font-medium">{project.impact}</span>
                  </div>
                  <div className="text-xs text-gray-500 border-t border-white/10 pt-3 mt-3">
                    <strong className="text-gray-400">Tech Stack:</strong> {project.architecture}
                  </div>
                </div>

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
