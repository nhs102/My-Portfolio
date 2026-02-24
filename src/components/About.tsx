import { motion } from 'framer-motion';
import { Code2, BrainCircuit, Palette, Coffee, Plane, Camera } from 'lucide-react';

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    },
    exit: { opacity: 0, y: -20, transition: { duration: 0.5 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
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
        <div className="text-center">
          <motion.h2 
            variants={itemVariants}
            className="text-3xl font-extrabold text-white sm:text-4xl mb-8"
          >
            Hi, I'm Shawn Nam
          </motion.h2>
          
          <motion.div 
            variants={itemVariants}
            className="bg-white/5 border border-white/10 rounded-2xl p-8 md:p-12 shadow-2xl max-w-4xl mx-auto backdrop-blur-sm"
          >
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-6 text-left">
              I am a <strong className="text-blue-400 font-bold">Web Designer & Platform Developer</strong>. I build <strong className="text-white font-bold bg-blue-900/30 px-2 py-0.5 rounded">reliable, data-driven platforms</strong> that solve real business problems.
            </p>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-6 text-left">
              With a strong foundation in <strong className="text-white font-bold bg-green-900/30 px-2 py-0.5 rounded">React & Node.js</strong>, I focus on maintainable architecture and practical solutions. By combining engineering with <strong className="text-white font-bold bg-pink-900/30 px-2 py-0.5 rounded">UI/UX design</strong>, I create intuitive products designed for long-term growth and user satisfaction.
            </p>
            
            <div className="mt-12 pt-8 border-t border-white/10">
              <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-6 text-left">
                Beyond Coding
              </h3>
              <div className="flex flex-wrap gap-4 justify-start">
                <span className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm text-gray-300 hover:bg-white/10 hover:text-white transition-colors cursor-default">
                  <BrainCircuit className="w-4 h-4 text-purple-400" /> AI Trends
                </span>
                <span className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm text-gray-300 hover:bg-white/10 hover:text-white transition-colors cursor-default">
                  <Palette className="w-4 h-4 text-pink-400" /> UI/UX Design
                </span>
                <span className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm text-gray-300 hover:bg-white/10 hover:text-white transition-colors cursor-default">
                  <Code2 className="w-4 h-4 text-blue-400" /> Open Source
                </span>
                <span className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm text-gray-300 hover:bg-white/10 hover:text-white transition-colors cursor-default">
                  <Coffee className="w-4 h-4 text-yellow-400" /> Coffee Brewing
                </span>
                <span className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm text-gray-300 hover:bg-white/10 hover:text-white transition-colors cursor-default">
                  <Plane className="w-4 h-4 text-green-400" /> Traveling
                </span>
                <span className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm text-gray-300 hover:bg-white/10 hover:text-white transition-colors cursor-default">
                  <Camera className="w-4 h-4 text-red-400" /> Photography
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
