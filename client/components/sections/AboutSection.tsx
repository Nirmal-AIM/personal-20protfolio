import { motion } from "framer-motion";
import { Code, Palette, Rocket, Users } from "lucide-react";

const techStack = [
  "React.js",
  "Next.js",
  "TailwindCSS",
  "Node.js",
  "PHP",
  "MySQL",
  "Firebase",
  "Git",
  "Figma",
];

const achievements = [
  {
    icon: Code,
    title: "50+ Projects",
    description: "Successfully delivered websites across various industries",
  },
  {
    icon: Users,
    title: "Happy Clients",
    description: "Building budget-friendly, professional solutions",
  },
  {
    icon: Rocket,
    title: "Fast Delivery",
    description: "Quick turnaround times without compromising quality",
  },
  {
    icon: Palette,
    title: "Creative Design",
    description: "Modern, responsive designs that stand out",
  },
];

// Build mobile icon list from local assets in `public/icons`
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
  "012-programming-language.png",
  "013-programming.png",
  "014-mysql-1.png",
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

export default function AboutSection() {
  return (
    <section id="about" className="py-20 lg:py-32 relative transform scale-[0.88] sm:scale-100 origin-top">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-purple-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Bio Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="prose prose-lg prose-invert max-w-none">
              <p className="text-lg text-muted-foreground leading-relaxed">
                I started my freelancing journey during my diploma final year,
                driven by passion for creating digital solutions. My focus is on
                building{" "}
                <span className="text-primary font-semibold">
                  budget-friendly, professional React-based websites
                </span>{" "}
                that help businesses establish their online presence
                effectively.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                From e-commerce platforms to institutional websites, I bring
                creative solutions to diverse industries while maintaining high
                standards of quality and performance.
              </p>
            </div>

            {/* Tech Stack */}
            <div className="pt-6">
              <h3 className="text-xl font-semibold mb-4 text-foreground">
                Technologies I Work With
              </h3>
              {/* Desktop/Tablet: text badges */}
              <div className="hidden sm:flex flex-wrap gap-3">
                {techStack.map((tech, index) => (
                  <motion.span
                    key={tech}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05 }}
                    className="bg-secondary/50 text-foreground px-4 py-2 rounded-lg text-sm font-medium border border-border hover:border-primary/50 transition-all duration-300 cursor-default"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
              {/* Mobile: animated row of icons */}
              <div className="sm:hidden overflow-hidden mt-2">
                <motion.div
                  className="flex gap-4"
                  animate={{ x: [0, -80, 0] }}
                  transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
                >
                  {technologyIcons.map((tech, index) => (
                    <img
                      key={`about-mobile-${index}`}
                      src={tech.src}
                      alt={tech.label}
                      className="w-7 h-7 rounded-sm shadow-sm"
                      loading="lazy"
                    />
                  ))}
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Achievements Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-6"
          >
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 10px 30px rgba(124, 58, 237, 0.2)",
                }}
                className="bg-card border border-border rounded-xl p-6 text-center hover:border-primary/30 transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                  <achievement.icon className="w-6 h-6 text-primary" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">
                  {achievement.title}
                </h4>
                <p className="text-sm text-muted-foreground">
                  {achievement.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
