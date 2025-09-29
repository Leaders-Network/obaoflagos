import React from 'react'
import Image from 'next/image'
import Navbar from '@/app/components/Navbar'
import Footer from '@/app/components/Footer'

export default function page() {
  return (
    <>
    <Navbar/>
    <div className="min-h-screen font-[poppins] pt-8 bg-white/95 text-black">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center mb-12">Contact the Palace</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-semibold mb-4">Palace Contact Information</h2>
              <div className="space-y-4">
                <p className="flex items-center">
                  <span className="mr-3">📍</span>
                  Iga Idunganran, Lagos Island, Lagos State, Nigeria
                </p>
                <p className="flex items-center">
                  <span className="mr-3">📞</span>
                  +234 (0) XXX XXX XXXX
                </p>
                <p className="flex items-center">
                  <span className="mr-3">✉️</span>
                  office@obaoflagos.gov.ng
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4">Palace Hours</h2>
              <div className="space-y-2">
                <p>Monday - Friday: 9:00 AM - 5:00 PM</p>
                <p>Saturday: 10:00 AM - 2:00 PM</p>
                <p>Sunday: Closed</p>
              </div>
            </div>
          </div>

          <div className="bg-white/80 p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-6">Send a Message</h2>
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">Full Name</label>
                <input
                  type="text"
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8B4513]"
                  placeholder="Enter your full name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8B4513]"
                  placeholder="Enter your email"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Subject</label>
                <input
                  type="text"
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8B4513]"
                  placeholder="Enter subject"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Message</label>
                <textarea
                  className="w-full p-3 border border-gray-300 rounded-md h-32 focus:outline-none focus:ring-2 focus:ring-[#8B4513]"
                  placeholder="Enter your message"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-black/80 text-white py-3 px-6 rounded-md hover:bg-[#6F3609] transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  )
}
