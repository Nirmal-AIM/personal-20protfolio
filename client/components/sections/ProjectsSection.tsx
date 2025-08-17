import { motion } from "framer-motion";
import { ExternalLink, Github, Eye } from "lucide-react";

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
      "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800",
    tech: ["React.js", "Framer Motion", "TailwindCSS", "TypeScript"],
    github: "https://github.com/Nirmal-AIM/portfolio-template",
    live: "https://portfolio-template-demo.vercel.app",
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
  return (
    <section id="projects" className="py-20 lg:py-32 animate-on-scroll">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
                     <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-primary to-purple-400 bg-clip-text text-transparent mb-6">
             Featured Projects
           </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of recent work demonstrating expertise across various
            industries
          </p>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full mt-6" />
        </motion.div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1,
                type: "spring",
                stiffness: 100
              }}
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ 
                y: -15,
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
              className={`bg-card border border-border rounded-2xl overflow-hidden hover:border-primary/30 transition-all duration-300 group relative ${
                project.featured ? "lg:col-span-1" : ""
              }`}
            >
              {/* Glowing border effect on hover */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary/20 via-purple-400/20 to-blue-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />
              
              {/* Project Image */}
              <div className="relative overflow-hidden bg-secondary/20 aspect-video">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  onError={(e) => {
                    console.error('Image failed to load:', project.image);
                    e.currentTarget.src = '/placeholder.svg';
                  }}
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Enhanced Overlay Actions */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <motion.a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    className="bg-primary text-primary-foreground p-3 rounded-full hover:bg-primary/90 transition-colors shadow-lg"
                  >
                    <Eye className="w-5 h-5" />
                  </motion.a>
                  {project.github !== "#" && (
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.2, rotate: -5 }}
                      whileTap={{ scale: 0.9 }}
                      className="bg-secondary text-secondary-foreground p-3 rounded-full hover:bg-secondary/90 transition-colors shadow-lg"
                    >
                      <Github className="w-5 h-5" />
                    </motion.a>
                  )}
                </div>

                {/* Enhanced Category Badge */}
                <motion.div 
                  className="absolute top-4 left-4"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                >
                  <span className="bg-primary/90 text-primary-foreground px-3 py-1 rounded-full text-sm font-medium backdrop-blur-sm shadow-lg">
                    {project.category}
                  </span>
                </motion.div>
              </div>

              {/* Project Content */}
              <div className="p-6 relative z-10">
                <motion.h3 
                  className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  {project.title}
                </motion.h3>

                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Enhanced Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, techIndex) => (
                    <motion.span
                      key={tech}
                      className="bg-secondary/50 text-foreground px-3 py-1 rounded-lg text-sm border border-border hover:border-primary/50 transition-colors"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ 
                        duration: 0.3, 
                        delay: techIndex * 0.1,
                        type: "spring",
                        stiffness: 200
                      }}
                      whileHover={{ 
                        scale: 1.05,
                        backgroundColor: "hsl(var(--primary) / 0.1)",
                        borderColor: "hsl(var(--primary))"
                      }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>

                {/* Enhanced Project Links */}
                <div className="flex gap-4">
                  <motion.a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-lg font-medium hover:bg-primary/90 transition-all duration-300 flex-1 justify-center shadow-lg hover:shadow-xl"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </motion.a>

                  {project.github !== "#" && (
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 bg-secondary text-secondary-foreground px-4 py-2 rounded-lg font-medium hover:bg-secondary/90 transition-all duration-300 shadow-lg hover:shadow-xl"
                    >
                      <Github className="w-4 h-4" />
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View More Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-secondary text-secondary-foreground hover:bg-secondary/80 border border-border hover:border-primary/30 px-8 py-4 rounded-lg font-semibold transition-all duration-300"
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
