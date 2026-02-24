import { motion, type Variants } from 'framer-motion';

const SkillCard = ({ tech, role, description }: { tech: string; role: string; description: string }) => (
  <div className="bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-colors duration-300">
    <div className="flex items-center justify-between mb-4">
      <h3 className="text-xl font-bold text-white">{tech}</h3>
      <span className="text-sm font-medium text-blue-400 bg-blue-900/30 px-3 py-1 rounded-full">{role}</span>
    </div>
    <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
  </div>
);

export default function Skills() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    },
    exit: { opacity: 0, y: -20, transition: { duration: 0.3 } }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <motion.section 
      className="min-h-[calc(100vh-5rem)] py-20 bg-transparent flex items-center"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        {/* Header Section */}
        <motion.div variants={itemVariants} className="flex flex-col md:flex-row justify-between items-start md:items-center mb-20 gap-8">
          <div className="max-w-xl">
            <h2 className="text-xl text-blue-400 font-serif italic mb-2">Core Competencies</h2>
            <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight tracking-tight">
              Technical Expertise
            </h1>
          </div>
          <p className="text-gray-400 max-w-md text-sm leading-relaxed">
            Building <strong className="text-white">scalable web platforms</strong> and <strong className="text-white">data-driven applications</strong>. I focus on maintainable architecture, clean code, and delivering practical business value.
          </p>
        </motion.div>

        {/* 4 Large Circular Icons */}
        <motion.div variants={itemVariants} className="flex flex-wrap justify-center md:justify-between gap-8 mb-24">
          {/* Figma */}
          <div className="w-32 h-32 rounded-full border border-gray-700/50 flex items-center justify-center hover:border-blue-500/50 hover:bg-blue-900/10 transition-all duration-300 group">
            <svg viewBox="0 0 38 57" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 group-hover:scale-110 transition-transform duration-300">
              <path d="M19 28.5a9.5 9.5 0 1 1 19 0 9.5 9.5 0 0 1-19 0z" fill="#1ABCFE"/>
              <path d="M0 47.5a9.5 9.5 0 0 1 9.5-9.5H19v9.5a9.5 9.5 0 1 1-19 0z" fill="#0ACF83"/>
              <path d="M19 0v19H9.5a9.5 9.5 0 1 1 0-19H19z" fill="#F24E1E"/>
              <path d="M19 19v19H9.5a9.5 9.5 0 1 1 0-19H19z" fill="#A259FF"/>
              <path d="M38 9.5a9.5 9.5 0 1 1-19 0 9.5 9.5 0 0 1 19 0z" fill="#FF7262"/>
            </svg>
          </div>
          {/* React */}
          <div className="w-32 h-32 rounded-full border border-gray-700/50 flex items-center justify-center hover:border-blue-500/50 hover:bg-blue-900/10 transition-all duration-300 group">
            <svg viewBox="-11.5 -10.23174 23 20.46348" xmlns="http://www.w3.org/2000/svg" className="w-14 h-14 text-[#61DAFB] group-hover:scale-110 transition-transform duration-300">
              <circle cx="0" cy="0" r="2.05" fill="currentColor"/>
              <g stroke="currentColor" strokeWidth="1" fill="none">
                <ellipse rx="11" ry="4.2"/>
                <ellipse rx="11" ry="4.2" transform="rotate(60)"/>
                <ellipse rx="11" ry="4.2" transform="rotate(120)"/>
              </g>
            </svg>
          </div>
          {/* Python */}
          <div className="w-32 h-32 rounded-full border border-gray-700/50 flex items-center justify-center hover:border-blue-500/50 hover:bg-blue-900/10 transition-all duration-300 group">
            <svg viewBox="0 0 110 110" xmlns="http://www.w3.org/2000/svg" className="w-14 h-14 group-hover:scale-110 transition-transform duration-300">
              <path d="M53.8 3.5c-25.1 0-24 10.8-24 10.8l.1 11.2h24.8v3.5H23.3s-11.5-1.1-11.5 25.3c0 26.4 10 25.3 10 25.3h10.8V68.2s-.1-12.2 12-12.2h25.1s11.8.1 11.8-11.5V14.6s1.3-11.1-27.7-11.1zm-15.6 8.3c2.1 0 3.8 1.7 3.8 3.8 0 2.1-1.7 3.8-3.8 3.8-2.1 0-3.8-1.7-3.8-3.8 0-2.1 1.7-3.8 3.8-3.8z" fill="#387EB8"/>
              <path d="M55.5 106.5c25.1 0 24-10.8 24-10.8l-.1-11.2H54.6v-3.5h31.4s11.5 1.1 11.5-25.3c0-26.4-10-25.3-10-25.3H76.7v11.4s.1 12.2-12 12.2H39.6s-11.8-.1-11.8 11.5v29.9s-1.3 11.1 27.7 11.1zm15.6-8.3c-2.1 0-3.8-1.7-3.8-3.8 0-2.1 1.7-3.8 3.8-3.8 2.1 0 3.8 1.7 3.8 3.8 0 2.1-1.7 3.8-3.8 3.8z" fill="#FFE873"/>
            </svg>
          </div>
          {/* Code */}
          <div className="w-32 h-32 rounded-full border border-gray-700/50 flex items-center justify-center hover:border-blue-500/50 hover:bg-blue-900/10 transition-all duration-300 group">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-12 h-12 text-white group-hover:scale-110 transition-transform duration-300">
              <polyline points="16 18 22 12 16 6"></polyline>
              <polyline points="8 6 2 12 8 18"></polyline>
            </svg>
          </div>
        </motion.div>

        {/* Skills Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <motion.div variants={itemVariants}>
            <SkillCard 
              tech="React & Next.js" 
              role="Frontend Architecture" 
              description="Designed scalable SPA structures and component-driven UI. Focused on state management, responsive design, and optimizing user experiences for complex data platforms." 
            />
          </motion.div>
          <motion.div variants={itemVariants}>
            <SkillCard 
              tech="Node.js & Express" 
              role="Backend & API Design" 
              description="Developed robust RESTful APIs to handle large volumes of data. Implemented secure authentication, database routing, and seamless frontend-backend integration." 
            />
          </motion.div>
          <motion.div variants={itemVariants}>
            <SkillCard 
              tech="Python & Streamlit" 
              role="Data Pipeline & Visualization" 
              description="Built automated data scraping pipelines and transformed raw datasets into interactive, visual dashboards for real-time market analysis." 
            />
          </motion.div>
          <motion.div variants={itemVariants}>
            <SkillCard 
              tech="AI Integration" 
              role="LLM Orchestration" 
              description="Integrated OpenAI models to translate complex domain knowledge (e.g., legal jargon) into plain language, improving information accessibility for end-users." 
            />
          </motion.div>
          <motion.div variants={itemVariants}>
            <SkillCard 
              tech="Adobe Creative Suite" 
              role="Content Strategy & Production" 
              description="Produced high-quality promotional videos using Premiere Pro and After Effects, and built scalable UI design systems using Figma." 
            />
          </motion.div>
          <motion.div variants={itemVariants}>
            <SkillCard 
              tech="Vercel & Firebase" 
              role="Deployment & Cloud Services" 
              description="Managed CI/CD pipelines for automated deployments. Utilized cloud databases and edge networks to ensure fast, reliable, and globally accessible applications." 
            />
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
