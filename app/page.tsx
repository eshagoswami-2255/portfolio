"use client";

import { motion } from "framer-motion";
import { Mail } from "lucide-react";

export default function Portfolio() {
  const projects = [
    {
      title: "Scroll Animation Website",
      desc: "Interactive scroll-based animation using React and Framer Motion.",
      live: "#",
      github: "#",
    },
    {
      title: "Full Stack Todo App",
      desc: "MERN stack app with authentication and CRUD features.",
      live: "#",
      github: "#",
    },
    {
      title: "E-commerce Website",
      desc: "Shopping app with cart and payment integration.",
      live: "#",
      github: "#",
    },
  ];

  return (
    <div className="bg-black text-white min-h-screen">

      {/* HERO */}
      <section className="h-screen flex flex-col items-center justify-center text-center px-6">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-bold"
        >
          Hi, I'm Esha 👋
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-4 text-gray-400"
        >
          Full Stack Developer | React | Node.js
        </motion.p>

        <p className="mt-2 text-sm text-gray-500">
          Available for internships 🚀
        </p>

        <div className="flex gap-4 mt-6">
          <a href="#projects" className="bg-blue-500 px-5 py-2 rounded-xl">
            View Projects
          </a>
          <a href="#contact" className="border px-5 py-2 rounded-xl">
            Contact Me
          </a>
        </div>
      </section>

      {/* ABOUT */}
      <section className="px-10 py-20 max-w-4xl mx-auto">
        <h2 className="text-3xl font-semibold mb-4">About Me</h2>
        <p className="text-gray-400">
          I build modern, scalable web applications using the MERN stack and love creating smooth UI experiences with animations.
        </p>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="px-10 py-20">
        <h2 className="text-3xl font-semibold mb-10 text-center">Projects</h2>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="bg-gray-900 p-6 rounded-2xl"
            >
              <h3 className="text-xl font-bold">{project.title}</h3>
              <p className="text-gray-400 mt-2">{project.desc}</p>

              {/* TECH TAGS */}
              <div className="mt-3 flex gap-2 flex-wrap">
                <span className="text-xs bg-blue-500 px-2 py-1 rounded">React</span>
                <span className="text-xs bg-green-500 px-2 py-1 rounded">Node</span>
                <span className="text-xs bg-purple-500 px-2 py-1 rounded">MongoDB</span>
              </div>

              {/* LINKS */}
              <div className="mt-4 flex gap-4">
                <a href={project.live} className="text-blue-400">Live</a>
                <a href={project.github} className="text-blue-400">GitHub</a>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* SKILLS */}
      <section className="px-10 py-20 text-center">
        <h2 className="text-3xl font-semibold mb-6">Skills</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {["HTML", "CSS", "JavaScript", "React", "Node.js", "MongoDB"].map((skill) => (
            <span key={skill} className="bg-gray-800 px-4 py-2 rounded-xl">
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="px-10 py-20 text-center">
        <h2 className="text-3xl font-semibold mb-6">Contact</h2>

        <div className="flex justify-center gap-6 items-center">
          <a href="mailto:youremail@gmail.com">
            <Mail />
          </a>
          <a href="https://github.com/yourusername" target="_blank">
            Github
          </a>
          <a href="https://linkedin.com/in/yourprofile" target="_blank">
            LinkedIn
          </a>
        </div>
      </section>

    </div>
  );
}