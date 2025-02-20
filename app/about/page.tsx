"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { PageTransition } from "@/components/page-transition";
import { ExperienceEducation } from "@/components/experience-education";
import { Timeline } from "@/components/timeline";
import { ParticleBackground } from "@/components/particle-background";

export default function About() {
  return (
    <PageTransition>
      <main className="min-h-screen pt-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="mb-12 text-4xl font-light">
              About Dr. Selamawit Getye
            </h1>
          </motion.div>
          <div className="grid gap-12 md:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Image
                src="/placeholder.svg?height=600&width=400"
                alt="Dr. Sarah Mitchell"
                width={400}
                height={600}
                className="rounded-lg object-cover"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-6"
            >
              <p className="text-lg text-muted-foreground">
                Dr. Sarah Mitchell is a highly skilled cosmetic dentist with
                over 15 years of experience in transforming smiles and boosting
                confidence. Her passion for dentistry and commitment to patient
                care have made her one of the most sought-after dental
                professionals in San Francisco.
              </p>
              <p className="text-lg text-muted-foreground">
                After graduating with honors from the University of California,
                San Francisco School of Dentistry, Dr. Mitchell completed
                advanced training in cosmetic and restorative dentistry. She is
                known for her meticulous attention to detail and her ability to
                create natural-looking, beautiful smiles.
              </p>
              <p className="text-lg text-muted-foreground">
                Dr. Mitchell is dedicated to staying at the forefront of dental
                technology and techniques. She regularly attends continuing
                education courses and dental conferences to bring the latest
                advancements to her patients.
              </p>
              <p className="text-lg text-muted-foreground">
                Outside of her practice, Dr. Mitchell is an active member of the
                American Academy of Cosmetic Dentistry and volunteers her time
                providing dental care to underserved communities.
              </p>
            </motion.div>
          </div>
        </div>
        <Timeline />
        <ExperienceEducation />
      </main>
    </PageTransition>
  );
}
