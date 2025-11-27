import React from "react";
import Image from "next/image";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

export default function page() {
  const blogPosts = [
    {
      title: "OBA OF BENIN",
      date: "March 15, 2024",
      image: "/images/ObaofBenin.jpg",
      author: "His Royal Majesty",
      category: "Edo State ",
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

  return (
    <>
      <Navbar />
      <div className="min-h-screen font-[poppins] pt-10 mt-20 bg-white text-black bg-cream-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-4xl text-green-700 font-bold text-primary-800 mb-4">
              Royal Chronicles: The Oba's Blog
            </h1>
            <p className="text-xl text-green-700 max-w-3xl mx-auto">
              Insights and wisdom from the Palace of the Oba of Lagos,
              preserving our heritage for future generations
            </p>
          </div>

          <div className="flex justify-center space-x-4 mb-12">
            <button className="bg-primary-600 text-white px-4 py-2 rounded-full hover:bg-primary-700">
              All Posts
            </button>
            <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-full hover:bg-gray-300">
              Traditions
            </button>
            <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-full hover:bg-gray-300">
              Royal Heritage
            </button>
            <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-full hover:bg-gray-300">
              Events
            </button>
          </div>

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

          <div className="mt-16 text-center">
            <button className="bg-secondary-600 text-white px-8 py-4 rounded-md text-lg hover:bg-secondary-700 transition-colors flex items-center mx-auto">
              Load More Articles
              <svg
                className="w-5 h-5 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
          </div>

          <div className="mt-20 bg-primary-50 rounded-xl p-8">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-primary-800 mb-4">
                Subscribe to Royal Updates
              </h2>
              <p className="text-gray-600 mb-6">
                Stay informed about palace activities and cultural events
              </p>
              <div className="flex max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 rounded-l-md border-2 border-primary-200 focus:outline-none focus:border-primary-600"
                />
                <button className="bg-primary-600 text-white px-6 py-2 rounded-r-md hover:bg-primary-700">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
