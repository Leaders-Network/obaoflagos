import Footer from '@/app/components/Footer'
import Navbar from '@/app/components/Navbar'
import React from 'react'

export default function page() {
  return (
    <div className="min-h-screen pt-16 bg-gradient-to-b from-gray-50 to-gray-100">
      <Navbar/>
      <div className="max-w-6xl mx-auto px-4 py-12 prose prose-lg">
        <h1 className="text-5xl font-bold text-green-700 mb-12 text-center leading-tight tracking-tight">Oba Eshugbayi Eleko: The Voice of Lagosians</h1>

        <section className="mb-12 bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6 border-b pb-4">Early Life and Ascension</h2>
          <p className="text-gray-700 leading-relaxed text-lg">
            Oba Eshugbayi Eleko ascended the throne in 1901 following the death of Oba Oyekan I. His reign was marked by his advocacy for the rights and welfare of Lagosians amidst increasing colonial dominance. Eshugbayi Eleko became a significant figure in the resistance against colonial policies that sought to undermine traditional authority and exploit the people of Lagos.
          </p>
        </section>

        <section className="mb-12 bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6 border-b pb-4">Reign and Key Achievements (1901–1925)</h2>

          <h3 className="text-2xl font-medium text-gray-800 border-l-4 border-indigo-500 pl-4 mt-6">1. Defender of Lagosian Interests</h3>
          <ul className="list-disc pl-8 text-gray-700 space-y-4 mt-4">
            <li className="mb-4 bg-gray-50 p-4 rounded-lg">Resistance to Colonial Policies: Oba Eshugbayi Eleko stood firm against colonial taxation policies, particularly the imposition of water rates in Lagos, which were met with widespread opposition.</li>
            <li className="mb-4 bg-gray-50 p-4 rounded-lg">Voice of the People: He acted as a spokesperson for the grievances of Lagosians, advocating for fairness and equity in colonial governance.</li>
          </ul>

          <h3 className="text-2xl font-medium text-gray-800 border-l-4 border-indigo-500 pl-4 mt-6">2. Preservation of Traditional Authority</h3>
          <ul className="list-disc pl-8 text-gray-700 space-y-4 mt-4">
            <li className="mb-4 bg-gray-50 p-4 rounded-lg">Upholding the Monarchy's Relevance: Despite colonial encroachment, Eshugbayi Eleko worked tirelessly to preserve the influence of the Obaship as a symbol of Lagosian identity.</li>
            <li className="mb-4 bg-gray-50 p-4 rounded-lg">Promotion of Cultural Practices: He ensured the continuation of Lagosian festivals, traditions, and ceremonies, reinforcing the cultural unity of his people.</li>
          </ul>

          <h3 className="text-2xl font-medium text-gray-800 border-l-4 border-indigo-500 pl-4 mt-6">3. Diplomatic Relations with Colonial Authorities</h3>
          <ul className="list-disc pl-8 text-gray-700 space-y-4 mt-4">
            <li className="mb-4 bg-gray-50 p-4 rounded-lg">Collaboration and Advocacy: While opposing unjust policies, Oba Eshugbayi also sought diplomatic solutions, engaging colonial administrators to advocate for the interests of his subjects.</li>
            <li className="mb-4 bg-gray-50 p-4 rounded-lg">Balancing Modernity and Tradition: His leadership reflected an understanding of the need to adapt to modernization while safeguarding Lagosian heritage.</li>
          </ul>

          <h3 className="text-2xl font-medium text-gray-800 border-l-4 border-indigo-500 pl-4 mt-6">4. Support for Education</h3>
          <ul className="list-disc pl-8 text-gray-700 space-y-4 mt-4">
            <li className="mb-4 bg-gray-50 p-4 rounded-lg">Champion of Learning: Eshugbayi Eleko encouraged the expansion of educational opportunities for Lagosians, supporting the establishment of schools and the work of Christian missionaries.</li>
            <li className="mb-4 bg-gray-50 p-4 rounded-lg">Empowering the Youth: His reign saw an increase in educated Lagosians who would later become key figures in Nigeria's nationalist movements.</li>
          </ul>
        </section>

        <section className="mb-12 bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6 border-b pb-4">Challenges During His Reign</h2>
          <ul className="list-disc pl-8 text-gray-700 space-y-4 mt-4">
            <li className="mb-4 bg-gray-50 p-4 rounded-lg">Colonial Opposition: Eshugbayi Eleko's resistance to colonial policies often brought him into conflict with the British administration.</li>
            <li className="mb-4 bg-gray-50 p-4 rounded-lg">Exile and Controversy: In 1925, following disputes over his resistance to taxation and the colonial government's support for rival claimants, Eshugbayi Eleko was deposed and exiled to Oyo.</li>
            <li className="mb-4 bg-gray-50 p-4 rounded-lg">Struggles for Autonomy: His efforts to assert the relevance of the Obaship were met with increasing resistance from the colonial government, which sought to centralize authority.</li>
          </ul>
        </section>

        <section className="mb-12 bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6 border-b pb-4">End of Reign and Exile</h2>
          <p className="text-gray-700 leading-relaxed text-lg">
            Oba Eshugbayi Eleko's reign officially ended in 1925 when he was deposed by the colonial authorities. However, he remained a powerful symbol of resistance and traditional authority. His exile sparked widespread protests and increased nationalist sentiment among Lagosians.
          </p>
        </section>

        <section className="mb-12 bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6 border-b pb-4">Legacy and Significance</h2>
          <ul className="list-decimal pl-8 text-gray-700 space-y-4 mt-4">
            <li className="mb-4 bg-gray-50 p-4 rounded-lg">Advocate for the People: Oba Eshugbayi Eleko is remembered as a defender of Lagosians' rights, fearlessly standing up to colonial policies that undermined their welfare.</li>
            <li className="mb-4 bg-gray-50 p-4 rounded-lg">Cultural Preservationist: Through his commitment to tradition, he ensured that Lagosians retained a strong sense of identity and unity amidst colonial pressures.</li>
            <li className="mb-4 bg-gray-50 p-4 rounded-lg">Catalyst for Nationalism: His resistance to colonial authorities inspired a growing nationalist movement that would later contribute to Nigeria's push for independence.</li>
            <li className="mb-4 bg-gray-50 p-4 rounded-lg">Symbol of Resilience: Eshugbayi Eleko's life and leadership embodied the resilience of Lagosians in the face of adversity and the determination to preserve their heritage.</li>
          </ul>

          <h2 className="text-3xl font-semibold text-gray-800 mb-6 border-b pb-4 mt-8">Conclusion</h2>
          <p className="text-gray-700 leading-relaxed text-lg">
            Oba Eshugbayi Eleko's reign was a defining era in Lagos' history, marked by resistance, advocacy, and cultural preservation. His leadership continues to be celebrated as a testament to the strength and unity of Lagosians during a period of colonial exploitation.
          </p>
        </section>
      </div>
      <Footer />
    </div>
  )
}