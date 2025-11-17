import { motion } from "framer-motion";
import { Sparkles, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Research Methodology Selector",
    description: "Interactive tool for DBA students to identify appropriate research methodologies",
    url: "https://cunmayday.github.io/webtests/methods.html",
    color: "bg-primary",
  },
  {
    title: "Analytics Case Study",
    description: "Comprehensive case study example demonstrating business analytics applications",
    url: "https://cunmayday.github.io/webtests/caseada.html",
    color: "bg-secondary",
  },
  {
    title: "AI Use Cases Catalog",
    description: "Curated collection of AI applications and use cases in education",
    url: "https://usecases.vercel.app/index.html",
    color: "bg-chart-3",
  },
];

export default function CurrentFocus() {
  return (
    <section id="focus" className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-4">
            <Sparkles className="h-12 w-12" />
            <h2 className="text-5xl md:text-7xl font-black uppercase rotate-1 inline-block">
              Current Focus
            </h2>
          </div>
          <div className="h-2 w-64 bg-black -rotate-2"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-primary border-8 border-black p-8 mb-12 shadow-brutal-xl rotate-1"
        >
          <h3 className="text-3xl font-black uppercase mb-4">AI Systems for Education</h3>
          <p className="text-lg font-medium leading-relaxed">
            Evaluation of developing AI systems for education - use of Gems, GPTs and webapps coded with AI assistance.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, rotate: 0 }}
              whileInView={{ opacity: 1, y: 0, rotate: index % 3 === 0 ? -2 : index % 3 === 1 ? 2 : -1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ rotate: 0, scale: 1.05, y: -8 }}
              className="bg-white border-6 border-black p-6 shadow-brutal-lg"
              data-testid={`card-project-${index}`}
            >
              <div className={`${project.color} border-4 border-black p-4 mb-4 shadow-brutal`}>
                <h3 className="text-xl font-black uppercase leading-tight" data-testid={`text-project-title-${index}`}>
                  {project.title}
                </h3>
              </div>

              <p className="text-sm font-medium mb-6 leading-relaxed">
                {project.description}
              </p>

              <Button
                className="w-full bg-chart-3 text-white border-4 border-black shadow-brutal hover:shadow-brutal-lg font-bold uppercase rounded-none h-auto py-3"
                onClick={() => window.open(project.url, '_blank')}
                data-testid={`button-view-project-${index}`}
              >
                View Project
                <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
