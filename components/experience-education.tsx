"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useEffect } from "react";
import { Briefcase, GraduationCap } from "lucide-react";
import Image from "next/image";

const experiences = [
  {
    title: "Lead Cosmetic Dentist",
    company: "Bright Smile Dental Clinic",
    period: "2015 - Present",
    description:
      "Specializing in advanced cosmetic procedures and full mouth rehabilitations.",
    logo: "/placeholder.svg?height=100&width=100",
  },
  {
    title: "Associate Dentist",
    company: "San Francisco Dental Associates",
    period: "2010 - 2015",
    description:
      "Focused on general and cosmetic dentistry, developing expertise in veneers and Invisalign.",
    logo: "/placeholder.svg?height=100&width=100",
  },
  {
    title: "Dental Resident",
    company: "UCSF Medical Center",
    period: "2008 - 2010",
    description:
      "Completed a two-year residency program in Advanced Education in General Dentistry (AEGD).",
    logo: "/placeholder.svg?height=100&width=100",
  },
];

const education = [
  {
    degree: "Doctor of Dental Surgery (DDS)",
    school: "University of California, San Francisco",
    year: "2008",
    logo: "/placeholder.svg?height=100&width=100",
  },
  {
    degree: "Bachelor of Science in Biology",
    school: "Stanford University",
    year: "2004",
    logo: "/placeholder.svg?height=100&width=100",
  },
  {
    degree: "Continuing Education",
    school: "Various Institutions",
    year: "Ongoing",
    description:
      "Regular attendance at dental conferences and workshops to stay current with the latest techniques and technologies.",
    logo: "/placeholder.svg?height=100&width=100",
  },
];

const InfiniteScroll = ({
  items,
}: {
  items: typeof experiences | typeof education;
}) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const { scrollXProgress } = useScroll({ container: scrollRef });
  const x = useTransform(scrollXProgress, [0, 1], ["0%", "-100%"]);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    const scrollWidth = scrollContainer.scrollWidth;
    const clientWidth = scrollContainer.clientWidth;

    let animationFrameId: number;

    const scroll = () => {
      if (scrollContainer.scrollLeft >= scrollWidth / 2) {
        scrollContainer.scrollLeft = 0;
      } else {
        scrollContainer.scrollLeft += 0.5; // Adjust speed here (lower value = slower scroll)
      }
      animationFrameId = requestAnimationFrame(scroll);
    };

    animationFrameId = requestAnimationFrame(scroll);

    return () => {
      cancelAnimationFrame(animationFrameId); // Cleanup animation frame on unmount
    };
  }, []);

  return (
    <div
      ref={scrollRef}
      className="overflow-x-hidden cursor-grab active:cursor-grabbing"
    >
      <motion.div style={{ x }} className="flex space-x-8 py-4">
        {[...items, ...items, ...items, ...items].map((item, index) => (
          <div key={index} className="flex-shrink-0 w-48">
            <Image
              src={item.logo || "/placeholder.svg"}
              alt={"company" in item ? item.company : item.school}
              width={100}
              height={100}
              className="mx-auto mb-4"
            />
            <p className="text-center text-sm">
              {"company" in item ? item.company : item.school}
            </p>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export function ExperienceEducation() {
  return (
    <section className="section-padding container-padding">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="mb-8 text-4xl font-light">Experience</h2>
          <InfiniteScroll items={experiences} />
          <div className="space-y-8 mt-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start space-x-4"
              >
                <Briefcase className="mt-1 h-6 w-6 text-primary flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-medium">{exp.title}</h3>
                  <p className="text-muted-foreground">
                    {exp.company} | {exp.period}
                  </p>
                  <p className="mt-2">{exp.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="mb-8 text-4xl font-light">Education</h2>
          <InfiniteScroll items={education} />
          <div className="space-y-8 mt-8">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start space-x-4"
              >
                <GraduationCap className="mt-1 h-6 w-6 text-primary flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-medium">{edu.degree}</h3>
                  <p className="text-muted-foreground">
                    {edu.school} | {edu.year}
                  </p>
                  {edu.description && <p className="mt-2">{edu.description}</p>}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
