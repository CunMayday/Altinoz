import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navItems = [
  { label: "Home", href: "hero" },
  { label: "Education", href: "education" },
  { label: "Experience", href: "experience" },
  { label: "Awards", href: "awards" },
  { label: "Contact", href: "contact" },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => document.getElementById(item.href));
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].href);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <>
      <motion.nav
        className="fixed top-0 left-0 right-0 z-50 bg-white border-b-8 border-black"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <motion.div
              className="text-2xl font-black uppercase cursor-pointer"
              whileHover={{ scale: 1.05, rotate: -2 }}
              onClick={() => scrollToSection('hero')}
              data-testid="link-logo"
            >
              C.A.
            </motion.div>

            <div className="hidden md:flex gap-2">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  className={`px-6 py-2 font-bold uppercase text-sm border-4 border-black transition-all ${
                    activeSection === item.href
                      ? "bg-primary shadow-brutal"
                      : "bg-white hover:bg-muted shadow-brutal"
                  }`}
                  whileHover={{ y: -2, boxShadow: "8px 8px 0px 0px rgba(0, 0, 0, 1)" }}
                  whileTap={{ y: 0, boxShadow: "4px 4px 0px 0px rgba(0, 0, 0, 1)" }}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  data-testid={`link-${item.label.toLowerCase()}`}
                >
                  {item.label}
                </motion.button>
              ))}
            </div>

            <Button
              size="icon"
              variant="outline"
              className="md:hidden border-4 border-black bg-white shadow-brutal rounded-none h-12 w-12"
              onClick={() => setIsOpen(!isOpen)}
              data-testid="button-menu-toggle"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </motion.nav>

      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-white z-40 md:hidden pt-24"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className="flex flex-col gap-4 p-6">
            {navItems.map((item, index) => (
              <motion.button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className={`px-6 py-4 font-bold uppercase text-lg border-4 border-black ${
                  activeSection === item.href
                    ? "bg-primary shadow-brutal-lg"
                    : "bg-white shadow-brutal"
                } rotate-${index % 2 === 0 ? '1' : '-1'}`}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                data-testid={`link-mobile-${item.label.toLowerCase()}`}
              >
                {item.label}
              </motion.button>
            ))}
          </div>
        </motion.div>
      )}
    </>
  );
}
