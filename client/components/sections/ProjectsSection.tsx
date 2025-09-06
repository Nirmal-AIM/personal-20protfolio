import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, Eye, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import move from "lodash-move";

const projects = [
  {
    title: "Laxmi Foods",
    description:
      "Professional e-commerce site for wholesalers with inventory management, order processing, and customer portal.",
    image:
      "https://cdn.builder.io/api/v1/image/assets%2Fb0b6ec50434c41f286f6cf2e72fc2b41%2Fc4bfacd8ec484569807c3c47324dc0c7?format=webp&width=800",
    tech: ["React.js", "Node.js", "MySQL", "TailwindCSS"],
    github: "https://github.com/Nirmal-AIM/ecommerce-site",
    live: "https://laxmistore.vercel.app",
    category: "E-commerce",
    featured: true,
  },
  {
    title: "AnuGrow Coaching Landing Page",
    description:
      "A modern and responsive landing page for AnuGrow Coaching, featuring consultation booking, service highlights, and a clean UI for user engagement.",
    image:
      "/Screenshot 2025-08-15 124634.png",
    tech: ["React.js", "TailwindCSS", "Resend API"],
    github: "https://github.com/Nirmal-AIM/anugrow-landing-page", // Replace with your actual repo
    live: "https://v0-image-analysis-nine-delta-94.vercel.app/",
    category: "Business",
    featured: true,
  },
  {
    title: "Portfolio Website Template",
    description:
      "A customizable portfolio template built with React and Framer Motion, featuring smooth animations, dark mode, and responsive design for professionals.",
    image:
      "/Screenshot 2025-08-27 141104.png",
    tech: ["React.js", "Framer Motion", "TailwindCSS", "TypeScript"],
    github: "https://github.com/Nirmal-AIM/personal-20protfolio",
    live: "https://nirmal-portfolios.netlify.app/",
    category: "Template",
    featured: true,
  },
  {
    title: "Gudlavalleru Polytechnic College",
    description:
      "Complete institutional website with course information, faculty details, admission process, and student portal.",
    image:
      "https://cdn.builder.io/api/v1/image/assets%2Fb0b6ec50434c41f286f6cf2e72fc2b41%2F137b459070764bc5be409f7cdebb40db?format=webp&width=800",
    tech: ["React.js", "Firebase", "TailwindCSS"],
    github: "https://github.com/Nirmal-AIM/my-react-project",
    live: "https://gudlavallerucollege.online",
    category: "Institutional",
    featured: true,
  },
  {
    title: "AANMVVRSR Hostel Management",
    description:
      "Hostel management system with room booking, student records, fee management, and administrative features.",
    image:
      "https://cdn.builder.io/api/v1/image/assets%2Fb0b6ec50434c41f286f6cf2e72fc2b41%2F02b5fbb427724ea097a09ee96c326dd4?format=webp&width=800",
    tech: ["React.js", "PHP", "MySQL", "Bootstrap"],
    github: "#",
    live: "https://aanmvvrsrhostel.com",
    category: "Management System",
    featured: true,
  },
 
];

