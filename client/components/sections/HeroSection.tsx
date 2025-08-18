import { motion } from "framer-motion";
import { ChevronDown, Sparkles, Code, Zap } from "lucide-react";

export default function HeroSection() {
  const deriveLabelFromFilename = (filename: string): string => {
    const withoutPrefix = filename.replace(/^\d+[-_]?/, "");
    const withoutExt = withoutPrefix.replace(/\.(png|svg|jpg|jpeg)$/i, "");
    const spaced = withoutExt.replace(/[-_]+/g, " ");
    return spaced.charAt(0).toUpperCase() + spaced.slice(1);
  };

  const iconFiles = [
    "001-python.png",
    "002-java-script.png",
    "003-code.png",
    "004-typescript.png",
    "005-visual-basic.png",
    "006-code-1.png",
    "007-c.png",
    "008-mysql.png",
    "011-swift.png",
    "010-programmer.png",
    "011-swift.png",
    "012-programming-language.png",
    "013-programming.png",
    "014-mysql-1.png",
    "015-code-2.png",
    "016-globe.png",
    "017-php.png",
    "018-python-1.png",
    "019-program.png",
    "020-programming-1.png",
    "021-programming-language-1.png",
    "022-hierarchical.png",
    "023-cloud-programming.png",
    "024-html-language.png",
    "025-programming-2.png",
    "026-idea.png",
    "027-global.png",
    "028-light-bulb.png",
    "029-coding.png",
    "030-code-3.png",
    "031-natural-language-processing.png",
  ];

  const technologyIcons = iconFiles.map((file) => ({
    src: `/icons/${file}`,
    label: deriveLabelFromFilename(file),
  }));
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden animate-on-scroll">
      {/* Enhanced animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary/20" />
      
      {/* Animated geometric shapes - Mobile responsive */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-10 left-10 md:top-20 md:left-20 w-16 h-16 md:w-32 md:h-32 border border-primary/20 rounded-full"
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
          className="absolute bottom-10 right-10 md:bottom-20 md:right-20 w-12 h-12 md:w-24 md:h-24 border border-purple-400/20 rounded-full"
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
          className="absolute top-1/2 right-5 md:right-10 w-8 h-8 md:w-16 md:h-16 border border-blue-400/20 rounded-full"
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

      {/* Orbiting technology icons (desktop/tablet) */}
      <div className="pointer-events-none absolute inset-0">
        <div className="hidden sm:block absolute right-[-100px] md:right-[-140px] top-1/2 -translate-y-1/2 z-0">
          <motion.div
            className="relative w-[280px] h-[280px] md:w-[360px] md:h-[360px]"
            animate={{ rotate: 360 }}
            transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          >
            <div className="absolute inset-0 rounded-full border border-primary/10" />
            {technologyIcons.slice(0, 10).map((tech, index) => {
              const angle = (index / 10) * 360;
              const radius = 130; // visual radius in px
              return (
                <div
                  key={`${tech.src}-${index}`}
                  className="absolute left-1/2 top-1/2"
                  style={{
                    transform: `rotate(${angle}deg) translate(${radius}px) rotate(${-angle}deg)`
                  }}
                >
                  <img src={tech.src} alt={tech.label} className="w-7 h-7 md:w-9 md:h-9 rounded-sm shadow-sm" loading="lazy" />
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>

      {/* Subtle moving row of technology icons (mobile) */}
      <div className="sm:hidden absolute bottom-28 left-0 right-0 z-0 overflow-hidden">
        <motion.div
          className="flex gap-4 px-6"
          animate={{ x: [0, -60, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        >
          {technologyIcons.map((tech, index) => (
            <img key={`mobile-${tech.src}-${index}`} src={tech.src} alt={tech.label} className="w-6 h-6 rounded-sm shadow-sm" loading="lazy" />
          ))}
        </motion.div>
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

             <div className="container mx-auto px-4 sm:px-6 relative z-10 transform scale-[1.03] sm:scale-100 origin-top">
         <div className="text-center space-y-6 sm:space-y-8">
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
                 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold bg-gradient-to-r from-primary via-purple-400 to-blue-400 bg-clip-text text-transparent text-center leading-tight"
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
                   className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 rounded-full object-cover border-2 sm:border-4 border-primary/20 shadow-2xl mx-auto"
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
                                 <div className="flex items-center justify-center gap-2 sm:gap-3 mb-3">
                   <motion.div
                     animate={{ rotate: 270 }}
                     transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                   >
                     <Code className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                   </motion.div>
                                       <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-muted-foreground font-medium">
                      Young Tech Innovator
                    </p>
                 </div>
                
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.0 }}
                  className="text-base sm:text-lg md:text-xl text-muted-foreground font-medium max-w-2xl mx-auto leading-relaxed px-4 sm:px-0"
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
                  className="relative overflow-hidden bg-gradient-to-r from-primary via-purple-500 to-blue-500 text-white px-6 sm:px-8 md:px-10 py-4 sm:py-5 rounded-xl sm:rounded-2xl font-bold text-lg sm:text-xl transition-all duration-500 shadow-2xl flex items-center justify-center gap-2 sm:gap-3 group w-full sm:w-auto"
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
                     <Sparkles className="w-5 h-5 sm:w-6 sm:h-6" />
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
