import { motion } from "framer-motion";
import { Mail, Linkedin, Twitter, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Contact() {
  const socialLinks = [
    { icon: Linkedin, label: "LinkedIn", color: "bg-primary", href: "#" },
    { icon: Twitter, label: "Twitter", color: "bg-secondary", href: "#" },
    { icon: Github, label: "GitHub", color: "bg-chart-3", href: "#" },
  ];

  return (
    <section id="contact" className="py-24 px-6 bg-white border-t-8 border-black">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-7xl font-black uppercase mb-4 inline-block -rotate-2">
            Let's Connect
          </h2>
          <div className="h-2 w-64 bg-black rotate-2 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="bg-primary border-8 border-black p-8 rotate-2 shadow-brutal-xl">
              <div className="flex items-center gap-4 mb-4">
                <Mail className="h-12 w-12" />
                <div>
                  <div className="text-sm font-bold uppercase mb-1">Email</div>
                  <a 
                    href="mailto:caltinoz@purdueglobal.edu"
                    className="text-2xl font-black hover:underline break-all"
                    data-testid="link-email"
                  >
                    caltinoz@purdueglobal.edu
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white border-6 border-black p-6 -rotate-1 shadow-brutal-lg">
              <h3 className="text-2xl font-black uppercase mb-4">Areas of Expertise</h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "AI in Education",
                  "Decision Support Systems",
                  "Online Education",
                  "Educational Technology"
                ].map((area, i) => (
                  <span
                    key={i}
                    className="bg-muted border-2 border-black px-3 py-1 text-sm font-bold"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="bg-secondary border-8 border-black p-8 shadow-brutal-xl">
              <h3 className="text-3xl font-black uppercase mb-6">Connect on Social</h3>
              <div className="space-y-4">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <motion.div
                      key={index}
                      whileHover={{ x: 10, rotate: 2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button
                        className={`w-full ${social.color} border-4 border-black shadow-brutal hover:shadow-brutal-lg font-bold uppercase text-lg h-auto py-4 rounded-none justify-start gap-4`}
                        onClick={() => console.log(`Navigate to ${social.label}`)}
                        data-testid={`button-${social.label.toLowerCase()}`}
                      >
                        <Icon className="h-6 w-6" />
                        {social.label}
                      </Button>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            <motion.div
              className="bg-primary border-6 border-black p-6 rotate-1 shadow-brutal-lg text-center"
              whileHover={{ rotate: 0, scale: 1.05 }}
            >
              <p className="text-xl font-black uppercase">
                Open to Collaboration & Research Opportunities
              </p>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <div className="inline-block bg-black text-white px-6 py-3 font-mono text-sm border-4 border-black shadow-brutal">
            © 2025 Cuneyt Altinoz. Built with neobrutalist vibes.
          </div>
        </motion.div>
      </div>
    </section>
  );
}
