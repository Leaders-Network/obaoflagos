import Footer from '@/app/components/Footer'
import Navbar from '@/app/components/Navbar'
import React from 'react'

export default function page() {
    return (
      <div className="min-h-screen pt-16 bg-gradient-to-b from-gray-50 to-gray-100">
        <Navbar/>
        <div className="max-w-6xl mx-auto px-4 py-12 prose prose-lg">
          <h1 className="text-5xl font-bold text-green-700 mb-12 text-center leading-tight tracking-tight">Oba Akitoye (First Reign): The Advocate for Change</h1>

          <section className="mb-12 bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
            <h2 className="text-3xl font-semibold text-gray-800 mb-6 border-b pb-4">Early Life and Ascension</h2>
            <p className="text-gray-700 leading-relaxed text-lg">
              Oba Akitoye ascended the throne of Lagos in 1841, following the death of Oba Oluwole. A member of the royal family, Akitoye's leadership emerged during a period of significant social, economic, and political changes in Lagos. His reign was marked by efforts to abolish the transatlantic slave trade and foster new economic relationships with European powers. Akitoye's progressive stance and reformist approach made him a polarizing figure, leading to internal conflicts that ultimately disrupted his first reign.
            </p>
          </section>

          <section className="mb-12 bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
            <h2 className="text-3xl font-semibold text-gray-800 mb-6 border-b pb-4">Reign and Key Achievements (1841–1845)</h2>

            <h3 className="text-2xl font-medium text-gray-800 border-l-4 border-indigo-500 pl-4 mt-6">1. Advocacy for the Abolition of the Slave Trade</h3>
            <ul className="list-disc pl-8 text-gray-700 space-y-4 mt-4">
              <li className="mb-4 bg-gray-50 p-4 rounded-lg">Opposition to the Slave Trade: Oba Akitoye was a staunch advocate for ending the transatlantic slave trade, recognizing its declining global acceptance and the need for Lagos to transition toward legitimate commerce.</li>
              <li className="mb-4 bg-gray-50 p-4 rounded-lg">Engagement with the British: His willingness to cooperate with British abolitionists strengthened ties with European powers, setting the stage for economic and political realignments.</li>
            </ul>

            <h3 className="text-2xl font-medium text-gray-800 border-l-4 border-indigo-500 pl-4 mt-6">2. Promotion of Legitimate Trade</h3>
            <ul className="list-disc pl-8 text-gray-700 space-y-4 mt-4">
              <li className="mb-4 bg-gray-50 p-4 rounded-lg">Economic Diversification: Akitoye encouraged the growth of alternative exports, such as palm oil and textiles, positioning Lagos as a hub for lawful trade.</li>
              <li className="mb-4 bg-gray-50 p-4 rounded-lg">Strategic Partnerships: His openness to foreign trade agreements bolstered Lagos' economic prospects during a period of significant global change.</li>
            </ul>

            <h3 className="text-2xl font-medium text-gray-800 border-l-4 border-indigo-500 pl-4 mt-6">3. Diplomatic Leadership</h3>
            <ul className="list-disc pl-8 text-gray-700 space-y-4 mt-4">
              <li className="mb-4 bg-gray-50 p-4 rounded-lg">Relations with European Powers: Oba Akitoye fostered diplomatic ties with the British, who supported his reformist policies and shared his anti-slavery agenda.</li>
              <li className="mb-4 bg-gray-50 p-4 rounded-lg">Navigating Regional Politics: He maintained peaceful relations with neighboring communities and the Benin Kingdom, ensuring stability during a volatile era.</li>
            </ul>

            <h3 className="text-2xl font-medium text-gray-800 border-l-4 border-indigo-500 pl-4 mt-6">4. Governance and Reforms</h3>
            <ul className="list-disc pl-8 text-gray-700 space-y-4 mt-4">
              <li className="mb-4 bg-gray-50 p-4 rounded-lg">Attempts at Reform: Akitoye sought to modernize Lagos' governance by introducing policies that aligned with emerging global trends, particularly in trade and diplomacy.</li>
              <li className="mb-4 bg-gray-50 p-4 rounded-lg">Resistance from Factions: His reformist agenda faced opposition from powerful factions within Lagos, including those who profited from the slave trade.</li>
            </ul>
          </section>

          <section className="mb-12 bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
            <h2 className="text-3xl font-semibold text-gray-800 mb-6 border-b pb-4">Challenges and Downfall</h2>
            <ul className="list-disc pl-8 text-gray-700 space-y-4 mt-4">
              <li className="mb-4 bg-gray-50 p-4 rounded-lg">Conflict with Kosoko: A major source of tension during Akitoye's reign was his rivalry with his cousin, Kosoko, who opposed his abolitionist policies and aligned himself with pro-slavery factions.</li>
              <li className="mb-4 bg-gray-50 p-4 rounded-lg">Coup and Exile: In 1845, Kosoko staged a successful coup, forcing Akitoye into exile. Akitoye fled Lagos and sought refuge with British officials, who would later assist him in reclaiming the throne.</li>
            </ul>
          </section>

          <section className="mb-12 bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
            <h2 className="text-3xl font-semibold text-gray-800 mb-6 border-b pb-4">End of First Reign and Exile</h2>
            <p className="text-gray-700 leading-relaxed text-lg">
              Akitoye's first reign ended in 1845 when he was deposed by Kosoko. During his exile, Akitoye continued to advocate for his policies and worked to build alliances that would enable his eventual return to power.
            </p>
          </section>

          <section className="mb-12 bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
            <h2 className="text-3xl font-semibold text-gray-800 mb-6 border-b pb-4">Legacy of the First Reign</h2>
            <ul className="list-decimal pl-8 text-gray-700 space-y-4 mt-4">
              <li className="mb-4 bg-gray-50 p-4 rounded-lg">Visionary Leadership: Oba Akitoye's advocacy for abolishing the slave trade and promoting legitimate commerce demonstrated his foresight in adapting to global changes.</li>
              <li className="mb-4 bg-gray-50 p-4 rounded-lg">Diplomatic Engagement: His willingness to engage with British officials and abolitionists set the stage for Lagos' integration into a broader network of lawful trade.</li>
              <li className="mb-4 bg-gray-50 p-4 rounded-lg">Resistance to Change: The opposition he faced underscores the challenges of reforming deeply entrenched systems, particularly when economic interests were at stake.</li>
              <li className="mb-4 bg-gray-50 p-4 rounded-lg">Setting the Stage for a Return: Although his first reign ended in exile, Akitoye's persistence and alliances would eventually lead to his restoration as Oba of Lagos in 1851.</li>
            </ul>

            <h2 className="text-3xl font-semibold text-gray-800 mb-6 border-b pb-4 mt-8">Conclusion</h2>
            <p className="text-gray-700 leading-relaxed text-lg">
              Oba Akitoye's first reign marked a turning point in Lagos' history. His bold stance against the slave trade and efforts to modernize the kingdom highlighted his progressive vision, despite the internal resistance that led to his downfall. His exile was not the end of his influence, as his legacy would pave the way for significant changes upon his return to the throne.
            </p>
          </section>
        </div>
        <Footer />
      </div>
    )
}