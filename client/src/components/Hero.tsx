import { motion } from "framer-motion";
import { Mail, ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Hero() {
  const currentYear = new Date().getFullYear();
  const yearsAtPurdue = currentYear - 2009;
  const yearsTeaching = currentYear - 2003;

  const floatingShapes = [
    { color: "bg-primary", size: "w-32 h-32", x: "10%", y: "20%", rotation: 45, delay: 0 },
    { color: "bg-secondary", size: "w-24 h-24", x: "80%", y: "15%", rotation: -30, delay: 0.2 },
    { color: "bg-chart-3", size: "w-28 h-28", x: "15%", y: "70%", rotation: 15, delay: 0.4 },
    { color: "bg-muted", size: "w-20 h-20", x: "85%", y: "75%", rotation: -45, delay: 0.6 },
    { color: "bg-primary", size: "w-16 h-16", x: "50%", y: "10%", rotation: 60, delay: 0.8 },
  ];

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 py-24">
      {floatingShapes.map((shape, i) => (
        <motion.div
          key={i}
          className={`absolute ${shape.size} ${shape.color} border-4 border-black shadow-brutal`}
          style={{
            left: shape.x,
            top: shape.y,
            rotate: shape.rotation,
          }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: 1,
            scale: 1,
            y: [0, -20, 0],
          }}
          transition={{
            duration: 0.6,
            delay: shape.delay,
            y: {
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
        />
      ))}

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-5 gap-12 items-center">
          <div className="lg:col-span-3 space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -50, rotate: -5 }}
              animate={{ opacity: 1, x: 0, rotate: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-6xl md:text-8xl font-black uppercase leading-none" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                <motion.span
                  className="block"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  CUNEYT
                </motion.span>
                <motion.span
                  className="block -rotate-2 my-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  ALTINOZ
                </motion.span>
              </h1>
            </motion.div>

            <motion.div
              className="inline-block bg-primary border-8 border-black px-8 py-4 rotate-1 shadow-brutal-lg"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6, type: "spring", stiffness: 200 }}
            >
              <p className="text-2xl md:text-3xl font-bold uppercase">
                Professor at Purdue University Global
              </p>
            </motion.div>

            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <Button
                size="lg"
                className="bg-secondary border-4 border-black shadow-brutal hover:shadow-brutal-lg transition-all hover:-translate-y-1 text-lg font-bold uppercase px-8 py-6 h-auto rounded-none"
                onClick={() => scrollToSection('contact')}
                data-testid="button-contact"
              >
                <Mail className="mr-2 h-5 w-5" />
                Get in Touch
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-white border-4 border-black shadow-brutal hover:shadow-brutal-lg transition-all hover:-translate-y-1 text-lg font-bold uppercase px-8 py-6 h-auto rounded-none"
                onClick={() => scrollToSection('awards')}
                data-testid="button-learn-more"
              >
                Learn More
                <ArrowDown className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>
          </div>

          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            <div className="bg-secondary border-8 border-black p-8 -rotate-3 shadow-brutal-xl">
              <div className="text-sm font-bold uppercase mb-4 text-black/70">Welcome students. You are in good hands!</div>
              <div className="space-y-4">
                <div className="bg-white border-4 border-black p-4">
                  <div className="text-4xl font-black" data-testid="text-years-experience">{yearsAtPurdue}</div>
                  <div className="text-sm font-bold uppercase">Years at Purdue Global</div>
                </div>
                <div className="bg-white border-4 border-black p-4">
                  <div className="text-4xl font-black" data-testid="text-degrees">{yearsTeaching}</div>
                  <div className="text-sm font-bold uppercase">Years Teaching Experience</div>
                </div>
                <div className="bg-white border-4 border-black p-4">
                  <div className="text-4xl font-black" data-testid="text-awards">4</div>
                  <div className="text-sm font-bold uppercase">Major Awards</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
