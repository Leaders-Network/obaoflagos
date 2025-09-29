import Footer from '@/app/components/Footer'
import Navbar from '@/app/components/Navbar'
import React from 'react'

export default function page() {
    return (
      <div className="min-h-screen pt-16 bg-gradient-to-b from-gray-50 to-gray-100">
        <Navbar/>
        <div className="max-w-6xl mx-auto px-4 py-12 prose prose-lg">
          <h1 className="text-5xl font-bold text-green-700 mb-12 text-center leading-tight tracking-tight">Oba Idewu Ojulari: The Controversial Monarch</h1>

          <section className="mb-12 bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
            <h2 className="text-3xl font-semibold text-gray-800 mb-6 border-b pb-4">Early Life and Ascension</h2>
            <p className="text-gray-700 leading-relaxed text-lg">
              Oba Idewu Ojulari ascended the throne of Lagos in 1829, following the death of Oba Oshinlokun. As a member of the royal family, Idewu Ojulari inherited a kingdom grappling with internal power struggles and the economic challenges associated with the decline of the transatlantic slave trade.
            </p>
            <p className="text-gray-700 leading-relaxed text-lg">
              His reign was marked by controversies and conflicts, particularly with the chiefs and citizens of Lagos, ultimately leading to his abdication.
            </p>
          </section>

          <section className="mb-12 bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
            <h2 className="text-3xl font-semibold text-gray-800 mb-6 border-b pb-4">Reign and Key Events (1829–1834)</h2>
          
            <h3 className="text-2xl font-medium text-gray-800 border-l-4 border-indigo-500 pl-4 mt-6">1. Governance and Internal Conflicts</h3>
            <ul className="list-disc pl-8 text-gray-700 space-y-4 mt-4">
              <li className="mb-4 bg-gray-50 p-4 rounded-lg">Tensions with Chiefs: Oba Idewu Ojulari's reign was characterized by strained relations with the Idejo chiefs, who played a vital role in governance. His leadership style was often seen as authoritarian, leading to dissatisfaction among the traditional leadership class.</li>
              <li className="mb-4 bg-gray-50 p-4 rounded-lg">Public Discontent: Citizens of Lagos also expressed dissatisfaction with Idewu Ojulari's rule, which was perceived as divisive and ineffective in addressing the kingdom's challenges.</li>
            </ul>

            <h3 className="text-2xl font-medium text-gray-800 border-l-4 border-indigo-500 pl-4 mt-6">2. Economic Challenges</h3>
            <ul className="list-disc pl-8 text-gray-700 space-y-4 mt-4">
              <li className="mb-4 bg-gray-50 p-4 rounded-lg">Impact of the Decline in Slave Trade: The ongoing decline of the transatlantic slave trade further strained Lagos' economy, which was heavily dependent on it. Oba Idewu Ojulari struggled to manage the transition to legitimate trade, compounding the economic difficulties faced by the kingdom.</li>
            </ul>

            <h3 className="text-2xl font-medium text-gray-800 border-l-4 border-indigo-500 pl-4 mt-6">3. Relations with the Benin Kingdom</h3>
            <ul className="list-disc pl-8 text-gray-700 space-y-4 mt-4">
              <li className="mb-4 bg-gray-50 p-4 rounded-lg">Tributes and Overlordship: Oba Idewu Ojulari maintained the tradition of paying tributes to the Oba of Benin. However, his struggles with internal governance may have weakened the perceived autonomy and influence of Lagos within the regional power dynamics.</li>
            </ul>

            <h3 className="text-2xl font-medium text-gray-800 border-l-4 border-indigo-500 pl-4 mt-6">4. Controversy and Abdication</h3>
            <ul className="list-disc pl-8 text-gray-700 space-y-4 mt-4">
              <li className="mb-4 bg-gray-50 p-4 rounded-lg">Rising Opposition: Growing opposition from the chiefs and citizens of Lagos culminated in calls for Idewu Ojulari to step down. His inability to manage the kingdom's economic and social challenges eroded his support base.</li>
              <li className="mb-4 bg-gray-50 p-4 rounded-lg">Consultation with the Ifá Oracle: As tensions mounted, the Ifá oracle was consulted, and it reportedly decreed that Oba Idewu Ojulari should abdicate the throne. This decree, backed by the chiefs and significant factions within the kingdom, sealed his fate.</li>
              <li className="mb-4 bg-gray-50 p-4 rounded-lg">Abdication: In 1834, Oba Idewu Ojulari abdicated the throne, bringing an end to his contentious reign.</li>
            </ul>
          </section>

          <section className="mb-12 bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
            <h2 className="text-3xl font-semibold text-gray-800 mb-6 border-b pb-4">End of Reign and Succession</h2>
            <p className="text-gray-700 leading-relaxed text-lg">
              Following Oba Idewu Ojulari's abdication, the throne remained vacant for a short period before the reinstatement of Oba Adele Ajosun in 1835. Adele's return marked an attempt to stabilize the kingdom after the turbulence of Idewu Ojulari's reign.
            </p>

            <h2 className="text-3xl font-semibold text-gray-800 mb-6 border-b pb-4 mt-8">Legacy and Significance</h2>
            <ul className="list-decimal pl-8 text-gray-700 space-y-4 mt-4">
              <li className="mb-4 bg-gray-50 p-4 rounded-lg">A Lesson in Governance: Oba Idewu Ojulari's reign is often cited as a cautionary tale about the importance of maintaining harmony with traditional leadership structures and the populace.</li>
              <li className="mb-4 bg-gray-50 p-4 rounded-lg">Economic Challenges Highlighted: His struggles underscore the difficulties Lagos faced in transitioning from the slave trade to legitimate commerce during this period.</li>
              <li className="mb-4 bg-gray-50 p-4 rounded-lg">Cultural and Spiritual Authority: The role of the Ifá oracle in determining his abdication highlights the enduring influence of spiritual and traditional practices in Lagos' governance.</li>
            </ul>

            <h2 className="text-3xl font-semibold text-gray-800 mb-6 border-b pb-4 mt-8">Conclusion</h2>
            <p className="text-gray-700 leading-relaxed text-lg">
              Oba Idewu Ojulari's reign, though brief and tumultuous, reflects the complexities of leadership during a challenging period in Lagos' history. His controversial rule underscores the importance of balancing authority with consensus and addressing the economic realities of the time.
            </p>
          </section>
        </div>
        <Footer />
      </div>
    )
}