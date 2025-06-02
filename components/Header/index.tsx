'use client'

import { useEffect, useState } from "react";

const Header: React.FC= () => {

  const [isScroll, setIsScroll] = useState<Boolean>(false)
  const handleScroll = () => {
    const scrollx = window.scrollY
    if(scrollx > 100) {
      setIsScroll(true)
    } else {
      setIsScroll(false)
    }
  }

  const MenuList = [
    {
      title: "Home",
      path: "#home"
    },
    {
      title: "About Me",
      path: "#about-me"
    },
    {
      title: "Portfolio",
      path: "#portfolio"
    }
  ]

  useEffect(() => {
    handleScroll()
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div className={`hidden md:block fixed z-10 top-0 w-full transition-all ease-in-out duration-200 ${isScroll ? 'dark:bg-[rgb(4,28,35,0.8)] bg-[rgb(255,255,255,0.8)] py-[30px]' : ' py-[40px]'}`}>
      <ul className="flex justify-center align-middle gap-[70px] text-slate-800 dark:text-white">
        {MenuList.map((list: {title: string; path: string}) => (
          <a key={list.title} href={list.path}>
            <li className={`font-sans text-xl font-medium ${isScroll ? 'dark:text-white' : ''}`}>
              {list.title}
            </li>
          </a>
        ))}
      </ul>
    </div>
  )
}

export default Header