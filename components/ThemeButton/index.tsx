'use client'

import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { AnimatePresence, motion } from "framer-motion"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

const ThemeButton = () => {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const localTheme = localStorage.getItem('theme')
    if (!localTheme || localTheme === 'undefined') {
      localStorage.setItem('theme', 'dark')
      setTheme('dark')
    } else {
      setTheme(localTheme)
    }
  }, [setTheme])

  if (!mounted) return null

  return (
    <AnimatePresence mode='wait'>
      {(theme === "dark" || theme === 'undefined') ? (
        <motion.button
          key={'moon'}
          onClick={() => setTheme('light')}
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 20, opacity: 0 }}
          transition={{ duration: 0.2 }}
          className='fixed flex justify-center items-center bottom-10 right-10 bg-slate-900 border border-slate-900 hover:border-white transition-colors ease-in-out h-[70px] w-[70px] p-[20px] rounded-full text-white cursor-pointer'
          aria-label="Switch to light theme"
        >
          <FontAwesomeIcon icon={faMoon} size="xl" color='#fff' />
        </motion.button>
      ) : (
        <motion.button
          key={'sun'}
          onClick={() => setTheme('dark')}
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 20, opacity: 0 }}
          transition={{ duration: 0.2 }}
          className='fixed flex justify-center items-center bottom-10 right-10 bg-slate-100 border border-slate-100 hover:border-slate-800 transition-colors ease-in-out h-[70px] w-[70px] p-[20px] rounded-full text-white cursor-pointer'
          aria-label="Switch to dark theme"
        >
          <FontAwesomeIcon icon={faSun} size="xl" color='#000' />
        </motion.button>
      )}
    </AnimatePresence>
  )
}

export default ThemeButton