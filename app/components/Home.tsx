"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const fields = [
  {
    title: "AI & Machine Learning",
    definition:
      "The field that focuses on creating systems that learn and improve from experience automatically.",
  },
  {
    title: "Front-End Development",
    definition:
      "The part of web development that involves creating the user interface and user experience.",
  },
  {
    title: "Back-End Development",
    definition:
      "The behind-the-scenes functionality of a web application, including servers, databases, and APIs.",
  },
  {
    title: "Full-Stack Development",
    definition:
      "A combination of both front-end and back-end development, handling both aspects of web applications.",
  },
  {
    title: "Cybersecurity",
    definition:
      "The practice of protecting networks, systems, and programs from digital attacks.",
  },
  {
    title: "Data Science",
    definition:
      "A multidisciplinary field focused on extracting insights from structured and unstructured data.",
  },
  {
    title: "Cloud Computing",
    definition:
      "The delivery of computing services like storage and processing power over the internet.",
  },
  {
    title: "Game Development",
    definition:
      "The art and science of creating interactive video games for entertainment and learning.",
  },
  {
    title: "Mobile App Development",
    definition:
      "The process of building applications for mobile platforms like Android and iOS.",
  },
  {
    title: "Blockchain Technology",
    definition:
      "A decentralized, distributed ledger that records transactions in a secure and immutable way.",
  },
];

export default function HomePage() {
  return (
    <div className="bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white min-h-screen">
      {/* Navbar */}
      <motion.nav
        className="fixed top-0 left-0 right-0 bg-gray-900 shadow-md py-4 px-8 flex justify-between items-center z-50"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-lg font-bold text-white">My IT World</h1>
        <Link
          href="/login"
          className="bg-blue-500 text-white px-6 py-2 rounded-lg font-bold hover:bg-blue-600 transition"
        >
          Login
        </Link>
      </motion.nav>

      <motion.div
        className="container mx-auto pt-24 px-4 sm:px-6 lg:px-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        
        {/* header */}
        <motion.h1
          className="text-4xl md:text-6xl font-extrabold text-center mb-12"
          initial={{ y: -50 }}
          animate={{ y: 0 }}
          transition={{ duration: 1, type: "spring" }}
        >
          Welcome to the World of IT!
        </motion.h1>

        {/* divs */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {fields.map((field, index) => (
            <motion.div
              key={index}
              className="p-6 bg-gray-800 rounded-lg shadow-lg hover:shadow-2xl hover:bg-gray-700 transform transition-transform duration-300"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h2 className="text-2xl font-bold mb-4">{field.title}</h2>
              <p className="text-gray-400">{field.definition}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

     {/* //footer */}
      <motion.footer
        className="mt-20 py-6 text-center text-gray-500"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Built with ❤️ by Daniyal
      </motion.footer>
    </div>
  );
}
