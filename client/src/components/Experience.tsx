import { motion } from "framer-motion";
import { Briefcase, Calendar } from "lucide-react";

const experiences = [
  {
    title: "Professor",
    organization: "Purdue University Global",
    period: "2009 - Present",
    highlights: [
      "Faculty lead for Doctorate in Business Administration program",
      "Co-faculty lead for supply chain management concentration",
      "2025 Innovative Online Use of Technology Award",
      "2023 Excellence in Online Course Design Award",
      "2021 ACBSP Teaching Excellence Award",
      "2016 School of Business Professor of the Year",
      "Faculty advisor for Delta Mu Delta Honor Society",
    ],
    color: "bg-primary",
  },
  {
    title: "Post-doctoral Research Fellow",
    organization: "North Carolina State University",
    period: "2001 - 2003",
    highlights: [
      "Continued research in supply chain management",
      "Decision support systems development",
    ],
    color: "bg-secondary",
  },
  {
    title: "Research Assistant",
    organization: "North Carolina State University",
    period: "1997 - 2001",
    highlights: [
      "Supply chain management research",
      "Performance measurement in organizations",
      "Simulations for coordination analysis",
      "Workflow analysis of business processes",
      "Fuzzy logic decision support",
      "Developed two software programs",
    ],
    color: "bg-accent",
  },
  {
    title: "Consultant",
    organization: "CIBA Vision, Atlanta GA",
    period: "1995 - 1997",
    highlights: [
      "Inventory control methodology development",
      "New inventory target levels implementation",
      "Shipping warehouse efficiency analysis",
    ],
    color: "bg-chart-4",
  },
  {
    title: "Operations Analyst",
    organization: "IBM, Atlanta GA",
    period: "1995",
    highlights: [
      "Service operations analysis",
      "Measurement and evaluation tool development",
      "Cost analysis and financial forecasting",
    ],
    color: "bg-chart-3",
  },
  {
    title: "Industrial Engineer Intern",
    organization: "New Cherokee Corporation",
    period: "1993",
    highlights: [
      "Day-to-day industrial engineering support",
    ],
    color: "bg-chart-2",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-5xl md:text-7xl font-black uppercase mb-4 -rotate-1 inline-block">
            Experience
          </h2>
          <div className="h-2 w-64 bg-black -rotate-2"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, rotate: 0 }}
              whileInView={{ opacity: 1, y: 0, rotate: index % 3 === 0 ? 1 : index % 3 === 1 ? -1 : 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ 
                rotate: 0, 
                scale: 1.03,
                boxShadow: "12px 12px 0px 0px rgba(0, 0, 0, 1)"
              }}
              className="bg-white border-6 border-black shadow-brutal-lg overflow-hidden"
              data-testid={`card-experience-${index}`}
            >
              <div className={`${exp.color} border-b-6 border-black p-6`}>
                <div className="flex items-start gap-3">
                  <Briefcase className="h-8 w-8 mt-1 flex-shrink-0" />
                  <div className="flex-1 min-w-0">
                    <h3 className="text-2xl font-black uppercase leading-tight mb-2" data-testid={`text-title-${index}`}>
                      {exp.title}
                    </h3>
                    <p className="text-lg font-bold" data-testid={`text-org-${index}`}>{exp.organization}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 mt-3 bg-black/10 border-2 border-black px-3 py-1 w-fit">
                  <Calendar className="h-4 w-4" />
                  <span className="text-sm font-bold">{exp.period}</span>
                </div>
              </div>

              <div className="p-6 bg-white">
                <ul className="space-y-2">
                  {exp.highlights.map((highlight, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-black rotate-45 mt-2 flex-shrink-0"></div>
                      <span className="text-sm font-medium leading-relaxed">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
