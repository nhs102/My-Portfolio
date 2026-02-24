import { Link } from 'react-router-dom';
import { Github, Linkedin, Mail, Download } from 'lucide-react';
import { motion, type Variants } from 'framer-motion';
import profileImg from '../assets/images/profile.jpg';
import resumePdf from '../assets/files/shawn_resume.pdf';

export default function Home() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
    exit: { opacity: 0, y: -20, transition: { duration: 0.3 } }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    },
  };

  return (
    <motion.div 
      className="min-h-[calc(100vh-5rem)] flex items-center bg-transparent"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12 md:py-0">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12">
          
          {/* Text Content */}
          <div className="flex-1 text-center md:text-left">
            <motion.h2 variants={itemVariants} className="text-xl md:text-2xl font-medium text-blue-400 mb-2">
              Hi, I'm Shawn Nam!
            </motion.h2>
            <motion.h1 variants={itemVariants} className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 tracking-tight leading-tight">
              WEB DESIGNER & <br className="hidden lg:block" />
              <span className="text-blue-500">FULL-STACK DEVELOPER</span>
            </motion.h1>
            <motion.p variants={itemVariants} className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl mx-auto md:mx-0 leading-relaxed">
              Building reliable, data-driven web platforms with intuitive user experiences. I focus on practical solutions and maintainable architecture to support long-term business growth.
            </motion.p>
            
            {/* Buttons */}
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 mb-12">
              <Link 
                to="/projects" 
                className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors shadow-lg shadow-blue-500/30 w-full sm:w-auto text-center"
              >
                PROJECTS &lt;/&gt;
              </Link>
              <Link 
                to="/contact" 
                className="px-8 py-3 bg-transparent text-white border-2 border-white/20 hover:border-blue-500 font-semibold rounded-lg transition-colors w-full sm:w-auto text-center"
              >
                HIRE ME
              </Link>
              <a 
                href={resumePdf}
                download="Shawn_Nam_Resume.pdf"
                className="px-8 py-3 bg-white/10 hover:bg-white/20 text-white border-2 border-transparent font-semibold rounded-lg transition-colors w-full sm:w-auto flex items-center justify-center gap-2"
              >
                <Download className="w-5 h-5" />
                RESUME
              </a>
            </motion.div>
            
            {/* Social Icons */}
            <motion.div variants={itemVariants} className="flex items-center justify-center md:justify-start gap-6">
              <a href="https://github.com/nhs102" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors transform hover:scale-110">
                <Github className="w-6 h-6" />
              </a>
              <a href="https://www.linkedin.com/in/shawn-nam-b79614204/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-500 transition-colors transform hover:scale-110">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="mailto:tjr001136@gmail.com" className="text-gray-400 hover:text-red-500 transition-colors transform hover:scale-110">
                <Mail className="w-6 h-6" />
              </a>
            </motion.div>
          </div>

          {/* Profile Image */}
          <motion.div 
            className="flex-1 flex justify-center md:justify-end w-full"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            <div className="relative w-64 h-64 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-white/10 shadow-[0_0_40px_rgba(59,130,246,0.3)]">
              <img 
                src={profileImg} 
                alt="Shawn Nam" 
                className="w-full h-full object-cover" 
              />
            </div>
          </motion.div>

        </div>
      </div>
    </motion.div>
  );
}
