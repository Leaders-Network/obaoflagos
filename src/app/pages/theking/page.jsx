"use client";
import Navbar from '@/app/components/Navbar'
import Footer from '@/app/components/Footer'
import React, { use } from 'react'

export default function page() {
    return (
      <div className="min-h-screen font-[poppins] pt-16 bg-gradient-to-b from-gray-50 to-gray-100">
        <Navbar/>
        <div className='w-full bg-green-100 hover:pause font-bold py-8 hidden md:block border-t overflow-visible'>
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
    
      <div className='h-24'></div>
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
          <h1 className="text-4xl font-bold text-green-700 mb-12 text-center leading-tight tracking-tight">Oba Rilwan Babatunde Osuolale Aremu Akiolu I: The Visionary Custodian of Lagos' Heritage</h1>
 
          <section className="mb-12 bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
            <h2 className="text-3xl font-semibold text-gray-800 mb-6 border-b pb-4">Early Life and Royal Lineage</h2>
            <p className="text-gray-700 leading-relaxed text-lg">Oba Rilwan Babatunde Osuolale Aremu Akiolu I was born on October 29, 1943, into the illustrious Akiolu royal family, known for its historical connection to the Obaship of Lagos. His lineage traces back to Oba Akinsemoyin, a monarch celebrated for transforming Lagos into a thriving trade hub during the 18th century. This ancestry underscores Oba Akiolu's deep-rooted ties to Lagos' monarchy and its enduring cultural heritage.</p>
            <p className="text-gray-700 leading-relaxed mt-4 text-lg">He was born in Lagos Island, the heart of the city, where the vibrant culture, traditions, and challenges of the urban community shaped his character and outlook on leadership. His family was steeped in royal tradition and service to the community, instilling in him values of discipline, integrity, and loyalty.</p>
          </section>
  
          <section className="mb-12 bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
            <h2 className="text-3xl font-semibold text-gray-800 mb-6 border-b pb-4">Education and Academic Excellence</h2>
            <p className="text-gray-700 mb-6 text-lg">Oba Akiolu's education reflects a blend of traditional upbringing and modern learning:</p>
            <ul className="list-disc pl-8 text-gray-700 space-y-4">
              <li className="mb-4 bg-gray-50 p-4 rounded-lg">
                <span className="font-semibold text-indigo-700">Primary and Secondary Education:</span><br/>
                He attended Ansar-Ud-Deen College in Isolo, Lagos, where he excelled academically and displayed leadership qualities.
              </li>
              <li className="mb-4 bg-gray-50 p-4 rounded-lg">
                <span className="font-semibold text-indigo-700">Higher Education:</span><br/>
                He pursued a Bachelor's Degree in Law at the University of Lagos (UNILAG). His legal studies provided him with a robust understanding of justice, governance, and the rule of law, all of which would later influence his approach to leadership.
              </li>
            </ul>
          </section>
  
          <section className="mb-12 bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
            <h2 className="text-3xl font-semibold text-gray-800 mb-6 border-b pb-4">Distinguished Career in the Nigerian Police Force (1970–2002)</h2>
            <div className="space-y-6">
              <h3 className="text-2xl font-medium text-gray-800 border-l-4 border-indigo-500 pl-4">Joining and Early Career</h3>
              <p className="text-gray-700 text-lg">In 1970, at the age of 27, Oba Akiolu joined the Nigerian Police Force. His career began with postings in Lagos, where his keen understanding of law and public order quickly distinguished him as a rising star in the organization.</p>
            
              <h3 className="text-2xl font-medium text-gray-800 border-l-4 border-indigo-500 pl-4">Rising Through the Ranks</h3>
              <ul className="list-disc pl-8 text-gray-700 space-y-4">
                <li className="mb-4 bg-gray-50 p-4 rounded-lg">
                  <span className="font-semibold text-indigo-700">Critical Assignments:</span><br/>
                  Oba Akiolu held key positions in criminal investigations and law enforcement management. His early contributions included investigating high-profile cases, which earned him commendations for integrity and diligence.
                </li>
                <li className="mb-4 bg-gray-50 p-4 rounded-lg">
                  <span className="font-semibold text-indigo-700">Promotion to Assistant Inspector-General (AIG):</span><br/>
                  Over the course of 32 years, he rose to the rank of Assistant Inspector-General of Police (AIG), making significant contributions to crime prevention and law enforcement policies in Nigeria.
                </li>
              </ul>
            </div>
          </section>

          <section className="mb-12 bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
            <h2 className="text-3xl font-semibold text-gray-800 mb-6 border-b pb-4">Key Contributions to Law Enforcement</h2>
            <ul className="list-disc pl-8 text-gray-700 space-y-6">
              <li className="mb-4 bg-gray-50 p-4 rounded-lg">
                <span className="font-semibold text-indigo-700">Crime Prevention Innovations:</span><br/>
                Oba Akiolu pioneered the introduction of community policing programs aimed at improving cooperation between citizens and law enforcement. These initiatives drastically reduced crime rates in urban areas like Lagos.
              </li>
              <li className="mb-4 bg-gray-50 p-4 rounded-lg">
                <span className="font-semibold text-indigo-700">Tackling Organized Crime:</span><br/>
                As AIG, he spearheaded operations to dismantle syndicates involved in drug trafficking, armed robbery, and corruption. Notably, he led efforts to curb the activities of Lagos' notorious "Area Boys," reducing criminal influence in key districts.
              </li>
              <li className="mb-4 bg-gray-50 p-4 rounded-lg">
                <span className="font-semibold text-indigo-700">Commendations:</span><br/>
                His outstanding service earned him national and international recognition, including awards from the Nigerian government for contributions to public safety.
              </li>
            </ul>
          </section>

          <div className="space-y-12">
            <section className="mb-12 bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
              <h2 className="text-3xl font-semibold text-gray-800 mb-6 border-b pb-4">Legacy and Impact</h2>
              <ul className="list-decimal pl-8 text-gray-700 space-y-4">
                <li className="mb-4 bg-gray-50 p-4 rounded-lg">
                  <span className="font-semibold text-indigo-700">Visionary Leadership:</span><br/>
                  Oba Akiolu's reign has positioned Lagos as a city that blends cultural heritage with global aspirations.
                </li>
                <li className="mb-4 bg-gray-50 p-4 rounded-lg">
                  <span className="font-semibold text-indigo-700">Economic Reformer:</span><br/>
                  Through his advocacy, Lagos has attracted investments and infrastructure projects, solidifying its position as Nigeria's economic powerhouse.
                </li>
                <li className="mb-4 bg-gray-50 p-4 rounded-lg">
                  <span className="font-semibold text-indigo-700">Cultural Custodian:</span><br/>
                  By preserving traditions and promoting Yoruba culture, he has ensured that Lagos remains a beacon of African heritage.
                </li>
                <li className="mb-4 bg-gray-50 p-4 rounded-lg">
                  <span className="font-semibold text-indigo-700">Diplomatic Leader:</span><br/>
                  His role as a mediator and advisor has contributed to political stability in Lagos and beyond.
                </li>
              </ul>
            </section>

            <section className="mb-12 bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
              <h2 className="text-3xl font-semibold text-gray-800 mb-6 border-b pb-4">Conclusion</h2>
              <p className="text-gray-700 leading-relaxed text-lg italic">
                Oba Rilwan Babatunde Osuolale Aremu Akiolu I's reign is a blend of tradition and progress. By upholding Lagos' rich cultural heritage while championing modernization, he has solidified his legacy as one of the most impactful monarchs in the city's history. His vision and leadership continue to shape Lagos' journey as a global metropolis.
              </p>
            </section>
          </div>
        </div>
        <Footer/>
      </div>
    )
}