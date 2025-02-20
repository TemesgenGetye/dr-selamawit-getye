"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown, Star, Users, Award } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Testimonials } from "@/components/testimonials";
import { Button } from "@/components/ui/button";
import { ParticleBackground } from "@/components/particle-background";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import About from "./about/page";
import Contact from "./contact/page";
import Services from "./services/page";
import CountUpNumber from "@/components/countUpNumber";
import Cases from "./cases/page";
import { Canvas } from "@react-three/fiber";

const ToothModel = dynamic(
  () => import("@/components/Scene").then((mod) => mod.ToothModel),
  { ssr: false }
);

const ToothModelSmall = dynamic(
  () => import("@/components/Scene").then((mod) => mod.ToothModelSmall),
  { ssr: false }
);

export default function Home() {
  const { scrollYProgress } = useScroll();
  const [opacity, setOpacity] = useState(1);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    return scrollYProgress.onChange((latest) => {
      setOpacity(1 - latest);
      setScale(1 - latest * 0.2);
    });
  }, [scrollYProgress]);

  return (
    <div className="bg-primary-background">
      {/* Particle Background covering the entire page */}
      <div className="fixed inset-0 -z-10">
        <ParticleBackground />
      </div>

      {/* Tooth Model */}
      <div className="absolute z-0 w-full h-full overflow-visible inset-0">
        <ToothModel />
      </div>

      <div className="fixed z-50 w-full h-64 overflow-visible left-[42%] top-96">
        <ToothModelSmall />
      </div>

      <main className="min-h-screen relative z-10">
        {/* Hero Section */}
        <section className="relative flex min-h-screen flex-col items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            style={{ opacity, scale }}
            className="relative z-10 text-center text-primary"
          >
            <h1 className="mb-2 text-5xl font-bold tracking-tight sm:text-7xl">
              Dr. Selamawit Getye
            </h1>
            <h2 className="mb-8 text-3xl font-light tracking-tight sm:text-5xl">
              Cosmetic Dentistry
            </h2>
            <p className="mb-8 text-xl">Creating beautiful, healthy smiles</p>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="bg-white/10 text-white hover:bg-white/20"
            >
              <Link href="#contact">Contact Me</Link>
            </Button>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2"
          >
            <Link
              href="#services"
              className="group flex items-center gap-2 text-sm text-primary transition-colors hover:text-zinc-300"
            >
              Explore Services
              <motion.div
                animate={{ y: [0, 5, 0] }}
                transition={{
                  duration: 1.5,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              >
                <ChevronDown className="transition-transform group-hover:translate-y-1" />
              </motion.div>
            </Link>
          </motion.div>
        </section>

        {/* Services Section */}
        <section id="services" className="px-4 py-24 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mx-auto max-w-6xl"
          >
            <h2 className="mb-12 text-4xl font-light text-center">
              My Specality
            </h2>
            <div className="grid gap-16 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="mb-4 text-5xl text-primary"
                  >
                    {service.icon}
                  </motion.div>
                  <h3 className="text-2xl font-light mb-2">{service.title}</h3>
                  <p className="text-zinc-600 dark:text-zinc-400 mb-4">
                    {service.description}
                  </p>
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="h-px bg-primary"
                  />
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Link
                      href="/services"
                      className="mt-4 inline-block text-sm text-primary transition-colors hover:text-primary/80"
                    >
                      Learn more →
                    </Link>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Stats Section */}
        <section className="border-zinc-200 dark:border-zinc-700 bg-white/10 dark:bg-zinc-900/10 px-4 py-24 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mx-auto grid max-w-6xl grid-cols-2 gap-8 sm:grid-cols-4"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <motion.div
                  initial={{ rotateY: 0 }}
                  animate={{ rotateY: 360 }}
                  transition={{
                    duration: 2,
                    delay: index * 0.2,
                    repeat: Number.POSITIVE_INFINITY,
                    repeatDelay: 5,
                  }}
                  className="mb-2 flex justify-center"
                >
                  {stat.icon}
                </motion.div>
                <CountUpNumber value={stat.value} delay={index * 0.2} />
                <div className="text-sm text-zinc-600 dark:text-zinc-400">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* About Section */}
        <section className="bg-white/10 dark:bg-zinc-900/10 px-4 py-24 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="grid gap-12 md:grid-cols-2 items-center"
            >
              <div>
                <h2 className="mb-6 text-4xl font-light">
                  Meet Dr. Sarah Mitchell
                </h2>
                <p className="mb-6 text-lg text-zinc-600 dark:text-zinc-400">
                  With over 15 years of experience in cosmetic dentistry, Dr.
                  Mitchell is dedicated to creating beautiful, healthy smiles
                  that boost confidence and change lives.
                </p>
                <Button asChild>
                  <Link href="/about">Learn More About Dr. Mitchell</Link>
                </Button>
              </div>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="relative h-[400px] overflow-hidden rounded-lg"
              >
                <Image
                  src="/placeholder.svg?height=600&width=400"
                  alt="Dr. Sarah Mitchell"
                  fill
                  className="object-cover"
                />
              </motion.div>
            </motion.div>
          </div>
        </section>

        <section id="about">
          <About />
        </section>

        <section id="services">
          <Services />
        </section>
        <section id="cases">
          <Cases />
        </section>
        <section id="contact">
          <Contact />
        </section>

        <Testimonials />
      </main>
    </div>
  );
}

const services = [
  {
    title: "Cosmetic Dentistry",
    description:
      "Transform your smile with our advanced cosmetic procedures including veneers, whitening, and smile makeovers.",
    icon: <Star className="h-8 w-8" />,
  },
  {
    title: "Restorative Care",
    description:
      "Restore your dental health with crowns, bridges, and implants using the latest techniques and materials.",
    icon: <Award className="h-8 w-8" />,
  },
  {
    title: "Preventive Care",
    description:
      "Maintain your oral health with regular cleanings, examinations, and personalized preventive care plans.",
    icon: <Users className="h-8 w-8" />,
  },
  {
    title: "Invisalign",
    description:
      "Achieve a straighter smile discreetly with custom clear aligners and expert orthodontic care.",
    icon: <Star className="h-8 w-8" />,
  },
  {
    title: "Dental Implants",
    description:
      "Replace missing teeth with state-of-the-art dental implants that look, feel, and function like natural teeth.",
    icon: <Award className="h-8 w-8" />,
  },
  {
    title: "Smile Makeovers",
    description:
      "Completely transform your smile with a customized treatment plan combining various cosmetic procedures.",
    icon: <Users className="h-8 w-8" />,
  },
];

const stats = [
  {
    label: "Years Experience",
    value: 5,
    icon: <Star className="h-8 w-8 text-primary" />,
  },
  {
    label: "Patients Served",
    value: 500,
    icon: <Users className="h-8 w-8 text-primary" />,
  },
  {
    label: "Satisfaction Rate",
    value: 99,
    icon: <Star className="h-8 w-8 text-primary" />,
  },
  {
    label: "Awards Won",
    value: 2,
    icon: <Award className="h-8 w-8 text-primary" />,
  },
];
