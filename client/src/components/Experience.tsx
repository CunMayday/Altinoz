import { motion } from "framer-motion";
import { Briefcase, Calendar } from "lucide-react";

const experiences = [
  {
    title: "Professor",
    organization: "Purdue University Global",
    period: "2009 - Present",
    highlights: [
      "Faculty lead in charge of developing the new Doctorate in Business Administration program",
      "Received the 2025 Purdue University Online award for Innovative Online Use of Technology",
      "Received the 2023 Purdue University Online award for Excellence in Online Course Design",
      "Received the 2021 ACBSP Teaching Excellence Award, one of 7 winners in the U.S.",
      "Recognized as the 2016 School of Business Professor of the Year",
      "Faculty advisor for Delta Mu Delta Honor Society",
    ],
    color: "bg-primary",
  },
  {
    title: "Post-doctoral Research Fellow",
    organization: "North Carolina State University",
    period: "2001 - 2003",
    highlights: [
      "Created fuzzy logic based decision support system for supplier selection",
    ],
    color: "bg-secondary",
  },
  {
    title: "Research Assistant",
    organization: "North Carolina State University",
    period: "1997 - 2001",
    highlights: [
      "Conducted research regarding decision support systems",
      "Performance measurement in and of organizations",
      "Simulations to analyze coordination",
      "Workflow analysis of business processes",
      "Support for business decisions using fuzzy logic",
      "Developed two software programs",
      "Research results led to opportunities for patents and business establishment",
    ],
    color: "bg-chart-3",
  },
  {
    title: "Consultant",
    organization: "CIBA Vision, Atlanta GA",
    period: "1995 - 1997",
    highlights: [
      "Consulted regarding inventory control issues",
      "Developed and implemented new methodology for effective inventory control",
      "Deliverables included inventory target levels and software tools",
      "Expanded work to additional product lines after initial success",
      "Analyzed shipping warehouse efficiency",
    ],
    color: "bg-muted",
  },
  {
    title: "Operations Analyst",
    organization: "IBM, Atlanta GA",
    period: "1995",
    highlights: [
      "Analyzed service operations and developed measurement tools",
      "Developed cost analysis tools and financial forecasts",
      "Created new queries for information collection",
      "Produced analysis reports and performance forecasts",
    ],
    color: "bg-secondary",
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
