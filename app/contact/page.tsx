"use client";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Map } from "@/components/map";

export default function Contact() {
  return (
    <main className="min-h-screen pt-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8"
      >
        <h1 className="mb-12 text-3xl font-light text-center">Contact Us</h1>
        <div className="grid gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white dark:bg-zinc-800 p-8 rounded-lg shadow-lg"
          >
            <h2 className="text-xl font-light mb-6">Get in touch</h2>
            <form className="space-y-4">
              <Input placeholder="Name" />
              <Input type="email" placeholder="Email" />
              <Input placeholder="Phone" />
              <Textarea placeholder="Message" className="min-h-[150px]" />
              <Button type="submit" className="w-full">
                Send Message
              </Button>
            </form>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            <div className=" p-8 rounded-lg shadow-lg">
              <h2 className="text-xl font-light mb-6">Office Information</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <MapPin className="mt-1 h-5 w-5 text-primary" />
                  <div>
                    <p className="font-medium">Location</p>
                    <p className="text-zinc-600 dark:text-zinc-400">
                      123 Market Street
                    </p>
                    <p className="text-zinc-600 dark:text-zinc-400">
                      San Francisco, CA 94105
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Phone className="mt-1 h-5 w-5 text-primary" />
                  <div>
                    <p className="font-medium">Phone</p>
                    <p className="text-zinc-600 dark:text-zinc-400">
                      (415) 555-0123
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Mail className="mt-1 h-5 w-5 text-primary" />
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-zinc-600 dark:text-zinc-400">
                      contact@drmitchell.com
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </main>
  );
}
