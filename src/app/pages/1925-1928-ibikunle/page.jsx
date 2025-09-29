import Footer from '@/app/components/Footer'
import Navbar from '@/app/components/Navbar'
import React from 'react'

export default function page() {
  return (
    <div className="min-h-screen pt-16 bg-gradient-to-b from-gray-50 to-gray-100">
      <Navbar/>
      <div className="max-w-6xl mx-auto px-4 py-12 prose prose-lg">
        <h1 className="text-5xl font-bold text-green-700 mb-12 text-center leading-tight tracking-tight">Oba Ibikunle Akitoye: The Transitional Monarch</h1>

        <section className="mb-12 bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6 border-b pb-4">Early Life and Ascension</h2>
          <p className="text-gray-700 leading-relaxed text-lg">
            Oba Ibikunle Akitoye ascended the throne in 1925 after the deposition of Oba Eshugbayi Eleko. A member of the royal family, his selection was heavily influenced by the colonial government, which sought a more compliant ruler to align with its administration. Oba Ibikunle's reign was brief, yet it was a transitional period in Lagos' history as traditional authority continued to grapple with colonial dominance.
          </p>
        </section>

        <section className="mb-12 bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6 border-b pb-4">Reign and Key Achievements (1925–1928)</h2>

          <h3 className="text-2xl font-medium text-gray-800 border-l-4 border-indigo-500 pl-4 mt-6">1. Governance Under Colonial Oversight</h3>
          <ul className="list-disc pl-8 text-gray-700 space-y-4 mt-4">
            <li className="mb-4 bg-gray-50 p-4 rounded-lg">Collaboration with the Colonial Administration: Oba Ibikunle Akitoye maintained a cooperative relationship with the British, serving as a mediator between the people and the government.</li>
            <li className="mb-4 bg-gray-50 p-4 rounded-lg">Stability and Order: His reign provided a semblance of calm following the tensions and protests sparked by the exile of Oba Eshugbayi Eleko.</li>
          </ul>

          <h3 className="text-2xl font-medium text-gray-800 border-l-4 border-indigo-500 pl-4 mt-6">2. Support for Education and Infrastructure Development</h3>
          <ul className="list-disc pl-8 text-gray-700 space-y-4 mt-4">
            <li className="mb-4 bg-gray-50 p-4 rounded-lg">Educational Advocacy: Oba Ibikunle continued to support the spread of Western education, encouraging Lagosians to embrace learning as a tool for progress.</li>
            <li className="mb-4 bg-gray-50 p-4 rounded-lg">Urban Development: His reign coincided with the colonial administration's efforts to improve Lagos' infrastructure, including roads, public utilities, and administrative buildings.</li>
          </ul>

          <h3 className="text-2xl font-medium text-gray-800 border-l-4 border-indigo-500 pl-4 mt-6">3. Cultural Leadership</h3>
          <ul className="list-disc pl-8 text-gray-700 space-y-4 mt-4">
            <li className="mb-4 bg-gray-50 p-4 rounded-lg">Preservation of Traditions: Despite his alignment with the colonial government, Oba Ibikunle upheld Lagosian customs and traditions, ensuring the monarchy retained its ceremonial significance.</li>
            <li className="mb-4 bg-gray-50 p-4 rounded-lg">Representation of Unity: As a royal figure, he symbolized the enduring cultural identity of Lagosians during a time of political and social transformation.</li>
          </ul>
        </section>

        <section className="mb-12 bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6 border-b pb-4">Challenges During His Reign</h2>
          <ul className="list-disc pl-8 text-gray-700 space-y-4 mt-4">
            <li className="mb-4 bg-gray-50 p-4 rounded-lg">Limited Authority: Oba Ibikunle's powers were heavily curtailed by the colonial government, reducing his role to that of a symbolic leader.</li>
            <li className="mb-4 bg-gray-50 p-4 rounded-lg">Public Discontent: Many Lagosians viewed his appointment as a betrayal of traditional values, given the circumstances surrounding his predecessor's removal.</li>
            <li className="mb-4 bg-gray-50 p-4 rounded-lg">Short Tenure: His reign lasted only three years, limiting his ability to make significant long-term contributions.</li>
          </ul>
        </section>

        <section className="mb-12 bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6 border-b pb-4">End of Reign and Succession</h2>
          <p className="text-gray-700 leading-relaxed text-lg">
            Oba Ibikunle Akitoye passed away in 1928, marking the end of his brief reign. His tenure served as a bridge between two pivotal periods in Lagos' history. He was succeeded by the restored Oba Eshugbayi Eleko, whose return symbolized the resilience of Lagosians' loyalty to their traditions.
          </p>
        </section>

        <section className="mb-12 bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6 border-b pb-4">Legacy and Significance</h2>
          <ul className="list-decimal pl-8 text-gray-700 space-y-4 mt-4">
            <li className="mb-4 bg-gray-50 p-4 rounded-lg">Transitional Leadership: Oba Ibikunle's reign represents a critical juncture in Lagos' history, as the city navigated the complexities of colonial rule and the preservation of traditional authority.</li>
            <li className="mb-4 bg-gray-50 p-4 rounded-lg">Advocate for Stability: Despite the controversies surrounding his reign, he sought to maintain peace and stability in Lagos, ensuring a smooth transition during turbulent times.</li>
            <li className="mb-4 bg-gray-50 p-4 rounded-lg">Symbol of Change: His reign underscored the challenges faced by the Lagos monarchy in adapting to a new socio-political order dominated by external forces.</li>
          </ul>

          <h2 className="text-3xl font-semibold text-gray-800 mb-6 border-b pb-4 mt-8">Conclusion</h2>
          <p className="text-gray-700 leading-relaxed text-lg">
            Oba Ibikunle Akitoye's reign may have been brief, but it reflects the evolving role of traditional rulers in colonial Lagos. As a transitional monarch, he bridged the gap between periods of resistance and restoration, leaving behind a legacy of resilience and adaptation.
          </p>
        </section>
      </div>
      <Footer />
    </div>
  )
}