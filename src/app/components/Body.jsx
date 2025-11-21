"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";

export default function Body() {
  const { t } = useLanguage();

  const blogPosts = [
    {
      title: "OBA OF BENIN",
      date: "March 15, 2024",
      image: "/images/ObaofBenin.jpg",
      author: "His Royal Majesty",
      category: "Traditions",
      excerpt:
        "Discover the rich cultural heritage and beautiful traditions of Yoruba wedding ceremonies, from the engagement ceremony (Idana) to the grand reception. Learn about the significance of each ritual and how the palace preserves these sacred traditions...",
    },
    {
      title: "ALAAFIN OF OYO",
      date: "March 10, 2024",
      image: "/images/alaafinOyo.jpg",
      author: "Palace Historian",
      category: "Royal Heritage",
      excerpt:
        "Explore the symbolic significance and historical importance of the sacred crown worn by the Oba of Lagos. Dating back centuries, this royal artifact represents the spiritual and cultural authority bestowed upon the throne...",
    },
    {
      title: "SULTAN OF SOKOTO",
      date: "March 5, 2024",
      image: "/images/sultan.jpg",
      author: "Cultural Affairs Office",
      category: "Events",
      excerpt:
        "Experience the vibrant celebrations and festivals that make Lagos a cultural powerhouse. From the Eyo Festival to the annual Oba's Palace celebrations, discover how these events unite our community...",
    },
    {
      title: "OONI OF IFE",
      date: "February 28, 2024",
      image: "/images/oniofife.jpg",
      author: "Palace Secretary",
      category: "Governance",
      excerpt:
        "Understanding the vital role of traditional leadership in contemporary Lagos society. How the palace bridges the gap between ancient wisdom and modern governance...",
    },
    {
      title: "OLUBADAN OF IBADAN",
      date: "February 20, 2024",
      image: "/images/ibadan.jpg",
      author: "Royal Architect",
      category: "Architecture",
      excerpt:
        "Delve into the architectural marvel that is the Oba's Palace. Each carving, column, and courtyard tells a story of our people's artistic excellence...",
    },
    {
      title: "Emir of Kano",
      date: "February 15, 2024",
      image: "/images/sankano.png",
      author: "Chief Protocol Officer",
      category: "Protocol",
      excerpt:
        "Learn about the proper protocols and customs observed in the royal court. From greetings to ceremonies, these traditions maintain the dignity of the throne...",
    },
  ];

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  const MotionSection = motion.section;

  return (
    <div className="bg-gradient-to-b from-white to-gray-50 pb-20 text-black pt-24 shadow-md">
      <div className="mx-auto max-w-7xl px-4 md:px-8 flex flex-col space-y-12">
        {/* Hero Section */}
        {/* { <MotionSection
          className="text-center bg-green-100 p-12 mb-16"
          initial={fadeInUp.initial}
          animate={fadeInUp.animate}
          transition={fadeInUp.transition}
        >
          <h1 className="text-md md:text-5xl font-bold mb-6 text-green-800">
            {t("Preserving the Past, Inspiring the Future")}
          </h1>
          <p className=" text-gray-600 max-w-3xl mx-auto">
            {t("The Obas of Lagos have stood as enduring figures of leadership, from the founding of Lagos in the 17th century to its rise as a global metropolis. Our platform is your gateway to exploring this remarkable lineage and understanding the role of these royal leaders in shaping Lagos's identity and resilience. ")}
          </p>
        </MotionSection>} */}
        {/* Monarchs section */}
        <MotionSection>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-105"
              >
                <div className="relative h-56">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-primary-600 text-white px-3 py-1 rounded-full text-sm">
                    {post.category}
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-3">
                    <span className="ml-2 text-sm text-gray-600">
                      {post.author}
                    </span>
                    <span className="mx-2 text-gray-400">•</span>
                    <span className="text-sm text-gray-500">{post.date}</span>
                  </div>
                  <h2 className="text-xl font-semibold text-gray-900 mb-3 hover:text-primary-600">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <button className="bg-primary-600 text-white px-4 py-2 rounded-md hover:bg-primary-700 transition-colors flex items-center">
                    Read More
                    <svg
                      className="w-4 h-4 ml-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
            </div>
          </MotionSection>
          {/* Features Section */}
        <div className="grid md:grid-cols-2 gap-12">
          <MotionSection
            className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            initial={fadeInUp.initial}
            animate={fadeInUp.animate}
            transition={{ ...fadeInUp.transition, delay: 0.2 }}
          >
            <div className="flex items-center mb-4" data-aos="zoom-in-left"  data-aos-easing="linear"
     data-aos-duration="1500">
              <div className="bg-green-100 p-3 rounded-full mr-4 animate-bounce">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-green-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                  />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-green-800">
                {t("whyThisMatters")}
              </h2>
            </div>
            <p className="text-gray-700 leading-relaxed">
              {t("The Nigeria Royalties are more than just traditional leaders; they represent a bridge between the past and the future. By preserving their stories, we honor the resilience and diversity of Nigerians and celebrate the city’s pivotal role in Africa's cultural and economic landscape.")}
            </p>
          </MotionSection>         
          
           

          <MotionSection
            className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            initial={fadeInUp.initial}
            animate={fadeInUp.animate}
            transition={{ ...fadeInUp.transition, delay: 0.3 }}
          >
            <div className="flex items-center mb-4" data-aos="zoom-in-right"  data-aos-easing="linear"
     data-aos-duration="1500">
              <div className="bg-blue-100 p-3 rounded-full mr-4 animate-bounce">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-blue-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-blue-800">
                {t("Explore, Learn, Celebrate")}
              </h2>
            </div>
            <p className="text-gray-700 leading-relaxed">
              {t("Whether you're a history enthusiast, cultural explorer, or a proud Nigeria, this platform invites you to dive deep into the heart of Nigeria’s royal heritage. Let the stories of courage, wisdom, and unity inspire you.")}
            </p>
          </MotionSection>
        </div>
        

        {/* Features Section */}
        <MotionSection
          className="bg-green-50 p-8 rounded-xl shadow-md"
          initial={fadeInUp.initial}
          animate={fadeInUp.animate}
          transition={{ ...fadeInUp.transition, delay: 0.4 }}
        >
          <h2 className="text-2xl font-bold mb-6 text-green-800">
            {t("getStartedToday")}
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="text-3xl mb-4">📜</div>
              <h3 className="font-bold mb-2 text-gray-800">
                {t("exploreTimeline")}
              </h3>
              <p className="text-gray-600">{t("Begin your journey with a detailed exploration of the Obas and their reigns.")}</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="text-3xl mb-4">📷</div>
              <h3 className="font-bold mb-2 text-gray-800">
                {t("View Our Gallery")}
              </h3>
              <p className="text-gray-600">{t("Step back in time through rare photos, artifacts, and memorabilia.")}</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="text-3xl mb-4">💡</div>
              <h3 className="font-bold mb-2 text-gray-800">{t("learnMore")}</h3>
              <p className="text-gray-600">{t("Dive deeper into the fascinating world of Lagos's monarchy.")}</p>
            </div>
          </div>
        </MotionSection>

        {/* Call to Action */}
        <MotionSection
          className="bg-gradient-to-r from-green-800 to-green-900 text-white p-12 rounded-xl text-center"
          initial={fadeInUp.initial}
          animate={fadeInUp.animate}
          transition={{ ...fadeInUp.transition, delay: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-4">
            {t("Join the Royal Experience")}
          </h2>
          <p className="text-lg mb-8 text-green-100">{t("Stay connected with us for updates, new discoveries, and opportunities to participate in preserving Lagos's royal heritage. Sign up and follow us on social media to be part of this exciting journey.")}</p>
          <button className="bg-white text-green-800 px-8 py-3 rounded-full font-bold hover:bg-green-100 transition-colors duration-300">
            {t("signUpNow")}
          </button>
        </MotionSection>

        {/* Cultural Significance */}
        <MotionSection
          className="bg-green-50 p-8 rounded-xl shadow-md"
          initial={fadeInUp.initial}
          animate={fadeInUp.animate}
          transition={{ ...fadeInUp.transition, delay: 0.4 }}
        >
          <h2 className="text-2xl font-bold mb-6 text-green-800">
            {t("What Awaits You")}
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 transform hover:scale-105 transition-transform">
              {/* <div className="text-3xl mb-4">📜</div> */}
              <h3 className="font-bold mb-2 text-gray-800">
                {t("Journey Through Royal History")}
              </h3>
              <p className="text-gray-600">{t("Experience the captivating stories of Lagos's monarchs, from Ado, the first Oba of Lagos, to the modern leadership of Oba Rilwan Akiolu I. Uncover the milestones, traditions, and legacies that have defined each reign.")}</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 transform hover:scale-105 transition-transform">
              {/* <div className="text-3xl mb-4">📷</div> */}
              <h3 className="font-bold mb-2 text-gray-800">
                {t("Interactive Experiences")}
              </h3>
              <p className="text-gray-600">{t("Immerse yourself in the vibrant customs, regalia, and ceremonies of Lagos's monarchy. Learn how these traditions have kept the city's spirit alive across generations.")}</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 transform hover:scale-105 transition-transform">
              {/* <div className="text-3xl mb-4">💡</div> */}
              <h3 className="font-bold mb-2 text-gray-800">{t("Interactive Experiences")}</h3>
              <p className="text-gray-600">{t("Explore an interactive timeline, historical galleries, and rare archival content that bring the legacy of Lagos's royalty to life.")}</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 transform hover:scale-105 transition-transform">
              {/* <div className="text-3xl mb-4">💡</div> */}
              <h3 className="font-bold mb-2 text-gray-800">{t("Connect with Royalty")}</h3>
              <p className="text-gray-600">{t("Discover how the monarchy continues to inspire unity and progress in modern Lagos, blending traditional values with contemporary significance.")}</p>
            </div>
          </div>        </MotionSection>
      </div>
    </div>
  );
}
