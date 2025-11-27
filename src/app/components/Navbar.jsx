"use client"
import React, { useState } from 'react'
import Image from "next/image";

export default function Navbar() {
  const [searchQuery, setSearchQuery] = useState('')
  const [showSearch, setShowSearch] = useState(false)

  const handleSearch = (e) => {
    if (e.key === 'Enter' && searchQuery.trim()) {
      e.preventDefault()
      const searchUrl = `/search?q=${encodeURIComponent(searchQuery.trim())}`
      window.location.href = searchUrl
    }
  }
  function toggleMenuSlide(){
    const menu =document.getElementById("menu");

    menu.classList.toggle("translate-x-full");
}

  return (
    <>
      <nav className='bg-white font-[poppins] shadow-md fixed w-full top-0 z-50'>
        <div className='container mx-auto px-4 py-3 flex justify-between items-center'>
                    <Image 
      src="/logo.png"
      alt="Logo"
      width={100}
      height={89}
      onClick={() => window.location.href = '/'}
    />
              {/* <div className='text-3xl font-bold text-green-700 cursor-pointer' onClick={() => window.location.href = '/'}>
            NIGERIA ROYALTIES
          </div> */}                   
        
          
          <div className='hidden items-center font-semibold md:flex space-x-6'>
            <a href='/' className='text-gray-700 hover:text-green-700'>Home</a>
            <a href='/pages/about' className='text-gray-700 hover:text-green-700'>About</a>
            
            <div className='relative group'>
                          
            <a className='text-gray-700 hover:text-green-700'>Monarchs</a>
            <ul className='absolute hidden group-hover:block bg-white text-black shadow-lg rounded-md py-2 w-48 z-50'>
            <li className='relative group/nested'>
                            <a href='/pages/theking' className='block px-4 py-2 hover:bg-green-50 hover:text-green-700 flex justify-between items-center'>
                              Oba Of Lagos
                              <span>▶</span>
                            </a>
                          </li>
                          <li className='relative group/nested'>
                            <a href='/pages/alaafin-of-oyo' className='block px-4 py-2 hover:bg-green-50 hover:text-green-700 flex justify-between items-center'>
                              Alaafin of Oyo
                              <span>▶</span>
                            </a>
                          </li>
                          <li className='relative group/nested'>
                            <a href='/pages/1600-1700-ado' className='block px-4 py-2 hover:bg-green-50 hover:text-green-700 flex justify-between items-center'>
                              Sultan of Sokoto
                              <span>▶</span>
                            </a>
                          </li>
                          <li className='relative group/nested'>
                            <a href='/pages/1600-1700-ado' className='block px-4 py-2 hover:bg-green-50 hover:text-green-700 flex justify-between items-center'>
                              Ooni of Ife
                              <span>▶</span>
                            </a>
                          </li>
                          <li className='relative group/nested'>
                            <a href='/pages/1600-1700-ado' className='block px-4 py-2 hover:bg-green-50 hover:text-green-700 flex justify-between items-center'>
                              Olubadan of Ibadan
                              <span>▶</span>
                            </a>
                          </li>
                          <li className='relative group/nested'>
                            <a href='/pages/1600-1700-ado' className='block px-4 py-2 hover:bg-green-50 hover:text-green-700 flex justify-between items-center'>
                              Emir of Kano
                              <span>▶</span>
                            </a>
                          </li>

            </ul>

            </div>
                      {/* <div className='relative group'>
                        <a href='#' className='text-gray-700 hover:text-green-700'>History</a>
                        <ul className='absolute hidden group-hover:block bg-white text-black shadow-lg rounded-md py-2 w-48 z-50'>
                          <li className='relative group/nested'>
                            <a href='/pages/1600-1700-ado' className='block px-4 py-2 hover:bg-green-50 hover:text-green-700 flex justify-between items-center'>
                              Year (1600-1700)
                              <span>▶</span>
                            </a>
                            <ul className='absolute hidden group-hover/nested:block bg-white shadow-lg rounded-md py-2 w-48 left-full top-0'>
                              <li><a href='/pages/1600-1700-ado' className='block px-4 py-2 hover:bg-green-50 hover:text-green-700'>Oba Ado</a></li>
                              <li><a href='/pages/1600-gabaro' className='block px-4 py-2 hover:bg-green-50 hover:text-green-700'>Oba Gabaro </a></li>
                            </ul>
                          </li>
                          <li className='relative group/nested'>
                            <a href='/pages/1701-1800-semoyin' className='block px-4 py-2 hover:bg-green-50 hover:text-green-700 flex justify-between items-center'>
                              Year (1701-1800)
                              <span>▶</span>
                            </a>
                            <ul className='absolute hidden group-hover/nested:block bg-white shadow-lg rounded-md py-2 w-48 left-full top-0'>
                              <li><a href='/pages/1701-1800-semoyin' className='block px-4 py-2 hover:bg-green-50 hover:text-green-700'>Oba Akinsemoyin </a></li>
                              <li><a href='/pages/1749-1775-eletu' className='block px-4 py-2 hover:bg-green-50 hover:text-green-700'>Oba Eletu Kekere </a></li>
                              <li><a href='/pages/1775-1801-ologun' className='block px-4 py-2 hover:bg-green-50 hover:text-green-700'>Oba Ologun Kutere </a></li>
                            </ul>
                          </li>
                          <li className='relative group/nested'>
                            <a href='/pages/1801-1900/ajosun' className='block px-4 py-2 hover:bg-green-50 hover:text-green-700 flex justify-between items-center'>
                              Year (1801-1900)
                              <span>▶</span>
                            </a>
                            <ul className='absolute hidden group-hover/nested:block bg-white shadow-lg rounded-md py-2 w-48 left-full top-0'>
                              <li><a href='/pages/1801-1900-ajosun' className='block px-4 py-2 hover:bg-green-50 hover:text-green-700'>Oba Adele Ajosun </a></li>
                              <li><a href='/pages/1821-1829-oshinlokun' className='block px-4 py-2 hover:bg-green-50 hover:text-green-700'>Oba Oshinlokun </a></li>
                              <li><a href='/pages/1829-1834-idowu' className='block px-4 py-2 hover:bg-green-50 hover:text-green-700'>Oba Idewu Ojulari </a></li>
                              <li><a href='/pages/1835-1837-adele' className='block px-4 py-2 hover:bg-green-50 hover:text-green-700'>Oba Adele Ajosun </a></li>
                              <li><a href='/pages/1837-1841-oluwole' className='block px-4 py-2 hover:bg-green-50 hover:text-green-700'>Oba Oluwole </a></li>
                              <li><a href='/pages/1841-1845-akitoye' className='block px-4 py-2 hover:bg-green-50 hover:text-green-700'>Oba Akitoye </a></li>
                              <li><a href='/pages/1845-1851-kosoko' className='block px-4 py-2 hover:bg-green-50 hover:text-green-700'>Oba Kosoko</a></li>
                              <li><a href='/pages/1851-1853-akitoye-restored' className='block px-4 py-2 hover:bg-green-50 hover:text-green-700'>Oba Akitoye (Restored) </a></li>
                              <li><a href='/pages/1853-1885-dosunmu' className='block px-4 py-2 hover:bg-green-50 hover:text-green-700'>Oba Dosunmu</a></li>
                            </ul>
                          </li>
                          <li className='relative group/nested'>
                            <a href='/pages/history/modern' className='block px-4 py-2 hover:bg-green-50 hover:text-green-700 flex justify-between items-center'>
                              Year (1901-2000)
                              <span>▶</span>
                            </a>
                            <ul className='absolute hidden group-hover/nested:block bg-white shadow-lg rounded-md py-2 w-48 left-full top-0'>
                              <li><a href='/pages/1901-2000-oyekan' className='block px-4 py-2 hover:bg-green-50 hover:text-green-700'>Oba Oyekan I </a></li>
                              <li><a href='/pages/1901-1925-eleko' className='block px-4 py-2 hover:bg-green-50 hover:text-green-700'>Oba Eshugbayi Eleko </a></li>
                              <li><a href='/pages/1925-1928-ibikunle' className='block px-4 py-2 hover:bg-green-50 hover:text-green-700'>Ibikunle Akitoye </a></li>
                              <li><a href='/pages/1931-1932-eleko-restored' className='block px-4 py-2 hover:bg-green-50 hover:text-green-700'>Oba Eshugbayi Eleko (Restored)</a></li>
                              <li><a href='/pages/1949-1964-adele' className='block px-4 py-2 hover:bg-green-50 hover:text-green-700'>Oba Adeniji Adele II </a></li>
                              <li><a href='/pages/1965-2003-oyekan' className='block px-4 py-2 hover:bg-green-50 hover:text-green-700'>Oba Adekola Oyekan II </a></li>
                            </ul>
                          </li>
                        </ul>
                      </div> */}
            <a href='/pages/contact' className='text-gray-700 hover:text-green-700'>Contact</a>
            <div className="relative">
              <button 
                className="bg-black p-2 rounded-full"
                onClick={() => setShowSearch(!showSearch)}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="white">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
              {showSearch && (
                <div className="absolute right-0 mt-2 w-64">
                  <input
                    type="text"
                    className="w-full p-2 border rounded-md shadow-lg"
                    placeholder="Search..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onKeyPress={handleSearch}
                  />
                </div>
              )}
            </div>
          </div>
          {/* Hamburger for small screens */}
          <div className='md:hidden'>
            <button onClick={toggleMenuSlide} className='text-green-950'>
              <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M4 6h16M4 12h16M4 18h16' />
              </svg>
            </button>
          </div>
          <div
  className="fixed top-0 right-0 w-full h-full bg-white p-5 transform translate-x-full duration-300"
  id="menu"
>
  <button
    onClick={toggleMenuSlide}
    className="text-gray-600 border border-gray-200 hover:shadow-sm w-full rounded-lg"
  >
    Close X
  </button>

  <nav className="mt-8 space-y-4">
    <a href='/'  className='block text-lg font-medium text-gray-800 hover:text-green-700'>Home</a>
    <a href = "/pages/about" className="block text-lg font-medium text-gray-800 hover:text-green-700">About</a>
    {/* <a href = "/pages/theking" className="block text-lg font-medium text-gray-800 hover:text-green-700">Oba Akiolu</a> */}
    {/* <div className=' relative group'>
    <a className="block text-lg font-medium text-gray-800 hover:text-green-700">History</a>
    <ul className='absolute hidden group-hover:block bg-white text-black shadow-lg rounded-md py-2 w-48 z-50'>
                          <li className='relative group/nested'>
                            <a href='/pages/1600-1700-ado' className='block px-4 py-2 hover:bg-green-50 hover:text-green-700 flex justify-between items-center'>
                              Year (1600-1700)
                              <span>▶</span>
                            </a>
                            <ul className='absolute hidden group-hover/nested:block bg-white shadow-lg rounded-md py-2 w-48 left-full top-0'>
                              <li><a href='/pages/1600-1700-ado' className='block px-4 py-2 hover:bg-green-50 hover:text-green-700'>Oba Ado</a></li>
                              <li><a href='/pages/1600-gabaro' className='block px-4 py-2 hover:bg-green-50 hover:text-green-700'>Oba Gabaro </a></li>
                            </ul>
                          </li>

                          <li className='relative group/nested'>
                            <a href='/pages/1701-1800-semoyin' className='block px-4 py-2 hover:bg-green-50 hover:text-green-700 flex justify-between items-center'>
                              Year (1701-1800)
                              <span>▶</span>
                            </a>
                            <ul className='absolute hidden group-hover/nested:block bg-white shadow-lg rounded-md py-2 w-48 left-full top-0'>
                              <li><a href='/pages/1701-1800-semoyin' className='block px-4 py-2 hover:bg-green-50 hover:text-green-700'>Oba Akinsemoyin </a></li>
                              <li><a href='/pages/1749-1775-eletu' className='block px-4 py-2 hover:bg-green-50 hover:text-green-700'>Oba Eletu Kekere </a></li>
                              <li><a href='/pages/1775-1801-ologun' className='block px-4 py-2 hover:bg-green-50 hover:text-green-700'>Oba Ologun Kutere </a></li>
                            </ul>
                          </li>
                          <li className='relative group/nested'>
                            <a href='/pages/1801-1900/ajosun' className='block px-4 py-2 hover:bg-green-50 hover:text-green-700 flex justify-between items-center'>
                              Year (1801-1900)
                              <span>▶</span>
                            </a>
                            <ul className='absolute hidden group-hover/nested:block bg-white shadow-lg rounded-md py-2 w-48 left-full top-0'>
                              <li><a href='/pages/1801-1900-ajosun' className='block px-4 py-2 hover:bg-green-50 hover:text-green-700'>Oba Adele Ajosun </a></li>
                              <li><a href='/pages/1821-1829-oshinlokun' className='block px-4 py-2 hover:bg-green-50 hover:text-green-700'>Oba Oshinlokun </a></li>
                              <li><a href='/pages/1829-1834-idowu' className='block px-4 py-2 hover:bg-green-50 hover:text-green-700'>Oba Idewu Ojulari </a></li>
                              <li><a href='/pages/1835-1837-adele' className='block px-4 py-2 hover:bg-green-50 hover:text-green-700'>Oba Adele Ajosun </a></li>
                              <li><a href='/pages/1837-1841-oluwole' className='block px-4 py-2 hover:bg-green-50 hover:text-green-700'>Oba Oluwole </a></li>
                              <li><a href='/pages/1841-1845-akitoye' className='block px-4 py-2 hover:bg-green-50 hover:text-green-700'>Oba Akitoye </a></li>
                              <li><a href='/pages/1845-1851-kosoko' className='block px-4 py-2 hover:bg-green-50 hover:text-green-700'>Oba Kosoko</a></li>
                              <li><a href='/pages/1851-1853-akitoye-restored' className='block px-4 py-2 hover:bg-green-50 hover:text-green-700'>Oba Akitoye (Restored) </a></li>
                              <li><a href='/pages/1853-1885-dosunmu' className='block px-4 py-2 hover:bg-green-50 hover:text-green-700'>Oba Dosunmu</a></li>
                            </ul>
                          </li>
                          <li className='relative group/nested'>
                            <a href='/pages/history/modern' className='block px-4 py-2 hover:bg-green-50 hover:text-green-700 flex justify-between items-center'>
                              Year (1901-2000)
                              <span>▶</span>
                            </a>
                            <ul className='absolute hidden group-hover/nested:block bg-white shadow-lg rounded-md py-2 w-48 left-full '>
                              <li><a href='/pages/1901-2000-oyekan' className='block px-4 py-2 hover:bg-green-50 hover:text-green-700'>Oba Oyekan I </a></li>
                              <li><a href='/pages/1901-1925-eleko' className='block px-4 py-2 hover:bg-green-50 hover:text-green-700'>Oba Eshugbayi Eleko </a></li>
                              <li><a href='/pages/1925-1928-ibikunle' className='block px-4 py-2 hover:bg-green-50 hover:text-green-700'>Ibikunle Akitoye </a></li>
                              <li><a href='/pages/1931-1932-eleko-restored' className='block px-4 py-2 hover:bg-green-50 hover:text-green-700'>Oba Eshugbayi Eleko (Restored)</a></li>
                              <li><a href='/pages/1949-1964-adele' className='block px-4 py-2 hover:bg-green-50 hover:text-green-700'>Oba Adeniji Adele II </a></li>
                              <li><a href='/pages/1965-2003-oyekan' className='block px-4 py-2 hover:bg-green-50 hover:text-green-700'>Oba Adekola Oyekan II </a></li>
                            </ul>
                          </li>



                          
                          </ul>
    

    </div> */}
    <div className='relative group'>
                          
                          <a href='#' className='text-gray-800 font-medium hover:text-green-700'>Monarchs</a>
                          <ul className='absolute hidden group-hover:block bg-white text-black shadow-lg rounded-md py-2 w-48 z-50'>
                          <li className='relative group/nested'>
                                          <a href='/pages/theking' className='block px-4 py-2 hover:bg-green-50 hover:text-green-700 flex justify-between items-center'>
                                            Oba Of Lagos
                                            <span>▶</span>
                                          </a>
                                        </li>
                                        <li className='relative group/nested'>
                                          <a href='/pages/alaafin-of-oyo' className='block px-4 py-2 hover:bg-green-50 hover:text-green-700 flex justify-between items-center'>
                                            Alaafin of Oyo
                                            <span>▶</span>
                                          </a>
                                        </li>
                                        <li className='relative group/nested'>
                                          <a href='/pages/1600-1700-ado' className='block px-4 py-2 hover:bg-green-50 hover:text-green-700 flex justify-between items-center'>
                                            Sultan of Sokoto
                                            <span>▶</span>
                                          </a>
                                        </li>
                                        <li className='relative group/nested'>
                                          <a href='/pages/1600-1700-ado' className='block px-4 py-2 hover:bg-green-50 hover:text-green-700 flex justify-between items-center'>
                                            Ooni of Ife
                                            <span>▶</span>
                                          </a>
                                        </li>
                                        <li className='relative group/nested'>
                                          <a href='/pages/1600-1700-ado' className='block px-4 py-2 hover:bg-green-50 hover:text-green-700 flex justify-between items-center'>
                                            Olubadan of Ibadan
                                            <span>▶</span>
                                          </a>
                                        </li>
                                        <li className='relative group/nested'>
                                          <a href='/pages/1600-1700-ado' className='block px-4 py-2 hover:bg-green-50 hover:text-green-700 flex justify-between items-center'>
                                            Emir of Kano
                                            <span>▶</span>
                                          </a>
                                        </li>
              
                          </ul>
              
                          </div>
    
    {/* <a href = "/pages/blog" className="block text-lg font-medium text-gray-800 hover:text-green-700">Blog</a> */}
    <a href = "/pages/contact" className="block text-lg font-medium text-gray-800 hover:text-green-700">Contact</a>
  </nav>
</div>

        </div>
        <div className='w-full bg-green-100 hover:pause font-bold py-8 hidden md:block border-t overflow-visible'>
          <div className='container mx-auto pl-72 animate-scroll whitespace-nowrap'>
            <ul className='inline-flex space-x-8 text-sm text-gray-600'>
              <li className='relative group'>
                <a href='/pages/theking' className='hover:text-green-700'>OBA OF LAGOS</a>
               
              </li>
              <li className='relative group'>
                <a href='/pages/alaafin-of-oyo  ' className='hover:text-green-700'>ALAAFIN OF OYO</a>
           
              </li>
              <li className='relative group'>
                <a href='#' className='hover:text-green-700'>SULTAN OF SOKOTO</a>
                
              </li>
              <li className='relative group'>
                <a href='#' className='hover:text-green-700'>OONI OF IFE</a>               
              </li>
              <li className='relative group'>
                <a href='#' className='hover:text-green-700'>OLUBADAN OF IBADAN</a>               
              </li>
              <li className='relative group'>
                <a href='#' className='hover:text-green-700'>EMIR OF KANO</a>               
              </li>
            </ul>          
            </div>
        </div>
      </nav>
      <div className='h-20'></div>
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
    </>
  )
}