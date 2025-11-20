"use client";
import React from "react";
import { useEffect } from "react";
import AOS from "aos";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import { useLanguage } from "./context/LanguageContext";

export default function Page() {
  const { t } = useLanguage();
  useEffect( () => {
    const initAOS =async ()=> {
      await import ('aos');
      AOS.init({
        duration: 1000,
        once: true,
        easing: 'ease',
        anchorPlacement: "top-bottom",
      });
    };
    initAOS();
},[]);

  return (
    <div className="min-h-screen font-[poppins]">
      <Navbar />
      <main>
        <Header />
        <Body />
      </main>
      <Footer />
    </div>
  );
}
