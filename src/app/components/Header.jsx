"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";
import Image from "next/image";

export default function Header() {
  const { t } = useLanguage();
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [ 
    {
      image: "/images/oba-akiolu-3.png",
      title: "About The King",
      link: "/pages/theking",
    },
    {
      image: "/images/Eyo-Festival.jpg",
      title: "Welcome to the legacy of Nigeria Monarchs",
      link: "#",
    },
    {
      image: "/images/Oba-Akiolu1.jpg",
      title: "Preserving the Past, Inspiring the Future",
      link: "#",
    },
    {
      image: "/images/cultural.jpg",
      title: "Cultural Heritage Unveiled",
      link: "#",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="bg-white/95 pt-0 md:pt-28 shadow-md py-4 relative"> 
      <div className="pb-12">

         <h1 className="text-5xl text-center md:text-5xl font-bold mb-6 text-green-800" data-aos="fade-down"  data-aos-easing="linear"
     data-aos-duration="1500">
            {t("THE LEGACY OF NIGERIA MONARCHS")}
          </h1>
          <p className="md:text-xl text-center text-gray-600 max-w-3xl mx-auto"  data-aos="flip-up"  data-aos-easing="linear"
     data-aos-duration="1500">
            {t("discoverRichHistory")}
          </p>
      </div>
      {/* <div className="mx-auto max-w-7xl px-4 md:px-8">
        
        <div className="h-[60vh] relative">
          <AnimatePresence mode="wait">
            
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="h-full relative"
            >
              <div className="relative h-full w-full">
                <Image
                  src={slides[currentSlide].image}
                  alt={slides[currentSlide].title}
                  fill
                  priority
                  className="object-cover transition-transform duration-300 hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
                />
              </div>
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="absolute bottom-0 left-0 right-0 bg-black/50 p-4"
              >
                <a
                  href={slides[currentSlide].link}
                  className="text-lg font-bold text-white hover:text-green-400 transition-colors duration-300"
                >
                  {slides[currentSlide].title}
                </a>
              </motion.div>
            </motion.div>
          </AnimatePresence> */}

          {/* Navigation Buttons */}
          {/* <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/75 text-white p-2 rounded-full transition-colors duration-300"
          >
            ←
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/75 text-white p-2 rounded-full transition-colors duration-300"
          >
            →
          </button> */}

          {/* Slide Indicators */}
          {/* <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                  currentSlide === index
                    ? "bg-white"
                    : "bg-white/50 hover:bg-white/75"
                }`}
              />
            ))}
          </div>
        </div>
      </div> */}
    </div>
  );
}
