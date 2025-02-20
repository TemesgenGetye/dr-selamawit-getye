"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { PageTransition } from "@/components/page-transition";
import Image from "next/image";

const services = [
  {
    title: "Cosmetic Dentistry",
    description:
      "Transform your smile with our advanced cosmetic procedures including veneers, whitening, and smile makeovers.",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    title: "Restorative Care",
    description:
      "Restore your dental health with crowns, bridges, and implants using the latest techniques and materials.",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    title: "Preventive Care",
    description:
      "Maintain your oral health with regular cleanings, examinations, and personalized preventive care plans.",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    title: "Invisalign",
    description:
      "Achieve a straighter smile discreetly with custom clear aligners and expert orthodontic care.",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    title: "Dental Implants",
    description:
      "Replace missing teeth with state-of-the-art dental implants that look, feel, and function like natural teeth.",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    title: "Smile Makeovers",
    description:
      "Completely transform your smile with a customized treatment plan combining various cosmetic procedures.",
    image: "/placeholder.svg?height=300&width=400",
  },
];

export default function Services() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <PageTransition>
      <main className="min-h-screen pt-24 relative overflow-hidden">
        <motion.div className="absolute inset-0 z-0" />
        <div className="relative z-10">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="mb-12 text-4xl font-light text-center text-white">
                Our Services
              </h1>
            </motion.div>
            <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="group space-y-4 p-6 rounded-lg shadow-lg"
                >
                  <div className="overflow-hidden rounded-lg">
                    <Image
                      src={service.image || "/placeholder.svg"}
                      alt={service.title}
                      width={400}
                      height={300}
                      className="transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <h2 className="text-2xl font-light">{service.title}</h2>
                  <p className="text-zinc-600 dark:text-zinc-400">
                    {service.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </PageTransition>
  );
}
