import { motion } from "framer-motion";
import { GraduationCap, Calendar, MapPin } from "lucide-react";

const education = [
  {
    degree: "PhD",
    school: "North Carolina State University",
    location: "Raleigh, NC",
    years: "1997-2001",
    color: "bg-primary",
  },
  {
    degree: "MBA",
    school: "Georgia Institute of Technology",
    location: "Atlanta, GA",
    years: "1994-1996",
    color: "bg-secondary",
  },
  {
    degree: "BS - Industrial Engineering",
    school: "North Carolina State University",
    location: "Raleigh, NC",
    years: "1990-1994",
    color: "bg-chart-3",
  },
];

export default function Education() {
  return (
    <section id="education" className="py-24 px-6 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-5xl md:text-7xl font-black uppercase mb-4 rotate-1 inline-block">
            Education
          </h2>
          <div className="h-2 w-48 bg-black rotate-2"></div>
        </motion.div>

        <div className="space-y-12">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100, rotate: 0 }}
              whileInView={{ opacity: 1, x: 0, rotate: index % 2 === 0 ? 1 : -1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ rotate: 0, scale: 1.02 }}
              className={`relative bg-white border-8 border-black p-8 shadow-brutal-lg ${
                index % 2 === 0 ? 'lg:mr-12' : 'lg:ml-12'
              }`}
              data-testid={`card-education-${index}`}
            >
              <div className="absolute -top-8 -left-8 text-9xl font-black opacity-20 select-none">
                {edu.years.split('-')[1]}
              </div>

              <div className="relative">
                <div className={`inline-block ${edu.color} border-4 border-black px-6 py-2 mb-4 shadow-brutal`}>
                  <div className="flex items-center gap-2">
                    <GraduationCap className="h-6 w-6" />
                    <span className="text-2xl font-black uppercase">{edu.degree}</span>
                  </div>
                </div>

                <h3 className="text-3xl font-bold mb-4" data-testid={`text-school-${index}`}>{edu.school}</h3>

                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center gap-2 bg-muted border-2 border-black px-4 py-2">
                    <MapPin className="h-4 w-4" />
                    <span className="font-bold text-sm">{edu.location}</span>
                  </div>
                  <div className="flex items-center gap-2 bg-muted border-2 border-black px-4 py-2">
                    <Calendar className="h-4 w-4" />
                    <span className="font-bold text-sm">{edu.years}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
