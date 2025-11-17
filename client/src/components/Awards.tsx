import { motion } from "framer-motion";
import { Award, Trophy, Star } from "lucide-react";

const awards = [
  {
    year: "2025",
    title: "Innovative Online Use of Technology",
    organization: "Purdue University Online",
    icon: Star,
    color: "bg-primary",
  },
  {
    year: "2023",
    title: "Excellence in Online Course Design and Delivery",
    organization: "Purdue University Online",
    icon: Award,
    color: "bg-secondary",
  },
  {
    year: "2021",
    title: "ACBSP Teaching Excellence Award",
    organization: "ACBSP",
    icon: Trophy,
    color: "bg-accent",
  },
  {
    year: "2016",
    title: "School of Business Professor of the Year",
    organization: "Purdue University Global",
    icon: Star,
    color: "bg-chart-4",
  },
];

export default function Awards() {
  return (
    <section id="awards" className="py-24 px-6 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-5xl md:text-7xl font-black uppercase mb-4 inline-block rotate-2">
            Awards & Recognition
          </h2>
          <div className="h-2 w-96 bg-black rotate-1 mx-auto"></div>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {awards.map((award, index) => {
            const Icon = award.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8, rotate: 0 }}
                whileInView={{ 
                  opacity: 1, 
                  scale: 1, 
                  rotate: index % 4 === 0 ? 2 : index % 4 === 1 ? -2 : index % 4 === 2 ? 3 : -3
                }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.5, 
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 200
                }}
                whileHover={{ 
                  rotate: 0, 
                  scale: 1.1,
                  transition: { duration: 0.2 }
                }}
                className={`relative bg-white border-6 border-black p-6 shadow-brutal-lg cursor-pointer`}
                data-testid={`card-award-${index}`}
              >
                <div className="absolute -top-4 -right-4 text-8xl font-black opacity-10 select-none">
                  {award.year}
                </div>

                <div className={`${award.color} border-4 border-black p-4 mb-4 inline-block shadow-brutal`}>
                  <Icon className="h-12 w-12" />
                </div>

                <div className="relative">
                  <h3 className="text-xl font-black uppercase mb-2 leading-tight" data-testid={`text-award-title-${index}`}>
                    {award.title}
                  </h3>
                  <p className="text-sm font-bold text-muted-foreground">
                    {award.organization}
                  </p>
                  <div className="mt-3 bg-black text-white px-3 py-1 inline-block font-bold text-xs">
                    {award.year}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 bg-chart-3 border-8 border-black p-8 rotate-1 shadow-brutal-xl"
        >
          <h3 className="text-3xl font-black uppercase mb-4">Additional Roles</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white border-4 border-black p-4">
              <div className="font-bold text-sm uppercase mb-1">Faculty Advisor</div>
              <div className="text-lg font-black">Delta Mu Delta Honor Society</div>
            </div>
            <div className="bg-white border-4 border-black p-4">
              <div className="font-bold text-sm uppercase mb-1">Faculty Advisor</div>
              <div className="text-lg font-black">Supply Chain Students' Club</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
