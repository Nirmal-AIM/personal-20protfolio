import { motion } from "framer-motion";
import { Globe, Layout, ShoppingCart, User, FileText } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Web Development",
    description:
      "Full-stack web applications built with modern technologies like React, Node.js, and databases.",
    features: [
      "Responsive Design",
      "SEO Optimized",
      "Fast Loading",
      "Cross-browser Compatible",
    ],
  },
  {
    icon: Layout,
    title: "Frontend Development",
    description:
      "Beautiful, interactive user interfaces that provide exceptional user experiences.",
    features: [
      "React.js",
      "TailwindCSS",
      "Framer Motion",
      "Mobile-first Design",
    ],
  },
  {
    icon: ShoppingCart,
    title: "E-commerce Sites",
    description:
      "Complete online stores with payment integration, inventory management, and admin panels.",
    features: [
      "Payment Gateway",
      "Inventory System",
      "Order Management",
      "Analytics Dashboard",
    ],
  },
  {
    icon: User,
    title: "Portfolio Websites",
    description:
      "Professional portfolio websites that showcase your work and help you stand out.",
    features: [
      "Custom Design",
      "Project Galleries",
      "Contact Forms",
      "Performance Optimized",
    ],
  },
  {
    icon: FileText,
    title: "Google Sites",
    description:
      "Quick and affordable websites using Google Sites for simple business needs.",
    features: [
      "Easy to Edit",
      "Google Integration",
      "Mobile Friendly",
      "Cost Effective",
    ],
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 lg:py-32 bg-secondary/10">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-purple-400 bg-clip-text text-transparent">
            Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Professional web development services tailored to your business
            needs
          </p>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full mt-6" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{
                y: -10,
                boxShadow: "0 20px 40px rgba(124, 58, 237, 0.2)",
              }}
              className="bg-card border border-border rounded-2xl p-8 hover:border-primary/30 transition-all duration-300 group relative overflow-hidden"
            >
              {/* Background gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="relative z-10">
                {/* Service Icon */}
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                  <service.icon className="w-8 h-8 text-primary" />
                </div>

                {/* Service Title */}
                <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </h3>

                {/* Service Description */}
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Service Features */}
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <motion.li
                      key={feature}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{
                        duration: 0.4,
                        delay: index * 0.1 + featureIndex * 0.05,
                      }}
                      viewport={{ once: true }}
                      className="flex items-center text-sm text-muted-foreground"
                    >
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 flex-shrink-0" />
                      {feature}
                    </motion.li>
                  ))}
                </ul>

                {/* Get Started Button */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full mt-8 bg-primary/10 hover:bg-primary text-primary hover:text-primary-foreground border border-primary/20 hover:border-primary px-6 py-3 rounded-lg font-semibold transition-all duration-300"
                  onClick={() => {
                    document
                      .getElementById("contact")
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  Get Started
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
