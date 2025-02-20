"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu } from "lucide-react"; // Menu icon

const navItems = [
  { href: "/", label: "Home" },
  { href: "about", label: "About" },
  { href: "services", label: "Services" },
  { href: "cases", label: "Cases" },
  { href: "cv", label: "CV" },
  { href: "contact", label: "Contact" },
];

export function Nav() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  let timeout: NodeJS.Timeout;

  return (
    <div
      className="fixed left-0 top-1/2 -translate-y-1/2 z-50"
      onMouseEnter={() => {
        clearTimeout(timeout);
        setIsOpen(true);
      }}
      onMouseLeave={() => {
        timeout = setTimeout(() => setIsOpen(false), 400); // Delay before closing
      }}
    >
      {/* Floating Menu Icon */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="p-2 bg-primary rounded-r-lg text-secondary shadow-md cursor-pointer"
      >
        <Menu size={24} />
      </motion.div>

      {/* Navigation Panel */}
      <motion.nav
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: isOpen ? 0 : -100, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className={`absolute top-0 left-0 h-screen bg-background/90 backdrop-blur-md shadow-lg border-r border-border px-6 py-8 rounded-r-lg ${
          isOpen ? "pointer-events-auto" : "pointer-events-none"
        }`}
      >
        <h2 className="text-lg font-light mb-6">Dr. Selamawit Getye</h2>
        <div className="flex flex-col gap-4">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={`#${item.href}`}
              className={`text-sm py-2 px-4 rounded-md transition-colors ${
                pathname === item.href
                  ? "text-foreground bg-primary/20"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </motion.nav>
    </div>
  );
}
