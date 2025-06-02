'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Carousel } from '@trendyol-js/react-carousel';

import Header from '@/components/Header'
import Hero from '@/components/Hero'
import { ProgrammingIcon } from '@/assets/const'
import { PortfolioImage } from '@/assets/img/const'
import './globals.css'

export default function Home() {
  return (
    <div className='dark:after:infinite-background after:infinite-background-black relative' id="home">
      <div className='dark:block hidden absolute top-[-90px] left-1/2 transform -translate-x-1/2 md:w-[900px] h-[150px] rounded-[50%] bg-gradient-to-b from-indigo-900 via-purple-800 to-fuchsia-900 blur-3xl opacity-30' />
      <Header />
      {/*  Welcome Section */}
      <div className='flex flex-col h-screen justify-center items-start px-[50px] md:px-[70px]'>
        <Hero />
      </div>
      <div className='min-h-screen flex items-center justify-center py-20 bg-gradient-to-b from-transparent via-indigo-50/20 to-transparent dark:via-indigo-950/20' id="about-me">
        <div className="max-w-7xl mx-auto w-full px-4">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className='text-4xl text-center font-sans font-bold text-slate-700 dark:text-white uppercase mb-16'>
            About Me
          </motion.h2>


          <div className='grid md:grid-cols-2 gap-8'>
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                type: "spring",
                bounce: 0.4
              }}
              className='group relative overflow-hidden rounded-3xl bg-white/80 dark:bg-gray-900/80 
                        backdrop-blur-lg border border-gray-200 dark:border-gray-800
                        transition-all duration-500'
            >
              <div className='absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 dark:from-indigo-900/30 dark:to-purple-900/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500' />
              <div className='relative p-8 md:p-12'>
                <div className='w-16 h-16 mb-8 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center'>
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <h3 className='text-2xl font-bold mb-4 text-gray-900 dark:text-white font-sans'>
                  Profile
                </h3>
                <p className='text-gray-600 dark:text-gray-300 leading-relaxed font-sans'>
                  Frontend Developer with 3+ years of experience in designing, building, and maintaining scalable web applications. Proficient in modern frontend technologies, including Next.js, and actively expanding expertise in mobile development with React Native. Passionate about creating clean, user-centric interfaces and collaborating in cross-functional teams. Quick to adapt to new technologies and committed to continuous learning to deliver high-quality user experiences across platforms.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                type: "spring",
                bounce: 0.4,
              }}
              className='group relative overflow-hidden rounded-3xl bg-white/80 dark:bg-gray-900/80 
                        backdrop-blur-lg border border-gray-200 dark:border-gray-800
                        transition-all duration-500'
            >
              <div className='absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20 dark:from-purple-900/30 dark:to-pink-900/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500' />
              <div className='relative p-8 md:p-12'>
                <div className='w-16 h-16 mb-8 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center'>
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className='text-2xl font-bold mb-4 text-gray-900 dark:text-white font-sans'>
                  Education
                </h3>
                <div className="mb-6 font-sans">
                  <h4 className="font-semibold mb-2 text-gray-600 dark:text-gray-300">SIRCLO Tech Academy x Altera Academy</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">Dec 2021 – Mar 2022</p>
                  <p className="mb-2 text-gray-600 dark:text-gray-300">Front End – React Js</p>
                  <ul className="list-disc list-inside space-y-1 ml-4 text-gray-600 dark:text-gray-300">
                    <li>Learn front-end development skills from fundamental to advanced proficiency</li>
                    <li>Finish some Project and Final Capstone Project</li>
                  </ul>
                </div>

                <div className='font-sans'>
                  <h4 className="font-semibold mb-2 text-gray-600 dark:text-gray-300">Politeknik Elektronika Negeri Surabaya</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">D4 – Electronic Engineering | GPA: 3.52 | Jul 2016 – Sept 2020</p>
                  <ul className="list-disc list-inside space-y-1 ml-4 text-gray-600 dark:text-gray-300">
                    <li>Head of Communication and Information Department in HIMA ELKA PENS</li>
                    <li>Presenter in Pekan Ilmiah Mahasiswa Nasional 32 (PIMNAS 32) at Universitas Udayana</li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="min-h-screen flex flex-col gap-8 md:gap-16 max-w-6xl mx-auto mt-8 md:mt-16 px-4 md:px-8">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className='text-4xl text-center font-sans font-bold mb-[50px] text-slate-700 dark:text-white uppercase'>
          Experience
        </motion.h2>

        {/* Current Role */}
        <motion.div
          className="relative bg-gradient-to-br from-white to-slate-50 
                     dark:from-[#041c23] dark:to-[#072833]
                     rounded-2xl p-6 sm:p-8 md:p-12 shadow-xl md:shadow-2xl
                     border border-slate-200 dark:border-slate-700
                     transform-gpu transition-all duration-500
                     hover:scale-[1.01] md:hover:scale-[1.02]
                     backdrop-blur-sm"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1]
          }}
        >
          <div className="absolute -left-3 top-8 md:top-12 w-1 md:w-1.5 h-16 md:h-24 
                         bg-gradient-to-b from-purple-400 to-purple-600 rounded-full
                         animate-pulse" />

          <div className="mb-4 md:mb-6 font-sans">
            <h4 className="text-lg sm:text-xl md:text-2xl font-semibold text-purple-600 dark:text-purple-400">
              Frontend Developer – Web & Mobile
            </h4>
            <p className="text-sm sm:text-base text-slate-500 dark:text-slate-400 mt-2">
              PT. Mediansus Permana (Permana Solutions) | Feb 2024 - Present
            </p>
          </div>

          <div className="space-y-4 md:space-y-6 font-sans">
            <ul className="list-disc list-inside space-y-2 sm:space-y-3 
                         text-sm sm:text-base text-slate-600 dark:text-slate-300 
                         ml-2 sm:ml-3 md:ml-4">
              <li>Developed responsive web and cross-platform mobile applications based on UI/UX designs and business requirements, collaborating closely with designers and backend developers to ensure seamless user experiences and consistent interface implementation.</li>
              <li>Identified, troubleshot, and resolved bugs to maintain and enhance functionality and user satisfaction in existing projects.</li>
              <li>Authored clear and concise documentation, including User Acceptance Testing (UAT) reports and user guides for clients and internal teams.</li>
              <li>Led frontend development of a <b>Clinic Management System</b> for pet shops, focusing on usability and efficient user workflows.</li>
              <li>Built dashboards and mobile interfaces for a <b>Loan Origination System</b> used by banking clients.</li>
              <li>Developed a user-centric <b>Learning Management System</b>, <b>Trial Booking</b>, and <b>Payment Interface</b> for an English learning platform, supporting the entire student journey from prospective enrollment to graduation.</li>
              <li>Designed and implemented the frontend of a <b>Point of Sale (POS)</b> system called <b>Jula</b>, enhancing sales operations and customer experience. (<a href="https://play.google.com/store/apps/details?id=com.jula.pos" target="_blank" rel="noopener noreferrer" className="underline text-blue-600 dark:text-blue-400">Play Store</a>)</li>
            </ul>
          </div>

          <div className="mt-6 sm:mt-8 p-4 sm:p-5 md:p-6 font-sans
                         bg-gradient-to-br from-slate-50 to-slate-100 
                         dark:from-[#0a2730] dark:to-[#0d2f3a] 
                         rounded-lg border border-slate-200 dark:border-slate-700
                         transform transition-all duration-300 hover:scale-[1.01]">
            <h4 className="text-sm sm:text-base font-semibold text-purple-600 dark:text-purple-400 mb-3 md:mb-4">
              Tech Stack
            </h4>
            <div className="flex flex-wrap gap-2 sm:gap-2.5 font-sans">
              {["Typescript", "Next Js", "React Native Expo", "Tanstack Query", "Ant Design 5", "Tailwind CSS", "Zustand"].map((tech) => (
                <motion.span
                  key={tech}
                  whileHover={{ scale: 1.05 }}
                  className="px-3 sm:px-4 py-1.5 bg-white dark:bg-[#041c23] 
                           rounded-full text-xs sm:text-sm 
                           text-slate-600 dark:text-slate-300
                           border border-slate-200 dark:border-slate-700
                           transition-colors duration-300
                           hover:bg-purple-50 dark:hover:bg-[#062630]">
                  {tech}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Previous Role */}
        <motion.div
          className="relative bg-gradient-to-br from-white to-slate-50 
                     dark:from-[#041c23] dark:to-[#072833]
                     rounded-2xl p-6 sm:p-8 md:p-12 shadow-xl md:shadow-2xl
                     border border-slate-200 dark:border-slate-700
                     transform-gpu transition-all duration-500
                     hover:scale-[1.01] md:hover:scale-[1.02]
                     backdrop-blur-sm"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1],
            delay: 0.2
          }}
        >
          <div className="absolute -left-3 top-8 md:top-12 w-1 md:w-1.5 h-16 md:h-24 
                         bg-gradient-to-b from-blue-400 to-blue-600 rounded-full
                         animate-pulse" />

          <div className="mb-4 md:mb-6 font-sans">
            <h4 className="text-lg sm:text-xl md:text-2xl font-semibold text-blue-600 dark:text-blue-400">
              Junior Software Engineer – Front End
            </h4>
            <p className="text-sm sm:text-base text-slate-500 dark:text-slate-400 mt-2">
              PT Linkar Niaga Solusindo (SIRCLO) | Apr 2022 – Oct 2023
            </p>
          </div>

          <div className="space-y-4 md:space-y-6 font-sans">
            <ul className="list-disc list-inside space-y-2 sm:space-y-3
                         text-sm sm:text-base text-slate-600 dark:text-slate-300 
                         ml-2 sm:ml-3 md:ml-4">
              <li>Developed new features for web applications based on UI/UX designs, product specifications, and business requirements, ensuring high usability and performance.</li>
              <li>Maintained and enhanced over <b>10+ customizable webstore templates</b>, implementing core storefront functionalities and dynamic content features such as widgets, banners, and other interactive elements using the company’s design system and component library.</li>
              <li>Collaborated cross-functionally with product, design, and engineering teams to build a new feature page called <b>Cekatan</b>, aimed at simplifying the product listing process for sellers.</li>
              <li>Improved merchant onboarding efficiency by developing the <b>Quick Setup</b> feature in the admin panel, significantly reducing store setup time.</li>
              <li>Created <b>Premium Templates</b> tailored to specific client requirements, incorporating advanced features and custom design elements to deliver a differentiated merchant experience.</li>
            </ul>
          </div>

          <div className="mt-6 sm:mt-8 p-4 sm:p-5 md:p-6 font-sans
                         bg-gradient-to-br from-slate-50 to-slate-100 
                         dark:from-[#0a2730] dark:to-[#0d2f3a] 
                         rounded-lg border border-slate-200 dark:border-slate-700
                         transform transition-all duration-300 hover:scale-[1.01]">
            <h4 className="text-sm sm:text-base font-semibold text-blue-600 dark:text-blue-400 mb-3 md:mb-4">
              Tech Stack
            </h4>
            <div className="flex flex-wrap gap-2 sm:gap-2.5">
              {["Typescript", "Next Js", "SASS/SCSS", "Tailwind CSS", "Context API", "GraphQL (Apollo Client)"]
                .map((tech) => (
                  <motion.span
                    key={tech}
                    whileHover={{ scale: 1.05 }}
                    className="px-3 sm:px-4 py-1.5 bg-white dark:bg-[#041c23] 
                             rounded-full text-xs sm:text-sm
                             text-slate-600 dark:text-slate-300
                             border border-slate-200 dark:border-slate-700
                             transition-colors duration-300
                             hover:bg-blue-50 dark:hover:bg-[#062630]">
                    {tech}
                  </motion.span>
                ))}
            </div>
          </div>
        </motion.div>

        {/* Previous Role */}
      </div>
      {/* Tech Stack */}
      <div className='flex flex-col justify-center items-center gap-2 h-[80vh]'>
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className='text-4xl font-sans font-bold mb-[50px] text-slate-700 dark:text-white uppercase'>
          What i am used
        </motion.h2>
        <div className='flex w-screen flex-wrap justify-center items-center gap-[75px] px-10'>
          {ProgrammingIcon.map((data) => (
            <motion.div key={data.alt}>
              <Image
                className='hidden dark:block text-slate-200 hover:scale-125 transition-all ease-in-out cursor-pointer'
                alt={data.alt}
                height={100}
                placeholder='empty'
                loading='lazy'
                src={data.imageDark}
              />
              <Image
                className='block dark:hidden text-slate-200 hover:scale-125 transition-all ease-in-out cursor-pointer'
                alt={data.alt}
                height={100}
                placeholder='empty'
                loading='lazy'
                src={data.image}
              />
            </motion.div>
          ))}
        </div>
      </div>
      {/* My Project */}
      <div className="min-h-screen flex flex-col items-center justify-center py-16 px-4 bg-gradient-to-b from-transparent via-slate-50/30 to-transparent dark:via-slate-900/30" id='portfolio'>
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-black text-center mb-12 md:mb-16
               bg-gradient-to-r from-purple-600 via-pink-600 to-rose-600
               dark:from-purple-400 dark:via-pink-400 dark:to-rose-400
               bg-clip-text text-transparent
               tracking-tight">
          Portfolio
        </motion.h2>

        <div className="w-full max-w-5xl">
          <Carousel
            show={1}
            slide={1}
            transition={0.3}
            swiping
            className="w-full"
            leftArrow={
              <button className="absolute left-4 top-1/2 -translate-y-1/2 z-10
                         w-10 h-10
                         flex items-center justify-center
                         rounded-full bg-white/80 dark:bg-gray-800/80
                         text-gray-800 dark:text-gray-200
                         border border-gray-200 dark:border-gray-700
                         hover:bg-white dark:hover:bg-gray-800
                         transition-colors duration-200"
                title="Previous project">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                </svg>
              </button>
            }
            rightArrow={
              <button className="absolute right-4 top-1/2 -translate-y-1/2 z-10
                         w-10 h-10
                         flex items-center justify-center
                         rounded-full bg-white/80 dark:bg-gray-800/80
                         text-gray-800 dark:text-gray-200
                         border border-gray-200 dark:border-gray-700
                         hover:bg-white dark:hover:bg-gray-800
                         transition-colors duration-200"
                title="Next project">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            }>
            {PortfolioImage.map((data) => (
              <a href="/portfolio" key={data.alt}>
                <motion.div
                  className="px-2 group cursor-pointer"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  title={`View ${data.alt} project details`}
                >
                  <div className="relative overflow-hidden rounded-xl shadow-lg border border-gray-200 dark:border-gray-800
                              transform transition-transform duration-300 group-hover:scale-[1.02]">
                    <Image
                      className="w-full h-auto object-cover"
                      alt={data.alt}
                      height={800}
                      width={1200}
                      placeholder="blur"
                      blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx4eHRoaHiQlJyAlJSQxMi0wMTItMTA7LjoxOS47LjVBNkZGQTVeYF5iXnJycnL/2wBDARUXFx4aHiMeHiNyU0JTcnJycnJycnJycnJycnJycnJycnJycnJycnJycnJycnJycnJycnJycnJycnJycnJycnL/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                      loading="lazy"
                      src={data.image}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent 
                                opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl">
                      <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                        <h3 className="text-2xl font-bold mb-2 font-sans">{data.title}</h3>
                        <p className="text-sm opacity-90 font-sans leading-relaxed">
                          Click to view project details and technologies used
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </a>
            ))}
          </Carousel>
        </div>
      </div>

      {/* Collaboration Section */}
      <div className="min-h-screen flex flex-col items-center justify-center py-16 md:py-24 px-4 md:px-8 bg-gradient-to-b from-transparent via-indigo-50/20 to-transparent dark:via-indigo-950/20">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-black text-center mb-12 md:mb-16
               bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600
               dark:from-emerald-400 dark:via-teal-400 dark:to-cyan-400
               bg-clip-text text-transparent
               tracking-tight">
          {`Let's Collaborate`}
        </motion.h2>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          {/* Professional Inquiries */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="group bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg
                      rounded-2xl p-8 md:p-10
                      border border-gray-200 dark:border-gray-800
                      transform hover:scale-[1.02] transition-all duration-300
                      relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-teal-500/10 to-emerald-500/10 dark:from-teal-500/5 dark:to-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative">
              <div className="w-16 h-16 mb-6 rounded-2xl bg-gradient-to-br from-teal-500 to-emerald-500 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white font-sans">
                Professional Inquiries
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-8 min-h-[80px] font-sans">
                {`Open for freelance projects, consulting work, and full-time opportunities. Let's discuss how we can work together to bring your ideas to life.`}
              </p>
              <a
                href="mailto:subratabahtiar@gmail.com"
                className="inline-flex items-center px-6 py-3 rounded-lg
                         bg-gradient-to-r from-teal-500 to-emerald-500
                         text-white font-medium
                         hover:from-teal-600 hover:to-emerald-600
                         transform hover:translate-x-1 font-sans
                         transition-all duration-300"
              >
                Get in Touch
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="group bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg
                      rounded-2xl p-8 md:p-10
                      border border-gray-200 dark:border-gray-800
                      transform hover:scale-[1.02] transition-all duration-300
                      relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 dark:from-cyan-500/5 dark:to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative">
              <div className="w-16 h-16 mb-6 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white font-sans">
                Projek Bareng
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-8 min-h-[80px] font-sans">
                {`Have an innovative tech idea but need help bringing it to life? I'm part of a small development group that helps implement project ideas for individuals and small businesses. We provide technical expertise and hands-on development to turn your concepts into reality.`}
              </p>
              <a
                href="mailto:projekbareng@outlook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 rounded-lg
                         bg-gradient-to-r from-cyan-500 to-blue-500
                         text-white font-medium font-sans
                         hover:from-cyan-600 hover:to-blue-600
                         transform hover:translate-x-1
                         transition-all duration-300"
              >
                Join Project
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gradient-to-t from-slate-100 to-transparent dark:from-slate-900 dark:to-transparent py-12 mt-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Contact Info */}
            <div className="text-center md:text-left">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Contact</h3>
              <ul className="space-y-2">
                <li>
                  <a href="mailto:subratabahtiar@gmail.com" className="text-gray-600 dark:text-gray-300 hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors">
                    subratabahtiar@gmail.com
                  </a>
                </li>
                <li>
                  <a href="https://wa.me/6287855911143" target="_blank" className="text-gray-600 dark:text-gray-300 hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors">
                    +62 878-5591-1143
                  </a>
                </li>
              </ul>
            </div>

            {/* Social Links */}
            <div className="text-center">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Connect</h3>
              <div className="flex justify-center space-x-4">
                <a href="https://github.com/tiarss" target="_blank" rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-300 hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="https://www.linkedin.com/in/bahtiarsubrata/" target="_blank" rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-300 hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="text-center md:text-right">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a href="/" className="text-gray-600 dark:text-gray-300 hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors">
                    Home
                  </a>
                </li>
                <li>
                  <a href="/portfolio" className="text-gray-600 dark:text-gray-300 hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors">
                    Portfolio
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
            <p className="text-center text-sm text-gray-500 dark:text-gray-400">
              © {new Date().getFullYear()} Bahtiar Subrata. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
