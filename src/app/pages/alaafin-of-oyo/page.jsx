"use client";
import Navbar from '@/app/components/Navbar'
import Footer from '@/app/components/Footer'
import React, { use } from 'react'

export default function page() {
    return (
      <div className="min-h-screen font-[poppins] pt-16 mt-20 bg-gradient-to-b from-gray-50 to-gray-100">
        <Navbar/>
        <div className='w-full bg-green-300 hover:pause font-bold py-8 hidden  md:block border-t overflow-visible'>
          <div className='container mx-auto pl-72 animate-scroll whitespace-nowrap'>
            <ul className='inline-flex space-x-8 text-sm text-gray-600'>
              <li className='relative group'>
                <a href='/pages/1600-1700-ado' className='hover:text-green-700'>Oba Ado (1600-1700)</a>
                <ul className='absolute hidden group-hover:block bg-white shadow-lg rounded-md py-2 w-48 z-50'>
                  <li><a href='/pages/1600-gabaro' className='block px-4 py-2 hover:bg-green-50 hover:text-green-700'>Oba Gabaro (1669–1704)</a></li>
                  
                </ul>
              </li>
              <li className='relative group'>
                <a href='/pages/1701-1800-semoyin' className='hover:text-green-700'>Oba Akin Semoyin (1701-1800)</a>
                <ul className='absolute hidden group-hover:block bg-white shadow-lg rounded-md py-2 w-60 z-50'>
                  <li><a href='/pages/1749-1775-eletu' className='block px-4 py-2 hover:bg-green-50 hover:text-green-700'>Oba	Eletu Kekere (1749–1775)</a></li>
                  <li><a href='/pages/1775-1801-ologun' className='block px-4 py-2 hover:bg-green-50 hover:text-green-700'>Oba Ologun Kutere (1775–1801)</a></li>
                </ul>
              </li>
              <li className='relative group'>
                <a href='/pages/1801-1900-ajosun' className='hover:text-green-700'>Oba Adele Ajosun (1801-1900)</a>
                <ul className='absolute hidden group-hover:block bg-white shadow-lg rounded-md py-2 w-80 z-50'>
                  <li><a href='/pages/1821-1829-oshinlokun' className='block px-4 py-2 hover:bg-green-50 hover:text-green-700'>Oba	Oshinlokun (1821–1829)</a></li>
                  <li><a href='/pages/1829-1834-idewu' className='block px-4 py-2 hover:bg-green-50 hover:text-green-700'>Oba Idewu Ojulari (1829–1834)</a></li>
                  <li><a href='/pages/1835-1837-adele' className='block px-4 py-2 hover:bg-green-50 hover:text-green-700'>Oba 	Adele Ajosun (Restored, 1835–1837)</a></li>
                  <li><a href='/pages/1837-1841-oluwole' className='block px-4 py-2 hover:bg-green-50 hover:text-green-700'>Oba	Oluwole (1837–1841)</a></li>
                  <li><a href='/pages/1841-1845-akitoye' className='block px-4 py-2 hover:bg-green-50 hover:text-green-700'>Oba	Akitoye (1841–1845)</a></li>
                  <li><a href='/pages/1845-1851-kosoko' className='block px-4 py-2 hover:bg-green-50 hover:text-green-700'>Oba	Kosoko (1845–1851)</a></li>
                  <li><a href='/pages/1851-1853-akitoye-restored' className='block px-4 py-2 hover:bg-green-50 hover:text-green-700'>Oba	Akitoye (Restored, 1851–1853)</a></li>
                  <li><a href='/pages/1853-1885-dosunmu' className='block px-4 py-2 hover:bg-green-50 hover:text-green-700'>Oba	Dosunmu (1853–1885)</a></li>
                </ul>
              </li>
              <li className='relative group'>
                <a href='/pages/1901-2000-oyekan' className='hover:text-green-700'>Oba Oyekan I (1901-2000)</a>
                <ul className='absolute hidden group-hover:block bg-white shadow-lg rounded-md py-2 w-70 z-50'>
                  <li><a href='/pages/1901-1925-eleko' className='block px-4 py-2 hover:bg-green-50 hover:text-green-700'>Oba	Eshugbayi Eleko (1901–1925)</a></li>
                  <li><a href='/pages/1925-1928-ibikunle' className='block px-4 py-2 hover:bg-green-50 hover:text-green-700'>Oba	Ibikunle Akitoye (1925–1928)</a></li>
                  <li><a href='1931-1932-eleko-restored' className='block px-4 py-2 hover:bg-green-50 hover:text-green-700'>Oba	Eshugbayi Eleko (Restored, 1931–1932)</a></li>
                  <li><a href='/pages/1949-1964-adele' className='block px-4 py-2 hover:bg-green-50 hover:text-green-700'>Oba	Adeniji Adele II (1949–1964)</a></li>
                  <li><a href='/pages/1965-2003-oyekan' className='block px-4 py-2 hover:bg-green-50 hover:text-green-700'>Oba	Adekola Oyekan II (1965–2003)</a></li>
                </ul>
              </li>
            </ul>          
            </div>
        </div>
    
      <div className='h-24 hidden'></div>
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0)
          }
          100% {
            transform: translateX(-50%)
          }
        }
        .animate-scroll {
          animation: scroll 20s linear infinite
        }
          .animate-scroll-reverse {
            animation: scroll 20s linear infinite reverse
          }
          .animate-scroll-slow {
            animation: scroll 40s linear infinite
          }
          .animate-scroll-reverse-slow {
            animation: scroll 40s linear infinite reverse
          }
            .animate-scroll:hover,
            .animate-scroll-reverse:hover,
            .animate-scroll-slow:hover,
            .animate-scroll-reverse-slow:hover {
              animation-play-state: paused
            }
      `}</style>
        <div className="max-w-6xl mx-auto px-4 py-12 prose prose-lg">
          <h1 className="text-4xl font-bold text-green-700 mb-12 text-center leading-tight tracking-tight">
          Oba Abimbola Owoade I: The 46th Alaafin Shaping a New Dawn for Oyo
            </h1>
 
          <section className="mb-12 bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
            <h2 className="text-3xl font-semibold text-gray-800 mb-6 border-b pb-4">Early Life and Royal Lineage</h2>
            <p className="text-gray-700 leading-relaxed text-lg">Oba Abimbola Akeem Owoade I was born on July 17, 1975, into the distinguished Owoade royal lineage, a family deeply woven into the sacred traditions and respected hierarchy of the Oyo monarchy. His ancestry is rooted in the ancient Oyo Empire — a kingdom famed for its military strength, administrative brilliance, and cultural sophistication. This lineage connects him to generations of Alaafins who shaped Yoruba civilization and expanded its influence across West Africa..</p>
            <p className="text-gray-700 leading-relaxed mt-4 text-lg">Born in Oyo Town, the cultural heartbeat of the Yoruba people, Oba Owoade grew up surrounded by the enduring echoes of history — from the ancestral drums to the timeless rituals of the palace grounds. His upbringing was marked by discipline, communal values, and a reverence for heritage, all instilled by a family committed to service, leadership, and the preservation of Yoruba identity. These early influences molded him into a thoughtful custodian of tradition and positioned him for his eventual call to the throne as the 46th Alaafin of Oyo.</p>
          </section>
  
          <section className="mb-12 bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
            <h2 className="text-3xl font-semibold text-gray-800 mb-6 border-b pb-4">Education and Academic Excellence</h2>
            <p className="text-gray-700 mb-6 text-lg">Oba Abimbola Akeem Owoade I's educational journey reflects a harmonious blend of traditional Yoruba upbringing and modern intellectual development:</p>
            <ul className="list-disc pl-8 text-gray-700 space-y-4">
              <li className="mb-4 bg-gray-50 p-4 rounded-lg">
                <span className="font-semibold text-indigo-700">Primary and Secondary Education:</span><br/>
                He completed his early schooling in Oyo State, where the cultural depth of the ancient kingdom shaped his values and worldview. He later attended Baptist High School, Saki, a reputable institution known for academic discipline and strong moral training. There, he distinguished himself through dedication, resilience, and a growing sense of leadership.
              </li>
              <li className="mb-4 bg-gray-50 p-4 rounded-lg">
                <span className="font-semibold text-indigo-700">Higher Education:</span><br/>
                Oba Owoade pursued further studies in engineering, beginning with a National Diploma (ND) in Mechanical Engineering at Federal Polytechnic, Ilaro. He then advanced to obtain a Higher National Diploma (HND) in Mechanical Engineering from The Polytechnic, Ibadan. These academic experiences broadened his understanding of modern systems, technical problem-solving, and structured leadership — qualities that now enrich his approach to rulership as the 46th Alaafin of Oyo.
              </li>
            </ul>
          </section>
  
          <section className="mb-12 bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
            <h2 className="text-3xl font-semibold text-gray-800 mb-6 border-b pb-4">Distinguished Career and Professional Life (2002–2025)</h2>
            <div className="space-y-6">
              <h3 className="text-2xl font-medium text-gray-800 border-l-4 border-indigo-500 pl-4">Joining and Early Career</h3>
              <p className="text-gray-700 text-lg">Oba Abimbola Akeem Owoade I began his professional journey in 2002 during his National Youth Service Corps (NYSC) year, serving as a Mechanical Intern and Planner with the Nigeria Gas Company. His early experience exposed him to the practical aspects of engineering projects, operational planning, and technical problem-solving, establishing the foundation for his disciplined approach to professional life. Following NYSC, he joined Oceanic Bank Plc in Warri, where he gained experience in financial operations, organizational management, and customer engagement..</p>
            
              <h3 className="text-2xl font-medium text-gray-800 border-l-4 border-indigo-500 pl-4">Rising Through the Ranks</h3>
              <ul className="list-disc pl-8 text-gray-700 space-y-4">
                <li className="mb-4 bg-gray-50 p-4 rounded-lg">
                  <span className="font-semibold text-indigo-700">Critical Assignments:</span><br/>
                  Oba Owoade transitioned to the United Kingdom, working as a Planning Engineer with Oil Reach Company in Glasgow. Here, he managed complex engineering projects, ensuring timely completion and compliance with international standards, which earned him recognition for precision and leadership.
                </li>
                <li className="mb-4 bg-gray-50 p-4 rounded-lg">
                  <span className="font-semibold text-indigo-700">Professional Development:</span><br/>
                  He complemented his work experience with higher education, earning a Bachelor's Degree in Mechanical Enginering at the University of Sunderland and a Master's Degree in Mechanical Engineering from Northumbria University. These achievements strengthened his analytical skills and strategic thinking, which now guide his role as Alaafin.
                </li>
              </ul>
            </div>
          </section>

          <section className="mb-12 bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
            <h2 className="text-3xl font-semibold text-gray-800 mb-6 border-b pb-4">Key Contributions in Career</h2>
            <ul className="list-disc pl-8 text-gray-700 space-y-6">
              <li className="mb-4 bg-gray-50 p-4 rounded-lg">
                <span className="font-semibold text-indigo-700"> Engineering and Project Management: </span><br/>
               Oba Owoade later moved to Canada, where he served as a Project Coordinator at Manitoba Hydro, leading infrastructure projects and demonstrating effective leadership, planning, and execution.
Entrepreneurship and Philanthropy: Beyond engineering, he is the President of Manitoba Limited, a company engaged in real estate and financial services. He has used his platform to support community development initiatives and charitable causes, reflecting his commitment to service.
              </li>
            </ul>
          </section>

          <div className="space-y-12">
            <section className="mb-12 bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
              <h2 className="text-3xl font-semibold text-gray-800 mb-6 border-b pb-4">Legacy and Impact</h2>
              <ul className="list-decimal pl-8 text-gray-700 space-y-4">
                <li className="mb-4 bg-gray-50 p-4 rounded-lg">
                  <span className="font-semibold text-indigo-700">Visionary Leadership:</span><br/>
                  Oba Owoade's professional experiences, both in Nigeria and abroad, have shaped him into a thoughtful and strategic ruler, committed to guiding Oyo toward unity, progress, and cultural preservation.
                </li>
                <li className="mb-4 bg-gray-50 p-4 rounded-lg">
                  <span className="font-semibold text-indigo-700">Cultural Custodian:</span><br/>
                  Through his deep respect for Yoruba traditions and rituals, he ensures that the rich heritage of the Oyo Kingdom is celebrated and maintained.
                </li>
                <li className="mb-4 bg-gray-50 p-4 rounded-lg">
                  <span className="font-semibold text-indigo-700">Modern Innovator:</span><br/>
                  With his international exposure, he brings modern management principles to palace administration, fostering efficiency and sustainable development.
                </li>
                <li className="mb-4 bg-gray-50 p-4 rounded-lg">
                  <span className="font-semibold text-indigo-700">Diplomatic Leader:</span><br/>
                  As Alaafin, he mediates in communal and regional matters, fostering cohesion among chiefs, community leaders, and government officials.
                </li>
              </ul>
            </section>

            <section className="mb-12 bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
              <h2 className="text-3xl font-semibold text-gray-800 mb-6 border-b pb-4">Conclusion</h2>
              <p className="text-gray-700 leading-relaxed text-lg italic">
              Oba Abimbola Akeem Owoade I's reign is a harmonious blend of tradition and modernity. By honoring the rich cultural and spiritual heritage of the Oyo Kingdom while integrating lessons from his international education and professional experience, he has positioned the Alaafin institution as both a custodian of history and a beacon for progressive leadership. His vision, strategic insight, and commitment to unity continue to guide the Oyo Kingdom, ensuring that its legacy thrives and adapts in the contemporary era.
              </p>
            </section>
          </div>
        </div>
        <Footer/>
      </div>
    )
}