export default function ProjectsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [projectCards, setProjectCards] = useState(projects);
  const [showHint, setShowHint] = useState(true);
  const [isAnimating, setIsAnimating] = useState(false);

  const nextProject = () => {
    if (isAnimating) return; // Prevent multiple clicks during animation
    setIsAnimating(true);
    setShowHint(false);
    
    // Trigger the drag-like animation
    setTimeout(() => {
      moveToEnd(0);
      setTimeout(() => {
        setIsAnimating(false);
      }, 300); // Wait for animation to complete
    }, 100);
  };

  const prevProject = () => {
    if (isAnimating) return; // Prevent multiple clicks during animation
    setIsAnimating(true);
    setShowHint(false);
    
    // Trigger the drag-like animation
    setTimeout(() => {
      moveToEnd(0);
      setTimeout(() => {
        setIsAnimating(false);
      }, 300); // Wait for animation to complete
    }, 100);
  };

  const moveToEnd = (fromIndex) => {
    console.log('Moving card from index:', fromIndex);
    const newCards = move(projectCards, fromIndex, projectCards.length - 1);
    setProjectCards(newCards);
    setShowHint(false); // Hide hint after first interaction
  };

  const currentProject = projectCards[currentIndex];

  return (
    <section id="projects" className="mobile-section animate-on-scroll">
      <div className="mobile-container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mobile-text-center mb-8 sm:mb-12 md:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold bg-gradient-to-r from-primary to-purple-400 bg-clip-text text-transparent mb-4 sm:mb-6 md:mb-8 leading-tight">
            Featured Projects
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            A showcase of recent work demonstrating expertise across various
            industries
          </p>
          
          {/* Interaction Instructions */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-4 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 text-sm text-muted-foreground"
          >
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <span>Drag up or click arrows to explore</span>
            </div>
            <div className="hidden sm:block w-px h-4 bg-muted-foreground/30" />
            <div className="flex items-center gap-2">
              <ChevronLeft className="w-4 h-4" />
              <ChevronRight className="w-4 h-4" />
              <span>Both move cards to back</span>
            </div>
          </motion.div>
          <div className="w-16 sm:w-20 md:w-24 h-0.5 sm:h-1 bg-primary mx-auto rounded-full mt-4 sm:mt-6" />
        </motion.div>

        {/* Card Stack Container */}
        <div className="relative flex items-center justify-center min-h-[600px] sm:min-h-[700px]">
          {/* Floating Hint - Only shows for first-time users */}
          {showHint && (
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.9 }}
              transition={{ delay: 3, duration: 0.5 }}
              className="absolute -top-16 left-1/2 -translate-x-1/2 z-30"
            >
              <div className="bg-primary text-white px-4 py-2 rounded-full shadow-lg text-sm font-medium whitespace-nowrap">
                👆 Drag up or click arrows to explore more projects
              </div>
              <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-primary" />
            </motion.div>
          )}

          {/* Background Cards for Stack Effect */}
          <div className="absolute inset-0 flex items-center justify-center">
            {/* Card 3 - Furthest back */}
            <div
              className="absolute w-full max-w-md bg-white rounded-2xl shadow-lg border border-gray-200"
              style={{
                transform: 'translateY(-90px) scale(0.88)',
                zIndex: 1,
                height: '140px'
              }}
            />
            
            {/* Card 2 - Middle */}
            <div
              className="absolute w-full max-w-md bg-white rounded-2xl shadow-lg border border-gray-200"
              style={{
                transform: 'translateY(-50px) scale(0.94)',
                zIndex: 2,
                height: '200px'
              }}
            />
            
            {/* Card 1 - Closest to front */}
            <div
              className="absolute w-full max-w-md bg-white rounded-2xl shadow-lg border border-gray-200"
              style={{
                transform: 'translateY(-25px) scale(0.97)',
                zIndex: 3,
                height: '280px'
              }}
            />
          </div>

          {/* Card Stack */}
          <div className="relative w-full max-w-md h-[500px]">
            {projectCards.map((project, index) => {
              const canDrag = index === 0;
              const CARD_OFFSET = 12;
              const SCALE_FACTOR = 0.04;

              return (
                <motion.div
                  key={project.title}
                  className="absolute w-full bg-white rounded-2xl shadow-2xl overflow-hidden"
                  style={{
                    height: '500px',
                    transformOrigin: 'top center',
                    cursor: canDrag ? 'grab' : 'default'
                  }}
                  animate={{
                    y: index * CARD_OFFSET + (isAnimating && index === 0 ? -100 : 0),
                    scale: 1 - index * SCALE_FACTOR + (isAnimating && index === 0 ? 0.02 : 0),
                    rotate: isAnimating && index === 0 ? 2 : 0,
                    zIndex: projectCards.length - index + (isAnimating && index === 0 ? 1000 : 0)
                  }}
                  drag={canDrag && !isAnimating ? "y" : false}
                  dragConstraints={{
                    top: -200,
                    bottom: 0
                  }}
                  dragElastic={0.2}
                  onDragEnd={(event, info) => {
                    console.log('Drag ended with offset:', info.offset.y);
                    if (info.offset.y < -80) {
                      moveToEnd(index);
                    }
                  }}
                  whileDrag={{ 
                    scale: 1.02,
                    rotate: 2,
                    zIndex: 1000,
                    cursor: 'grabbing',
                    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
                  }}
                  transition={{
                    type: "spring",
                    stiffness: isAnimating ? 300 : 400,
                    damping: isAnimating ? 20 : 25,
                    duration: isAnimating ? 0.3 : undefined
                  }}
                >
                  {/* Navigation Arrows - Only on top card */}
                  {canDrag && (
                    <div className="absolute top-4 left-4 right-4 flex justify-between items-center z-20">
                      <motion.button
                        onClick={prevProject}
                        whileHover={{ scale: 1.1, rotate: -5 }}
                        whileTap={{ scale: 0.9 }}
                        animate={isAnimating ? { scale: 1.2, rotate: -10 } : {}}
                        className="bg-primary/90 text-white p-2 rounded-full hover:bg-primary shadow-lg transition-all duration-200"
                        aria-label="Move to previous project"
                        title="Move to previous project"
                        disabled={isAnimating}
                      >
                        <ChevronLeft className="w-4 h-4" />
                      </motion.button>

                      <motion.button
                        onClick={nextProject}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        whileTap={{ scale: 0.9 }}
                        animate={isAnimating ? { scale: 1.2, rotate: 10 } : {}}
                        className="bg-primary/90 text-white p-2 rounded-full hover:bg-primary shadow-lg transition-all duration-200"
                        aria-label="Move to next project"
                        title="Move to next project"
                        disabled={isAnimating}
                      >
                        <ChevronRight className="w-4 h-4" />
                      </motion.button>
                    </div>
                  )}

                  {/* Drag Indicator - Only on top card */}
                  {canDrag && !isAnimating && (
                    <motion.div
                      className="absolute top-16 left-1/2 -translate-x-1/2 z-20"
                      animate={{
                        y: [0, -5, 0],
                        opacity: [0.6, 1, 0.6]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    >
                      <div className="flex flex-col items-center gap-1 text-primary/80">
                        <div className="flex gap-1">
                          <div className="w-1 h-1 bg-primary rounded-full" />
                          <div className="w-1 h-1 bg-primary rounded-full" />
                          <div className="w-1 h-1 bg-primary rounded-full" />
                        </div>
                        <span className="text-xs font-medium">Drag up</span>
                      </div>
                    </motion.div>
                  )}

                  {/* Animation Indicator - Shows during arrow animation */}
                  {canDrag && isAnimating && (
                    <motion.div
                      className="absolute top-16 left-1/2 -translate-x-1/2 z-20"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                    >
                      <div className="flex flex-col items-center gap-1 text-primary">
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 0.5, repeat: Infinity, ease: "linear" }}
                          className="w-4 h-4 border-2 border-primary border-t-transparent rounded-full"
                        />
                        <span className="text-xs font-medium">Moving...</span>
                      </div>
                    </motion.div>
                  )}
              
              {/* Project Image */}
                  <div className="relative h-52 sm:h-60 overflow-hidden">
                <motion.img
                  src={project.image}
                  alt={project.title}
                      className="w-full h-full object-cover"
                  onError={(e) => {
                    console.error('Image failed to load:', project.image);
                    e.currentTarget.src = '/placeholder.svg';
                  }}
                    />
                    
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                    
                    {/* Category Badge */}
                    <div className="absolute top-4 left-1/2 -translate-x-1/2">
                      <span className="bg-primary text-white px-3 py-1 rounded-full text-xs font-medium shadow-lg">
                        {project.category}
                      </span>
                    </div>

                    {/* Action Buttons - Only on top card */}
                    {canDrag && (
                      <div className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <motion.a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                          whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                          className="bg-white/90 text-primary p-3 rounded-full hover:bg-white transition-colors shadow-lg"
                  >
                          <Eye className="w-5 h-5" />
                  </motion.a>
                  {project.github !== "#" && (
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                            whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                            className="bg-white/90 text-primary p-3 rounded-full hover:bg-white transition-colors shadow-lg"
                    >
                            <Github className="w-5 h-5" />
                    </motion.a>
                  )}
                </div>
                    )}
              </div>

                  {/* Project Content */}
                  <div className="p-6 space-y-4">
                    {/* Project Title */}
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-800 leading-tight">
                  {project.title}
                    </h3>

                    {/* Project Description */}
                    <p className="text-gray-600 leading-relaxed text-sm sm:text-base line-clamp-3">
                  {project.description}
                </p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2">
                      {project.tech.slice(0, 3).map((tech) => (
                        <span
                      key={tech}
                          className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-medium border border-gray-200"
                    >
                      {tech}
                        </span>
                  ))}
                      {project.tech.length > 3 && (
                        <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-medium border border-gray-200">
                          +{project.tech.length - 3}
                        </span>
                      )}
                </div>

                    {/* Project Links - Only on top card */}
                    {canDrag && (
                      <div className="flex gap-3 pt-2">
                  <motion.a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                          whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                          className="bg-primary text-white hover:bg-primary/90 flex items-center justify-center gap-2 px-4 py-2 rounded-lg text-sm font-medium shadow-md hover:shadow-lg transition-all duration-200 flex-1"
                  >
                          <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </motion.a>

                  {project.github !== "#" && (
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                            whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                            className="bg-gray-100 text-gray-700 hover:bg-gray-200 flex items-center justify-center gap-2 px-4 py-2 rounded-lg text-sm font-medium shadow-md hover:shadow-lg transition-all duration-200"
                    >
                            <Github className="w-4 h-4" />
                      Code
                    </motion.a>
                  )}
                </div>
                    )}
              </div>
            </motion.div>
              );
            })}
          </div>
        </div>

        {/* Project Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="flex justify-center gap-2 mt-6 sm:mt-8"
        >
          {projectCards.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => setCurrentIndex(index)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                index === 0 
                  ? 'bg-primary scale-125' 
                  : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
              }`}
              aria-label={`Go to project ${index + 1}`}
            />
          ))}
        </motion.div>

        {/* View More Button - Mobile Optimized */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-8 sm:mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="mobile-button bg-secondary text-secondary-foreground hover:bg-secondary/80 border border-border hover:border-primary/30 px-6 sm:px-8 py-3 sm:py-4 shadow-lg hover:shadow-xl text-sm sm:text-base"
            onClick={() => {
              window.open("https://github.com/Nirmal-AIM", "_blank");
            }}
          >
            View All Projects on GitHub
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
