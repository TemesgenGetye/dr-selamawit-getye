"use client"

import { motion } from "framer-motion"
import { PageTransition } from "@/components/page-transition"
import { Button } from "@/components/ui/button"
import { FileText } from "lucide-react"

export default function CV() {
  return (
    <PageTransition>
      <main className="min-h-screen pt-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="mb-6 text-4xl font-light">Curriculum Vitae</h1>
            <p className="mb-12 text-lg text-zinc-600">
              View Dr. Sarah Mitchell's full professional history and qualifications.
            </p>
            <Button asChild size="lg">
              <a
                href="https://drive.google.com/file/d/your-cv-file-id/view"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center"
              >
                <FileText className="mr-2 h-5 w-5" />
                View CV on Google Drive
              </a>
            </Button>
          </motion.div>
        </div>
      </main>
    </PageTransition>
  )
}

