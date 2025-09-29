import Footer from '@/app/components/Footer'
import Navbar from '@/app/components/Navbar'
import React from 'react'

export default function page() {
  return (
    <div className="min-h-screen pt-16 bg-gradient-to-b from-gray-50 to-gray-100">
      <Navbar/>
      <div className="max-w-6xl mx-auto px-4 py-12 prose prose-lg">
        <h1 className="text-5xl font-bold text-green-700 mb-12 text-center leading-tight tracking-tight">Oba Kosoko: The Monarch of Resistance</h1>

        <section className="mb-12 bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6 border-b pb-4">Early Life and Ascension</h2>
          <p className="text-gray-700 leading-relaxed text-lg">
            Oba Kosoko became the Oba of Lagos in 1845 after a coup against his cousin, Oba Akitoye. A prominent and influential figure in Lagos's history, Kosoko's rise to power was supported by factions who opposed Akitoye's abolitionist policies and sought to preserve the transatlantic slave trade. Known for his strong-willed leadership and military prowess, Kosoko's reign marked a significant and controversial chapter in Lagos' history.
          </p>
        </section>

        <section className="mb-12 bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6 border-b pb-4">Reign and Key Achievements (1845–1851)</h2>

          <h3 className="text-2xl font-medium text-gray-800 border-l-4 border-indigo-500 pl-4 mt-6">1. Defense of the Slave Trade</h3>
          <ul className="list-disc pl-8 text-gray-700 space-y-4 mt-4">
            <li className="mb-4 bg-gray-50 p-4 rounded-lg">Resistance to Abolition: Kosoko maintained Lagos's involvement in the transatlantic slave trade, aligning with local and foreign merchants whose livelihoods depended on it.</li>
            <li className="mb-4 bg-gray-50 p-4 rounded-lg">Economic Focus: His reign prioritized preserving the city's economic structure, which heavily relied on the slave trade at the time.</li>
          </ul>

          <h3 className="text-2xl font-medium text-gray-800 border-l-4 border-indigo-500 pl-4 mt-6">2. Diplomatic Maneuvering</h3>
          <ul className="list-disc pl-8 text-gray-700 space-y-4 mt-4">
            <li className="mb-4 bg-gray-50 p-4 rounded-lg">Ties with Neighboring States: Kosoko built alliances with powerful neighboring leaders, ensuring support for his rule and resisting British interference.</li>
            <li className="mb-4 bg-gray-50 p-4 rounded-lg">Opposition to British Influence: He openly opposed British attempts to enforce abolitionist policies in Lagos, positioning himself as a defiant leader.</li>
          </ul>

          <h3 className="text-2xl font-medium text-gray-800 border-l-4 border-indigo-500 pl-4 mt-6">3. Military Strength</h3>
          <ul className="list-disc pl-8 text-gray-700 space-y-4 mt-4">
            <li className="mb-4 bg-gray-50 p-4 rounded-lg">Fortifications of Lagos: Kosoko fortified the city to defend against external threats, including possible attacks from Akitoye and the British Navy.</li>
            <li className="mb-4 bg-gray-50 p-4 rounded-lg">Naval Battles: His fleet played a key role in defending Lagos's waterways, ensuring the kingdom's continued control over its trade routes.</li>
          </ul>
        </section>

        <section className="mb-12 bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6 border-b pb-4">Challenges During His Reign</h2>
          <ul className="list-disc pl-8 text-gray-700 space-y-4 mt-4">
            <li className="mb-4 bg-gray-50 p-4 rounded-lg">Conflict with Britain: Kosoko's refusal to abandon the slave trade brought him into direct conflict with British abolitionist forces, culminating in the infamous Bombardment of Lagos in 1851.</li>
            <li className="mb-4 bg-gray-50 p-4 rounded-lg">Internal Discontent: While he enjoyed support from pro-slavery factions, some chiefs and citizens opposed his policies, preferring the reformist approach of Akitoye.</li>
          </ul>
        </section>

        <section className="mb-12 bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6 border-b pb-4">The Bombardment of Lagos and Exile</h2>
          <p className="text-gray-700 leading-relaxed text-lg">
            In 1851, the British launched a military campaign against Kosoko, known as the Bombardment of Lagos. Unable to withstand the superior firepower of the British Navy, Kosoko was defeated and forced into exile. He fled to Epe, where he continued to wield influence and resist British control.
          </p>
        </section>

        <section className="mb-12 bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6 border-b pb-4">Legacy and Significance</h2>
          <ul className="list-decimal pl-8 text-gray-700 space-y-4 mt-4">
            <li className="mb-4 bg-gray-50 p-4 rounded-lg">Symbol of Resistance: Kosoko is remembered as a symbol of resistance against foreign domination. His defiance of British policies highlighted the complexities of Lagos' transition from a hub of the slave trade to a center of legitimate commerce.</li>
            <li className="mb-4 bg-gray-50 p-4 rounded-lg">Controversial Leadership: While his reign was divisive, Kosoko's determination to maintain Lagos's autonomy earned him admiration from some quarters and criticism from others.</li>
            <li className="mb-4 bg-gray-50 p-4 rounded-lg">Influence in Exile: Even in exile, Kosoko remained a powerful figure, and his rivalry with Akitoye shaped the political landscape of Lagos for years.</li>
          </ul>

          <h2 className="text-3xl font-semibold text-gray-800 mb-6 border-b pb-4 mt-8">Conclusion</h2>
          <p className="text-gray-700 leading-relaxed text-lg">
            Oba Kosoko's reign was marked by fierce resistance to change and external interference. Though his leadership style and policies were contentious, his defiance against British dominance remains a significant aspect of Lagos's history. His legacy is a reminder of the challenges faced by traditional rulers during an era of global and regional transformation.
          </p>
        </section>
      </div>
      <Footer />
    </div>
  )
}