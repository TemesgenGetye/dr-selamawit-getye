"use client";

import { motion } from "framer-motion";
import { BeforeAfterSlider } from "@/components/before-after-slider";

const cases = [
  {
    title: "Smile Makeover",
    description: "Complete smile transformation using porcelain veneers",
    beforeImage:
      "https://pvfamilydentistry.com/wp-content/uploads/2019/10/DSC_0133-1024x680.jpg",
    afterImage:
      "https://pvfamilydentistry.com/wp-content/uploads/2019/11/Resize_After_Image_Case_13_Pic1-1024x680.jpg",
  },
  {
    title: "Invisalign Treatment",
    description: "12-month clear aligner therapy",
    beforeImage: "/placeholder.svg?height=400&width=300",
    afterImage: "/placeholder.svg?height=400&width=300",
  },
  {
    title: "Dental Implants",
    description: "Single tooth replacement with dental implant",
    beforeImage: "/placeholder.svg?height=400&width=300",
    afterImage: "/placeholder.svg?height=400&width=300",
  },
];

export default function Cases() {
  return (
    <main className="min-h-screen pt-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8"
      >
        <h1 className="mb-12 text-3xl font-light">Case Studies</h1>
        <div className="grid gap-16">
          {cases.map((case_, index) => (
            <motion.div
              key={case_.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group"
            >
              <h2 className="mb-4 text-xl font-light">{case_.title}</h2>
              <p className="mb-6 text-zinc-600">{case_.description}</p>
              <BeforeAfterSlider
                beforeImage={case_.beforeImage}
                afterImage={case_.afterImage}
                beforeLabel="Before"
                afterLabel="After"
              />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </main>
  );
}
