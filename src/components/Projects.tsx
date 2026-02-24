import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { X, ChevronDown, ChevronUp } from 'lucide-react';
import jobMarketImg from '../assets/images/Job_Market_Analyzer.jpg';
import rightKeeperImg from '../assets/images/AI_Law_Helper.jpg';
import propInsightImg from '../assets/images/PropInsight.jpg';
import rexburgRentalImg from '../assets/images/Rexburg_Rental.jpg';
import centKoreaImg from '../assets/images/cent_korea_website.jpg';

const projects = [
  {
    id: 1,
    title: 'PropInsight Korea Real Estate',
    role: 'Frontend Developer',
    problem: 'Investors lacked a unified platform to analyze Korean real estate trends, leading to uninformed and risky investment decisions.',
    solution: 'Architected a modern PropTech dashboard integrating Google Maps and simulated ML price predictions to visualize real estate transactions and forecast 3-month price trends.',
    impact: 'Delivered an interactive, mobile-first analytics tool with multi-criteria filtering and watchlist persistence, demonstrating complex data visualization and state management.',
    architecture: 'React 18 → Context API → Google Maps API',
    tech: ['React', 'Google Maps API', 'Data Visualization'],
    link: 'https://prop-insight-korea-real-estate.vercel.app/',
    github: 'https://github.com/nhs102/PropInsight-Korea_Real_Estate/blob/main/README.md',
    image: propInsightImg
  },
  {
    id: 2,
    title: 'Digital Marketing & Content Creation',
    role: 'Digital Marketing & Content Manager',
    problem: 'An educational program targeting the 15-30 demographic suffered from low brand awareness and engagement.',
    solution: 'Produced high-quality promotional videos using Adobe Premiere Pro and After Effects, managed the official YouTube channel and Instagram page, and executed targeted Facebook/Instagram ad campaigns.',
    impact: 'Managed a $1,000 monthly ad budget, achieving a 4% CTR and a 40% conversion rate from clicks to actual program subscriptions and class participation.',
    architecture: 'Premiere Pro → After Effects → FB/IG Ads Manager',
    tech: ['Video Production', 'Marketing', 'Adobe CS'],
    link: 'https://www.youtube.com/watch?v=19fGuidzPoI',
    github: '',
    instagram: 'https://www.instagram.com/englishconnect.kor?igsh=MWp2NTd0cnE2NzVxOQ==',
    youtubeChannel: 'https://www.youtube.com/@%EC%9E%89%EA%B8%80%EB%A6%AC%EC%89%AC%EC%BB%A4%EB%84%A5%ED%8A%B8-k7k',
    archiveLink: 'https://web.archive.org/web/20211203101257/https://englishconnect.helpinghands.center/',
    image: 'https://img.youtube.com/vi/19fGuidzPoI/maxresdefault.jpg',
    isVideo: true,
    videoId: '19fGuidzPoI'
  },
  {
    id: 3,
    title: 'Cent Korea',
    role: 'Web Designer & Frontend Developer',
    problem: 'An outdated legacy website resulted in high bounce rates and failed to effectively attract B2B clients or showcase core services.',
    solution: 'Designed and deployed a highly responsive, SEO-optimized corporate website with a component-driven architecture for seamless content management.',
    impact: 'Boosted organic web traffic by 150%, improved page load speeds by 60%, and significantly increased B2B lead generation within the first month.',
    architecture: 'React → Tailwind CSS → Vercel Edge Network',
    tech: ['Web Development', 'Frontend', 'UI/UX'],
    link: 'https://cent-korea-website-29yk.vercel.app/',
    github: '',
    image: centKoreaImg
  },
  {
    id: 4,
    title: 'BYU-Idaho Student Housing AI',
    role: 'Full-Stack & AI Developer',
    problem: 'Students struggled to determine fair housing prices and identify cost-effective contracts due to fluctuating rent costs and scattered property data.',
    solution: 'Developed a decoupled full-stack platform featuring an AI-powered "Deal Score" that uses a Random Forest model to predict fair market rent and evaluate contract value.',
    impact: 'Empowered students to instantly identify undervalued properties through real-time AI pricing analysis, ensuring fair market rent and optimizing housing budgets.',
    architecture: 'Next.js → FastAPI → Scikit-learn (Random Forest)',
    tech: ['Next.js', 'FastAPI', 'Machine Learning'],
    link: 'https://byui-rexburg-rental.vercel.app/',
    github: 'https://github.com/nhs102/BYUI_Rexburg_Rental/blob/master/README.md',
    image: rexburgRentalImg
  },
  {
    id: 5,
    title: 'My Rights Keeper',
    role: 'AI / Full-Stack Developer',
    problem: 'Korean workers faced high barriers to understanding complex labor laws, often struggling to translate workplace issues into actionable legal terms.',
    solution: 'Developed an AI-powered RAG application that translates colloquial queries into legal terminology and retrieves real-time interpretations from the Ministry of Employment & Labor database.',
    impact: 'Achieved an 85% cache hit rate for faster responses and provided instant, accurate legal guidance to users, democratizing access to 3,380+ official legal precedents.',
    architecture: 'LangChain (RAG) → Gemini 2.5 Flash → ChromaDB',
    tech: ['LangChain', 'RAG', 'Python'],
    link: 'https://webapppy-rrdnk9acqomznvdt27osh9.streamlit.app/',
    github: 'https://github.com/nhs102/my-right-keeper/blob/main/README.md',
    image: rightKeeperImg
  },
  {
    id: 6,
    title: 'Job Market Trends Analyzer',
    role: 'Data Engineer & AI Developer',
    problem: 'Job seekers struggled to identify required skills and match their resumes against fragmented, unstructured job market data.',
    solution: 'Engineered an end-to-end ETL pipeline that scrapes real-time job postings and uses NLP to extract key skills, paired with an intelligent resume matching dashboard.',
    impact: 'Automated the extraction of tech stacks from unstructured data, providing users with instant gap analysis (Missing vs. Matched Skills) to optimize their career preparation.',
    architecture: 'Selenium (ETL) → Python NLP → Streamlit + Docker',
    tech: ['Data Engineering', 'NLP', 'Docker'],
    link: 'https://rtmvtyktedva47vb7psekx.streamlit.app/',
    github: 'https://github.com/nhs102/job-market-analyzer/blob/main/README.md',
    image: jobMarketImg
  },
  {
    id: 7,
    title: 'Vlog Video Editing & Production',
    role: 'Lead Video Editor',
    problem: 'A YouTube channel needed engaging, well-paced vlog content to capture audience attention and tell a compelling story from raw, unorganized footage.',
    solution: 'Led the post-production process, transforming raw footage into polished vlog-style videos. Focused on pacing, color grading, audio mixing, and storytelling using Adobe Premiere Pro.',
    impact: 'Delivered high-quality, engaging vlog content that enhanced channel storytelling, viewer retention, and overall production value.',
    architecture: 'Premiere Pro → Audio Mixing → Color Grading',
    tech: ['Video Editing', 'Premiere Pro', 'Storytelling'],
    link: 'https://www.youtube.com/watch?v=2oLQ77dOsnM',
    github: '',
    image: 'https://img.youtube.com/vi/2oLQ77dOsnM/maxresdefault.jpg',
    isVideo: true,
    videoId: '2oLQ77dOsnM',
    videoId2: 'OAFhUAtLSDI'
  }
];

