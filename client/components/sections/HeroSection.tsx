import { motion } from "framer-motion";
import { ChevronDown, Sparkles, Code, Zap } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Enhanced animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary/20" />
      
      {/* Animated geometric shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-20 w-32 h-32 border border-primary/20 rounded-full"
          animate={{
            rotate: 360,
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-24 h-24 border border-purple-400/20 rounded-full"
          animate={{
            rotate: -360,
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute top-1/2 right-10 w-16 h-16 border border-blue-400/20 rounded-full"
          animate={{
            rotate: 360,
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      {/* Enhanced floating particles animation */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute rounded-full ${
              i % 3 === 0 ? 'bg-primary/30' : i % 3 === 1 ? 'bg-purple-400/30' : 'bg-blue-400/30'
            }`}
            style={{
              width: `${Math.random() * 4 + 2}px`,
              height: `${Math.random() * 4 + 2}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, Math.random() * 200 - 100],
              y: [0, Math.random() * 200 - 100],
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: 8 + Math.random() * 10,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

             <div className="container mx-auto px-6 relative z-10">
         <div className="text-center space-y-8">
           {/* Top section with robot and greeting */}
           <motion.div
             initial={{ opacity: 0, y: 30 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.8, delay: 0.2 }}
             className="flex flex-col items-center space-y-6"
           >
                                         {/* Greeting with robot emoji */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="flex items-center gap-2 text-lg text-muted-foreground"
              >
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  
                </motion.div>
              
              </motion.div>

                             {/* Name centered */}
               <motion.h1
                 initial={{ opacity: 0, scale: 0.5 }}
                 animate={{ opacity: 1, scale: 1 }}
                 transition={{ duration: 1, delay: 0.7 }}
                 className="text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-primary via-purple-400 to-blue-400 bg-clip-text text-transparent text-center"
               >
                 Nirmal Kollipara
               </motion.h1>
               
               {/* Bujji image below the title */}
               <motion.div
                 initial={{ opacity: 0, y: 20 }}
                 animate={{ opacity: 1, y: 0 }}
                 transition={{ duration: 0.8, delay: 0.9 }}
                 className="relative"
               >
                 <motion.img
                   src="/bujji.jpg"
                   alt="Bujji"
                   className="w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 rounded-full object-cover border-4 border-primary/20 shadow-2xl mx-auto"
                   animate={{
                     y: [0, -5, 0],
                     rotate: [0, 1, -1, 0],
                   }}
                   transition={{
                     duration: 3,
                     repeat: Infinity,
                     ease: "easeInOut"
                   }}
                 />
                 
                 {/* Glowing effect around bujji */}
                 <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/30 via-purple-400/30 to-blue-400/30 blur-xl opacity-50 animate-pulse" />
               </motion.div>

                                                   {/* Confident tagline */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.9 }}
                className="text-center"
              >
                                 <div className="flex items-center justify-center gap-3 mb-3">
                   <motion.div
                     animate={{ rotate: 270 }}
                     transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                   >
                     <Code className="w-6 h-6 text-primary" />
                   </motion.div>
                                       <p className="text-xl md:text-2xl lg:text-3xl text-muted-foreground font-medium">
                      Young Tech Innovator
                    </p>
                 </div>
                
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.0 }}
                  className="text-lg md:text-xl text-muted-foreground font-medium max-w-2xl mx-auto leading-relaxed"
                >
                  "Your vision, my expertise. Let's build something extraordinary together."
                </motion.p>
              </motion.div>

                           {/* Single Attractive CTA Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.1 }}
                className="pt-6 flex justify-center"
              >
                <motion.button
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 20px 40px rgba(124, 58, 237, 0.4)",
                    y: -5,
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="relative overflow-hidden bg-gradient-to-r from-primary via-purple-500 to-blue-500 text-white px-10 py-5 rounded-2xl font-bold text-xl transition-all duration-500 shadow-2xl flex items-center justify-center gap-3 group"
                  onClick={() => {
                    document
                      .getElementById("About")
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                                     {/* Animated background */}
                   <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-purple-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Button content */}
                                     <motion.div
                     animate={{ rotate: 360 }}
                     transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                   >
                     <Sparkles className="w-6 h-6" />
                   </motion.div>
                   <span className="relative z-10">Explore My Portfolio</span>
                 </motion.button>
              </motion.div>
           </motion.div>
         </div>

        {/* Enhanced scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center text-muted-foreground cursor-pointer"
            onClick={() => {
              document
                .getElementById("about")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          >
          
            <motion.div
              animate={{ y: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ChevronDown className="w-6 h-6" />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
