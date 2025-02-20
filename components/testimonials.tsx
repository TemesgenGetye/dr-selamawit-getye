"use client"

import { motion } from "framer-motion"
import { Quote } from "lucide-react"

const testimonials = [
  {
    quote: "Dr. Mitchell transformed my smile completely. I couldn't be happier with the results!",
    author: "Emily R.",
    role: "Veneers Patient",
  },
  {
    quote: "The most caring and professional dental experience I've ever had. Highly recommended!",
    author: "Michael S.",
    role: "Invisalign Patient",
  },
  {
    quote: "Outstanding results and a painless experience. Dr. Mitchell is simply the best!",
    author: "Sarah L.",
    role: "Implant Patient",
  },
]

export function Testimonials() {
  return (
    <section className="bg-zinc-100 dark:bg-zinc-800 px-4 py-24 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="mx-auto max-w-4xl"
      >
        <h2 className="mb-12 text-3xl font-light text-center">Patient Stories</h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group space-y-4 bg-white dark:bg-zinc-700 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2 + index * 0.1, type: "spring", stiffness: 260, damping: 20 }}
              >
                <Quote className="h-8 w-8 text-primary" />
              </motion.div>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                className="text-zinc-600 dark:text-zinc-300"
              >
                {testimonial.quote}
              </motion.p>
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 + index * 0.1 }}>
                <p className="font-medium">{testimonial.author}</p>
                <p className="text-sm text-zinc-500 dark:text-zinc-400">{testimonial.role}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

