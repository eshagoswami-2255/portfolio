"use client";

import { motion } from "framer-motion";
import { Mail } from "lucide-react";

export default function Portfolio() {
  return (
    <main className="min-h-screen bg-black text-white p-6">

      {/* HERO */}
      <section className="text-center mt-20">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl font-bold"
        >
          Hi, I'm Esha 👋
        </motion.h1>

        <p className="mt-4 text-gray-400">
          Full Stack Developer | React | Node.js
        </p>
      </section>

      {/* PROJECTS */}
      <section className="mt-20">
        <h2 className="text-2xl font-semibold mb-6">Projects</h2>

        <div className="grid md:grid-cols-3 gap-6">
          {[1, 2, 3].map((item) => (
            <div key={item} className="bg-gray-900 p-4 rounded-xl">
              <h3 className="text-xl font-bold">Project {item}</h3>
              <p className="text-gray-400 mt-2">
                Full stack app with API integration.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section className="mt-20 text-center">
        <h2 className="text-2xl mb-4">Contact</h2>

        <div className="flex justify-center gap-6">
          <Mail />
        </div>
      </section>

    </main>
  );
}