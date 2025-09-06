import { motion } from "framer-motion";
import {
  Mail,
  Github,
  Linkedin,
  MapPin,
  Send,
  MessageSquare,
  Phone,
} from "lucide-react";
import { useState } from "react";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "nirmalkollipara8688@gmail.com",
    link: "mailto:nirmalkollipara8688@gmail.com",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Guntur, India",
    link: "#",
  },
];

const socialLinks = [
  {
    icon: Github,
    label: "GitHub",
    username: "@Nirmal-AIM",
    link: "https://github.com/Nirmal-AIM",
    color: "hover:text-gray-400",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    username: "nirmal-kollipara",
    link: "https://www.linkedin.com/in/nirmal-kollipara-910230311/",
    color: "hover:text-blue-400",
  },
];

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Create mailto link with form data
    const subject = encodeURIComponent(formData.subject || "Website Inquiry");
    const body = encodeURIComponent(
      `Hi Nirmal,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`,
    );
    window.open(
      `mailto:nirmalkollipara8688@gmail.com?subject=${subject}&body=${body}`,
    );
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section id="contact" className="py-20 lg:py-32 bg-secondary/10">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-purple-400 bg-clip-text text-transparent">
            Let's Work Together
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to start your next project? Get in touch and let's create
            something amazing together.
          </p>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full mt-6" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Get in Touch
              </h3>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                I'm always excited to discuss new projects and opportunities.
                Whether you need a complete website, want to improve your
                existing site, or just have questions about web development,
                feel free to reach out!
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-4"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <info.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">
                      {info.label}
                    </p>
                    {info.link !== "#" ? (
                      <a
                        href={info.link}
                        className="text-foreground hover:text-primary transition-colors duration-300 font-medium"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-foreground font-medium">
                        {info.value}
                      </p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Social Links */}
            <div className="pt-8">
              <h4 className="text-lg font-semibold text-foreground mb-6">
                Connect with me
              </h4>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.1, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                    className={`group bg-card border border-border rounded-xl p-4 hover:border-primary/30 transition-all duration-300 ${social.color}`}
                  >
                    <div className="flex items-center gap-3">
                      <social.icon className="w-6 h-6" />
                      <div className="text-left">
                        <p className="text-sm font-medium text-foreground group-hover:text-primary transition-colors duration-300">
                          {social.label}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {social.username}
                        </p>
                      </div>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-card border border-border rounded-2xl p-8"
          >
            <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
              <MessageSquare className="w-6 h-6 text-primary" />
              Let's work on your project
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-secondary/50 border border-border rounded-lg px-4 py-3 text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-secondary/50 border border-border rounded-lg px-4 py-3 text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full bg-secondary/50 border border-border rounded-lg px-4 py-3 text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                  placeholder="Project Discussion"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  required
                  className="w-full bg-secondary/50 border border-border rounded-lg px-4 py-3 text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-4 rounded-lg font-semibold flex items-center justify-center gap-3 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <Send className="w-5 h-5" />
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