export default function Projects() {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
  const [expandedProjects, setExpandedProjects] = useState<number[]>([]);

  const toggleExpand = (id: number) => {
    setExpandedProjects(prev => 
      prev.includes(id) ? prev.filter(pId => pId !== id) : [...prev, id]
    );
  };

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
          {projects.map((project) => {
            const isExpanded = expandedProjects.includes(project.id);
            return (
            <motion.div 
              layout
              variants={cardVariants}
              key={project.id} 
              className="bg-white/5 border border-white/10 rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col group transform hover:-translate-y-1"
            >
              {project.isVideo ? (
                <div 
                  className="block h-48 w-full overflow-hidden relative bg-gray-800 cursor-pointer"
                  onClick={() => setSelectedVideo(project.videoId || null)}
                >
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center z-10">
                    <svg className="w-12 h-12 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              ) : (
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
              )}
              <div className="p-6 flex-grow flex flex-col">
                <motion.div layout="position" className="text-sm font-semibold text-blue-400 mb-1 min-h-[40px] flex items-center">My Role: {project.role}</motion.div>
                <motion.h3 layout="position" className="text-xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors min-h-[56px]">{project.title}</motion.h3>
                
                <AnimatePresence initial={false}>
                  {isExpanded && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
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
                    </motion.div>
                  )}
                </AnimatePresence>

                <motion.div layout="position" className="flex flex-wrap gap-3 mt-4 mb-4">
                  {project.link && project.link !== project.github && (
                    project.isVideo ? (
                      <>
                        <button 
                          onClick={(e) => {
                            e.stopPropagation();
                            setSelectedVideo(project.videoId || null);
                          }}
                          className="flex-1 min-w-[100px] flex items-center justify-center py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded transition-colors"
                        >
                          {project.videoId2 ? 'Watch Vlog 1' : 'Watch Video'}
                        </button>
                        {project.videoId2 && (
                          <button 
                            onClick={(e) => {
                              e.stopPropagation();
                              setSelectedVideo(project.videoId2 || null);
                            }}
                            className="flex-1 min-w-[100px] flex items-center justify-center py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded transition-colors"
                          >
                            Watch Vlog 2
                          </button>
                        )}
                      </>
                    ) : (
                      <a 
                        href={project.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex-1 min-w-[100px] flex items-center justify-center py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded transition-colors"
                        onClick={(e) => e.stopPropagation()}
                      >
                        Live Demo
                      </a>
                    )
                  )}
                  {project.github && (
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex-1 min-w-[100px] flex items-center justify-center py-2 bg-white/10 hover:bg-white/20 text-white text-sm font-semibold rounded transition-colors"
                      onClick={(e) => e.stopPropagation()}
                    >
                      GitHub
                    </a>
                  )}
                  {project.instagram && (
                    <a 
                      href={project.instagram} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex-1 min-w-[100px] flex items-center justify-center py-2 bg-pink-600/80 hover:bg-pink-600 text-white text-sm font-semibold rounded transition-colors"
                      onClick={(e) => e.stopPropagation()}
                    >
                      Instagram
                    </a>
                  )}
                  {project.youtubeChannel && (
                    <a 
                      href={project.youtubeChannel} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex-1 min-w-[100px] flex items-center justify-center py-2 bg-red-600/80 hover:bg-red-600 text-white text-sm font-semibold rounded transition-colors"
                      onClick={(e) => e.stopPropagation()}
                    >
                      YouTube
                    </a>
                  )}
                  {project.archiveLink && (
                    <a 
                      href={project.archiveLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex-1 min-w-[100px] flex items-center justify-center py-2 bg-gray-600/80 hover:bg-gray-600 text-white text-sm font-semibold rounded transition-colors"
                      onClick={(e) => e.stopPropagation()}
                    >
                      Archive
                    </a>
                  )}
                </motion.div>

                <motion.button
                  layout="position"
                  onClick={() => toggleExpand(project.id)}
                  className="mt-auto pt-4 flex items-center justify-center gap-2 text-sm font-medium text-gray-400 hover:text-white transition-colors border-t border-white/5 w-full"
                >
                  {isExpanded ? (
                    <>Show Less <ChevronUp className="w-4 h-4" /></>
                  ) : (
                    <>View Details <ChevronDown className="w-4 h-4" /></>
                  )}
                </motion.button>
              </div>
            </motion.div>
          )})}
        </div>
      </div>

      {/* Video Modal */}
      <AnimatePresence>
        {selectedVideo && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={() => setSelectedVideo(null)}
          >
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="relative w-full max-w-5xl aspect-video bg-black rounded-xl overflow-hidden shadow-2xl border border-white/10"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                onClick={() => setSelectedVideo(null)}
                className="absolute top-4 right-4 z-10 p-2 bg-black/50 hover:bg-black/80 text-white rounded-full transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
              <iframe 
                width="100%" 
                height="100%" 
                src={`https://www.youtube.com/embed/${selectedVideo}?autoplay=1`} 
                title="YouTube video player" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
                className="absolute inset-0"
              ></iframe>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  );
}
