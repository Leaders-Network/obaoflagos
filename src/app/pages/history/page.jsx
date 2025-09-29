import Footer from '@/app/components/Footer'
import Navbar from '@/app/components/Navbar'
import React from 'react'

export default function page() {
  return (
    <div className="min-h-screen pt-16 bg-gradient-to-b from-gray-50 to-gray-100">
      <Navbar/>
      <div className="max-w-6xl mx-auto px-4 py-12 prose prose-lg">
        <h1 className="text-5xl font-bold text-green-700 mb-12 text-center leading-tight tracking-tight">Detailed Account of Oba Ado: The Founding Monarch of Lagos</h1>

        <section className="mb-12 bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6 border-b pb-4">Early Life and Background</h2>
          <p className="text-gray-700 leading-relaxed text-lg">
            Oba Ado, historically recognized as the first Oba of Lagos, was a pivotal figure in the establishment of the Lagos monarchy. He was one of the children of the Oba of Benin and is believed to have migrated from the Benin Kingdom to the Lagos area in the early 17th century. His journey was part of the broader expansion of Benin's influence along the coastal regions of present-day Nigeria.
          </p>
          <p className="text-gray-700 leading-relaxed mt-4 text-lg">
            Ado's migration to Lagos (then known as Eko) was strategic, aligning with the Benin Kingdom's aspirations to establish a foothold in the area for trade and administrative purposes. The area was already inhabited by the Awori people, who were led by local chiefs but lacked centralized governance.
          </p>
        </section>

        <section className="mb-12 bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6 border-b pb-4">Founding of the Lagos Monarchy</h2>
          <p className="text-gray-700 leading-relaxed text-lg">
            Upon arriving in Lagos, Ado was installed as a leader under the authority of the Oba of Benin. This marked the beginning of the Lagos monarchy. He is credited with introducing the structure and customs of Benin governance, which became the foundation of Lagos' political and cultural framework.
          </p>
          <p className="text-gray-700 leading-relaxed mt-4 text-lg">
            Ado's leadership style helped unite the Awori communities and fostered stability. He successfully navigated local politics and established himself as the central authority figure. His reign signified the transition of Lagos from a collection of loosely governed settlements to a cohesive entity with centralized leadership.
          </p>
        </section>

        <section className="mb-12 bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6 border-b pb-4">Establishing Trade and Diplomacy</h2>
          <p className="text-gray-700 leading-relaxed text-lg">
            Oba Ado recognized the strategic importance of Lagos as a coastal settlement with immense trade potential. During his reign:
          </p>
          <ul className="list-disc pl-8 text-gray-700 space-y-4">
            <li className="mb-4 bg-gray-50 p-4 rounded-lg">
              <span className="font-semibold text-indigo-700">Maritime Trade:</span><br/>
              Ado laid the groundwork for Lagos to become a hub for maritime trade. Although large-scale transatlantic trade had not yet peaked, he positioned Lagos as a key point for commerce with neighboring regions and the interior.
            </li>
            <li className="mb-4 bg-gray-50 p-4 rounded-lg">
              <span className="font-semibold text-indigo-700">Diplomatic Relations:</span><br/>
              His ability to balance relationships with the Benin Kingdom and the local Awori people was crucial in maintaining peace and promoting economic activities.
            </li>
          </ul>
        </section>

        <section className="mb-12 bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6 border-b pb-4">Cultural Legacy</h2>
          <p className="text-gray-700 mb-6 text-lg">Ado introduced Benin cultural and administrative practices that influenced Lagos' traditions. Key contributions included:</p>
          <ul className="list-decimal pl-8 text-gray-700 space-y-4">
            <li className="mb-4 bg-gray-50 p-4 rounded-lg">
              <span className="font-semibold text-indigo-700">Chieftaincy Institutions:</span><br/>
              He established the chieftaincy system, which continues to play a significant role in Lagos' governance.
            </li>
            <li className="mb-4 bg-gray-50 p-4 rounded-lg">
              <span className="font-semibold text-indigo-700">Eko as the Name for Lagos:</span><br/>
              The name "Eko," still commonly used by Lagosians, is attributed to the Benin influence during Ados reign. It reflects the deep cultural ties between Lagos and the Benin Kingdom.
            </li>
            <li className="mb-4 bg-gray-50 p-4 rounded-lg">
              <span className="font-semibold text-indigo-700">Foundation of Royal Customs:</span><br/>
              Ado initiated ceremonies and practices that would become integral to the Lagos monarchy, ensuring continuity in traditional governance.
            </li>
          </ul>
        </section>
      </div>
      <Footer/>
    </div>
  )
}