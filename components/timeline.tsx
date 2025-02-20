"use client";

import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

const milestones = [
  {
    year: "2004",
    title: "Graduated from Stanford University",
    description: "Earned a Bachelor of Science in Biology",
  },
  {
    year: "2008",
    title: "Graduated from UCSF School of Dentistry",
    description: "Earned Doctor of Dental Surgery (DDS) degree",
  },
  {
    year: "2010",
    title: "Completed Residency at UCSF Medical Center",
    description: "Advanced Education in General Dentistry (AEGD)",
  },
  {
    year: "2015",
    title: "Opened Bright Smile Dental Clinic",
    description: "Established own practice focusing on cosmetic dentistry",
  },
  {
    year: "2020",
    title: "Awarded 'Top Cosmetic Dentist in San Francisco'",
    description: "Recognized for excellence in cosmetic dentistry",
  },
];

export function Timeline() {
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { once: false });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-light text-center mb-8">
          Career Milestones
        </h2>
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-primary" />

          {milestones.map((milestone, index) => (
            <motion.div
              key={index}
              ref={ref}
              initial="hidden"
              animate={controls}
              variants={{
                visible: { opacity: 1, y: 0 },
                hidden: { opacity: 0, y: 50 },
              }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className={`relative flex items-center mb-6 ${
                index % 2 === 0 ? "flex-row-reverse" : ""
              }`}
            >
              <div className="flex-1" />
              <div className="w-6 h-6 absolute left-1/2 transform -translate-x-1/2 -translate-y-3 bg-primary rounded-full z-10" />
              <div className="flex-1">
                <div
                  className={`bg-white dark:bg-zinc-700 p-4 rounded-lg shadow-md ${
                    index % 2 === 0 ? "mr-6" : "ml-6"
                  }`}
                >
                  <h3 className="text-xl font-light mb-1">{milestone.year}</h3>
                  <h4 className="text-lg mb-1">{milestone.title}</h4>
                  <p className="text-zinc-600 dark:text-zinc-300 text-sm">
                    {milestone.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
