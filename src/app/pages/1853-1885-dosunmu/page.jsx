import Footer from '@/app/components/Footer'
import Navbar from '@/app/components/Navbar'
import React from 'react'

export default function page() {
  return (
    <div className="min-h-screen pt-16 bg-gradient-to-b from-gray-50 to-gray-100">
      <Navbar/>
      <div className="max-w-6xl mx-auto px-4 py-12 prose prose-lg">
        <h1 className="text-5xl font-bold text-green-700 mb-12 text-center leading-tight tracking-tight">Oba Dosunmu: The Monarch Who Signed Away Lagos</h1>

        <section className="mb-12 bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6 border-b pb-4">Early Life and Ascension</h2>
          <p className="text-gray-700 leading-relaxed text-lg">
            Oba Dosunmu, also known as Docemo, ascended the throne in 1853 following the death of his predecessor and uncle, Oba Akitoye. Dosunmu inherited a kingdom already under increasing British influence, with the abolition of the slave trade and the rising dominance of legitimate commerce. His reign marked a defining period in Lagos' history, culminating in the formal cession of Lagos to the British Crown.
          </p>
        </section>

        <section className="mb-12 bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6 border-b pb-4">Reign and Key Achievements (1853–1885)</h2>

          <h3 className="text-2xl font-medium text-gray-800 border-l-4 border-indigo-500 pl-4 mt-6">1. The Lagos Treaty of Cession (1861)</h3>
          <ul className="list-disc pl-8 text-gray-700 space-y-4 mt-4">
            <li className="mb-4 bg-gray-50 p-4 rounded-lg">Ceding Lagos to Britain: On August 6, 1861, under pressure from the British, Oba Dosunmu signed the Treaty of Cession, formally transferring sovereignty of Lagos to the British Crown.</li>
            <li className="mb-4 bg-gray-50 p-4 rounded-lg">Preservation of the Monarchy: Despite the cession, Dosunmu ensured the continuation of the Obaship, albeit in a largely ceremonial role.</li>
            <li className="mb-4 bg-gray-50 p-4 rounded-lg">Economic Implications: The treaty opened Lagos to increased European investment and trade, transforming the city into a colonial administrative hub.</li>
          </ul>

          <h3 className="text-2xl font-medium text-gray-800 border-l-4 border-indigo-500 pl-4 mt-6">2. Promotion of Legitimate Trade</h3>
          <ul className="list-disc pl-8 text-gray-700 space-y-4 mt-4">
            <li className="mb-4 bg-gray-50 p-4 rounded-lg">Economic Transition: Dosunmu supported the development of legitimate trade, encouraging the export of goods such as palm oil, cotton, and textiles.</li>
            <li className="mb-4 bg-gray-50 p-4 rounded-lg">Trade Infrastructure: His reign saw the improvement of trade routes and the influx of European merchants, solidifying Lagos' position as a commercial hub in West Africa.</li>
          </ul>

          <h3 className="text-2xl font-medium text-gray-800 border-l-4 border-indigo-500 pl-4 mt-6">3. Governance and Diplomacy</h3>
          <ul className="list-disc pl-8 text-gray-700 space-y-4 mt-4">
            <li className="mb-4 bg-gray-50 p-4 rounded-lg">Navigating British Authority: Dosunmu worked to balance his role as a traditional leader with the demands of the British colonial administration.</li>
            <li className="mb-4 bg-gray-50 p-4 rounded-lg">Chiefly Relations: He maintained strong relationships with the Idejo chiefs and other traditional leaders, ensuring their continued influence within the colonial framework.</li>
          </ul>

          <h3 className="text-2xl font-medium text-gray-800 border-l-4 border-indigo-500 pl-4 mt-6">4. Cultural Leadership</h3>
          <ul className="list-disc pl-8 text-gray-700 space-y-4 mt-4">
            <li className="mb-4 bg-gray-50 p-4 rounded-lg">Custodian of Traditions: Despite British dominance, Dosunmu upheld Lagosian customs, traditions, and festivals, preserving the cultural identity of his people.</li>
            <li className="mb-4 bg-gray-50 p-4 rounded-lg">Spiritual Leadership: He continued to provide spiritual guidance, consulting traditional deities and the Ifá oracle in his decisions.</li>
          </ul>
        </section>

        <section className="mb-12 bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6 border-b pb-4">Challenges During His Reign</h2>
          <ul className="list-disc pl-8 text-gray-700 space-y-4 mt-4">
            <li className="mb-4 bg-gray-50 p-4 rounded-lg">Loss of Sovereignty: The cession of Lagos effectively reduced the Oba's authority, with real power shifting to the British colonial government.</li>
            <li className="mb-4 bg-gray-50 p-4 rounded-lg">Colonial Exploitation: The increasing control of resources and trade by British interests often marginalized local merchants and traditional authorities.</li>
            <li className="mb-4 bg-gray-50 p-4 rounded-lg">Tensions with Chiefs: The shift in governance occasionally led to disputes between the monarchy, the chiefs, and the colonial administration.</li>
          </ul>
        </section>

        <section className="mb-12 bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6 border-b pb-4">End of Reign and Succession</h2>
          <p className="text-gray-700 leading-relaxed text-lg">
            Oba Dosunmu passed away in 1885 after a reign that spanned over three decades. His death marked the end of an era, as Lagos continued to evolve under British colonial rule. He was succeeded by Oba Oyekan I, who inherited a city deeply entrenched in the colonial system.
          </p>
        </section>

        <section className="mb-12 bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6 border-b pb-4">Legacy and Significance</h2>
          <ul className="list-decimal pl-8 text-gray-700 space-y-4 mt-4">
            <li className="mb-4 bg-gray-50 p-4 rounded-lg">Architect of Modern Lagos: Though controversial, Dosunmu's role in ceding Lagos to Britain laid the groundwork for the city's development into a modern metropolis and commercial center.</li>
            <li className="mb-4 bg-gray-50 p-4 rounded-lg">Symbol of Resilience: Despite the loss of sovereignty, Dosunmu's leadership ensured the survival of Lagos' cultural and traditional identity during a period of profound change.</li>
            <li className="mb-4 bg-gray-50 p-4 rounded-lg">Catalyst for Economic Growth: By embracing legitimate trade, Dosunmu helped Lagos transition into a global trading hub, positioning it as a key player in West Africa's economic landscape.</li>
            <li className="mb-4 bg-gray-50 p-4 rounded-lg">Historical Turning Point: The signing of the Lagos Treaty of Cession marked the beginning of colonial rule, transforming Lagos from a traditional kingdom to a British colonial stronghold.</li>
          </ul>

          <h2 className="text-3xl font-semibold text-gray-800 mb-6 border-b pb-4 mt-8">Conclusion</h2>
          <p className="text-gray-700 leading-relaxed text-lg">
            Oba Dosunmu's reign was a defining chapter in Lagos' history. While the cession of Lagos remains a contentious decision, his efforts to preserve the monarchy and promote economic progress underscore his legacy as a pragmatic leader navigating a rapidly changing world.
          </p>
        </section>
      </div>
      <Footer />
    </div>
  )
}