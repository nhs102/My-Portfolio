import { motion, type Variants } from 'framer-motion';

const ProgressBar = ({ label, percentage }: { label: string; percentage: number }) => (
  <div className="w-full">
    <div className="flex justify-between mb-3">
      <span className="text-gray-200 font-medium tracking-wide">{label}</span>
      <span className="text-white font-bold">{percentage}%</span>
    </div>
    <div className="h-1.5 w-full bg-gray-800 rounded-full relative">
      <motion.div 
        initial={{ width: 0 }}
        whileInView={{ width: `${percentage}%` }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        viewport={{ once: true }}
        className="absolute top-0 left-0 h-full bg-gradient-to-r from-blue-600 to-blue-300 rounded-full"
      >
        {/* Thumb */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full border-4 border-blue-500 shadow-[0_0_12px_rgba(59,130,246,0.8)] translate-x-1/2"></div>
      </motion.div>
    </div>
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
            <h2 className="text-xl text-blue-400 font-serif italic mb-2">My Professional</h2>
            <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight tracking-tight">
              Background Skills and Accomplishments
            </h1>
          </div>
          <p className="text-gray-400 max-w-md text-sm leading-relaxed">
            Specializing in building AI-powered platforms, full-stack web applications, and data-driven solutions. Combining engineering rigor with intuitive UI/UX design to deliver impactful products.
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

        {/* Progress Bars Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
          {/* Left Column */}
          <motion.div variants={itemVariants} className="space-y-10">
            <ProgressBar label="AI & LLM Engineering" percentage={90} />
            <ProgressBar label="Data Engineering" percentage={85} />
            <ProgressBar label="UI/UX Design" percentage={80} />
          </motion.div>
          
          {/* Right Column */}
          <motion.div variants={itemVariants} className="space-y-10">
            <ProgressBar label="Full-Stack Development" percentage={85} />
            
            {/* Core Tech Box */}
            <div className="bg-white/5 rounded-xl p-8 border border-white/10 shadow-2xl mt-4">
              <ProgressBar label="Core Technologies" percentage={95} />
              <div className="flex flex-wrap items-center gap-6 mt-8 text-gray-300 font-semibold text-sm">
                <span className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-[#61DAFB]" viewBox="-11.5 -10.23174 23 20.46348" xmlns="http://www.w3.org/2000/svg"><circle cx="0" cy="0" r="2.05" fill="currentColor"/><g stroke="currentColor" strokeWidth="1" fill="none"><ellipse rx="11" ry="4.2"/><ellipse rx="11" ry="4.2" transform="rotate(60)"/><ellipse rx="11" ry="4.2" transform="rotate(120)"/></g></svg>
                  React
                </span>
                <span className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-[#339933]" viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="M64 0L10.5 30.9v66.2L64 128l53.5-30.9V30.9L64 0zm42.3 91.4L64 115.8 21.7 91.4V45.1L64 20.7l42.3 24.4v46.3z"/><path fill="currentColor" d="M64 32.5L32.5 50.7v36.4L64 105.3l31.5-18.2V50.7L64 32.5zm21.2 50.7L64 95.5 42.8 83.2V58.8L64 46.5l21.2 12.3v24.4z"/></svg>
                  Node.js
                </span>
                <span className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-[#387EB8]" viewBox="0 0 110 110" xmlns="http://www.w3.org/2000/svg"><path d="M53.8 3.5c-25.1 0-24 10.8-24 10.8l.1 11.2h24.8v3.5H23.3s-11.5-1.1-11.5 25.3c0 26.4 10 25.3 10 25.3h10.8V68.2s-.1-12.2 12-12.2h25.1s11.8.1 11.8-11.5V14.6s1.3-11.1-27.7-11.1zm-15.6 8.3c2.1 0 3.8 1.7 3.8 3.8 0 2.1-1.7 3.8-3.8 3.8-2.1 0-3.8-1.7-3.8-3.8 0-2.1 1.7-3.8 3.8-3.8z" fill="currentColor"/><path d="M55.5 106.5c25.1 0 24-10.8 24-10.8l-.1-11.2H54.6v-3.5h31.4s11.5 1.1 11.5-25.3c0-26.4-10-25.3-10-25.3H76.7v11.4s.1 12.2-12 12.2H39.6s-11.8-.1-11.8 11.5v29.9s-1.3 11.1 27.7 11.1zm15.6-8.3c-2.1 0-3.8-1.7-3.8-3.8 0-2.1 1.7-3.8 3.8-3.8 2.1 0 3.8 1.7 3.8 3.8 0 2.1-1.7 3.8-3.8 3.8z" fill="#FFE873"/></svg>
                  Python
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
