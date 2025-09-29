"use client";
import React from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import { useLanguage } from "./context/LanguageContext";

export default function Page() {
  const { t } = useLanguage();

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
