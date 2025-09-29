"use client";
import React, { useState } from "react";
import Footer from "@/app/components/Footer";
import Navbar from "@/app/components/Navbar";
import { motion } from "framer-motion";
import { useLanguage } from "@/app/context/LanguageContext";

export default function Page() {
  const { t } = useLanguage();
  const [filter, setFilter] = useState("all");

  const images = [
    {
      src: "/images/oba-akiolu.jpg",
      category: "modern",
      title: "Oba Akiolu I",
      description: "Current Oba of Lagos",
    },
    {
      src: "/images/oba-akiolu2.jpg",
      category: "modern",
      title: "Palace Ceremony",
      description: "Traditional ceremony at the palace",
    },
    {
      src: "/images/eyo-festival.jpg",
      category: "cultural",
      title: "Eyo Festival",
      description: "Annual cultural celebration",
    },
    {
      src: "/images/cultural.jpg",
      category: "cultural",
      title: "Cultural Heritage",
      description: "Preserving our traditions",
    },
    {
      src: "/images/palace.jpg",
      category: "historical",
      title: "Iga Idunganran",
      description: "The Palace of the Oba of Lagos",
    },
    // Add more images as needed
  ];

  const filteredImages =
    filter === "all" ? images : images.filter((img) => img.category === filter);

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Navbar />

      {/* Hero Section */}
      <motion.section
        className="pt-24 pb-12 text-center"
        initial={fadeInUp.initial}
        animate={fadeInUp.animate}
        transition={fadeInUp.transition}
      >
        <h1 className="text-4xl md:text-5xl font-bold text-green-800 mb-4">
          {t("royalGallery")}
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto px-4">
          {t("galleryDescription")}
        </p>
      </motion.section>

      {/* Filter Buttons */}
      <motion.div
        className="flex justify-center gap-4 mb-12 px-4"
        initial={fadeInUp.initial}
        animate={fadeInUp.animate}
        transition={{ ...fadeInUp.transition, delay: 0.2 }}
      >
        <FilterButton
          active={filter === "all"}
          onClick={() => setFilter("all")}
        >
          {t("all")}
        </FilterButton>
        <FilterButton
          active={filter === "modern"}
          onClick={() => setFilter("modern")}
        >
          {t("modern")}
        </FilterButton>
        <FilterButton
          active={filter === "cultural"}
          onClick={() => setFilter("cultural")}
        >
          {t("cultural")}
        </FilterButton>
        <FilterButton
          active={filter === "historical"}
          onClick={() => setFilter("historical")}
        >
          {t("historical")}
        </FilterButton>
      </motion.div>

      {/* Gallery Grid */}
      <motion.div
        className="container mx-auto px-4 pb-20"
        initial={fadeInUp.initial}
        animate={fadeInUp.animate}
        transition={{ ...fadeInUp.transition, delay: 0.3 }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredImages.map((image, index) => (
            <motion.div
              key={index}
              className="group relative overflow-hidden rounded-2xl shadow-lg bg-white"
              whileHover={{ y: -5 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="aspect-w-16 aspect-h-12">
                <img
                  src={image.src}
                  alt={image.title}
                  className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-xl font-bold mb-2">{image.title}</h3>
                <p className="text-sm opacity-90">{image.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <Footer />
    </div>
  );
}

// Helper Component for Filter Buttons
const FilterButton = ({ children, active, onClick }) => (
  <motion.button
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className={`px-6 py-2 rounded-full font-medium transition-colors duration-300 ${
      active
        ? "bg-green-700 text-white"
        : "bg-white text-gray-700 hover:bg-green-50"
    } shadow-md`}
    onClick={onClick}
  >
    {children}
  </motion.button>
);
