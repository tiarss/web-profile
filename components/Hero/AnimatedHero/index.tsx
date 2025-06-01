'use client'
import React, { useEffect, useState } from "react"
import { setTimeout } from "timers"
import { useScramble } from 'use-scramble'

const AnimatedHero = () => {
  const [isToogle, setIsToogle] = useState(true)
  const { ref: ref2 } = useScramble({
    text: isToogle ? '' : 'Tiar',
    range: [65, 125],
    speed: 0.2,
    tick: 4,
    step: 6,
    scramble: 5,
    seed: 0,
    chance: 1,
    overdrive: false,
    playOnMount: true
  })
  const { ref } = useScramble({
    text: isToogle ? 'I am Front End Developer' : `Hello.. My Name is `,
    range: [65, 125],
    speed: 0.2,
    tick: 4,
    step: 6,
    scramble: 5,
    seed: 0,
    chance: 1,
    overdrive: false,
  });

  useEffect(() => {
    setTimeout(() => {
      setIsToogle(!isToogle)
    }, 5000)
  }, [isToogle])

  return (
    <div>
      <div>
        <p className="text-4xl md:text-6xl 2xl:text-[120px] font-sans font-medium dark:text-white text-slate-800 inline" ref={ref} />
        <span className="text-4xl md:text-6xl 2xl:text-[120px] font-sans font-medium dark:text-white text-blue-600 inline" ref={ref2} />
      </div>
    </div>
  )
}

export default AnimatedHero