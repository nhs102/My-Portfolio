import { motion } from 'framer-motion';

const educationData = [
  {
    id: 1,
    date: 'Sep 2020 - Present',
    title: 'Bachelor’s Degree – Data Science',
    subtitle: 'Brigham Young University - Idaho',
    description: 'Focusing on data engineering, machine learning, and software development.'
  },
  {
    id: 2,
    date: 'Sep 2025',
    title: '3rd Place @ AI Hackathon',
    subtitle: 'Weber State University',
    description: 'Placed 3rd out of 125 participants by developing an innovative AI solution.',
    link: 'https://devpost.com/software/haptic-device-for-hearing-impaired?ref_content=my-projects-tab&ref_feature=my_projects'
  },
  {
    id: 3,
    date: 'Nov 2025',
    title: '3rd Place @ CS Major AI Hackathon',
    subtitle: 'Brigham Young University - Idaho',
    description: 'Placed 3rd out of 110 participants with a context-aware LLM application.',
    link: 'https://devpost.com/software/imprint-success-dna?ref_content=my-projects-tab&ref_feature=my_projects'
  }
];

const experienceData = [
  {
    id: 1,
    date: 'May 2023 - Dec 2024',
    title: 'AI & Web Platform Developer',
    subtitle: 'JT Mathematics (South Korea)',
    description: 'Architected and co-developed a data-driven educational platform, integrating AI-assisted analytics to evaluate student performance. Designed intuitive web interfaces to deliver custom remedial plans, improving academic outcomes by 40% and driving a 25% increase in program re-subscription rates.'
  },
  {
    id: 2,
    date: 'Mar 2020 - Aug 2021',
    title: 'Web & System Analysis',
    subtitle: 'KT Corporation',
    description: 'Redesigned web application architectures and UI/UX flows, resulting in a measurable 30% increase in user workflow efficiency.'
  },
  {
    id: 3,
    date: 'Apr 2019 - Mar 2020',
    title: 'Digital Marketing & Content Manager',
    subtitle: 'EnglishConnect',
    description: 'Managed digital marketing campaigns with a monthly budget of $1,000, targeting a 15–30 age demographic. Executed SEO, paid advertising, and traffic optimization while producing promotional video content for Facebook and Instagram. Managed the official Instagram page, achieving a 4% Click-Through Rate (CTR) on ads, with a 40% conversion rate of clicks leading to actual program subscriptions and class participation.'
  },
  {
    id: 4,
    date: 'Nov 2017 - Apr 2018',
    title: 'Business Intelligence Analyst',
    subtitle: 'Cent Korea',
    description: 'Architected and deployed the official company website. Engineered an automated data processing platform using Node.js and SQL, driving $200K in annual revenue growth.'
  }
];

export default function Resume() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    },
    exit: { opacity: 0, y: -20, transition: { duration: 0.3 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-extrabold text-white text-center mb-16"
        >
          Resume
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-8">
          {/* Education Column */}
          <div>
            <motion.div variants={itemVariants} className="mb-8 pl-4">
              <h3 className="text-2xl font-bold text-blue-400 tracking-wide">
                EDUCATION & AWARDS
              </h3>
              <p className="text-sm text-gray-400 mt-1">
                * Click on the hackathon awards to view the project details.
              </p>
            </motion.div>
            <div className="border-l-2 border-gray-700 ml-4">
              {educationData.map((item) => {
                const CardContent = (
                  <div className="bg-white/5 p-6 rounded-lg shadow-sm hover:shadow-xl transition-all duration-300 transform group-hover:-translate-y-2 border border-white/10 hover:border-blue-500/50 relative">
                    <span className="text-blue-400 text-sm font-bold tracking-wider">{item.date}</span>
                    <h4 className="text-xl font-bold text-white mt-2 pr-6">{item.title}</h4>
                    <h5 className="text-gray-400 text-sm font-medium mb-3">{item.subtitle}</h5>
                    <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
                    {item.link && (
                      <div className="absolute top-6 right-6 text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                          <polyline points="15 3 21 3 21 9"></polyline>
                          <line x1="10" y1="14" x2="21" y2="3"></line>
                        </svg>
                      </div>
                    )}
                  </div>
                );

                return (
                  <motion.div variants={itemVariants} key={item.id} className="mb-10 relative pl-8 group">
                    {/* Timeline Dot */}
                    <div className="absolute w-4 h-4 bg-blue-500 rounded-full -left-[9px] top-1 border-4 border-gray-800 group-hover:bg-blue-400 group-hover:scale-125 transition-all duration-300"></div>
                    
                    {/* Card */}
                    {item.link ? (
                      <a href={item.link} target="_blank" rel="noopener noreferrer" className="block">
                        {CardContent}
                      </a>
                    ) : (
                      CardContent
                    )}
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Experience Column */}
          <div>
            <motion.h3 variants={itemVariants} className="text-2xl font-bold text-blue-400 mb-8 pl-4 tracking-wide">
              EXPERIENCE
            </motion.h3>
            <div className="border-l-2 border-gray-700 ml-4">
              {experienceData.map((item) => (
                <motion.div variants={itemVariants} key={item.id} className="mb-10 relative pl-8 group">
                  {/* Timeline Dot */}
                  <div className="absolute w-4 h-4 bg-blue-500 rounded-full -left-[9px] top-1 border-4 border-gray-800 group-hover:bg-blue-400 group-hover:scale-125 transition-all duration-300"></div>
                  
                  {/* Card */}
                  <div className="bg-white/5 p-6 rounded-lg shadow-sm hover:shadow-xl transition-all duration-300 transform group-hover:-translate-y-2 border border-white/10 hover:border-blue-500/50">
                    <span className="text-blue-400 text-sm font-bold tracking-wider">{item.date}</span>
                    <h4 className="text-xl font-bold text-white mt-2">{item.title}</h4>
                    <h5 className="text-gray-400 text-sm font-medium mb-3">{item.subtitle}</h5>
                    <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
