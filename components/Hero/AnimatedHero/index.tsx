'use client'
import React, { useEffect, useState } from "react"
import { setTimeout } from "timers"
import { useScramble } from 'use-scramble'

const AnimatedHero = () => {
  const [isToogle, setIsToogle] = useState(false)
  const { ref: ref2 } = useScramble({
    text: isToogle ? '' : 'Tiar',
    range: [65, 125],
    speed: 0.2,
    tick: 1,
    step: 6,
    scramble: 5,
    seed: 0,
    chance: 1,
    overdrive: false,
    overflow: true,
  })
  const { ref } = useScramble({
    text: isToogle ? 'I am Front End Developer' : `Hello.. My Name is `,
    range: [65, 125],
    speed: 0.2,
    tick: 1,
    step: 6,
    scramble: 5,
    seed: 0,
    chance: 1,
    overdrive: false,
    overflow: true,
  });

  useEffect(() => {
    setTimeout(() => {
      setIsToogle(!isToogle)
    }, 5000)
  }, [isToogle])

  return (
    <div>
      <p className="text-4xl 2xl:text-6xl font-sans font-medium dark:text-white text-slate-800 inline" ref={ref} />
      <span className="text-4xl 2xl:text-6xl font-sans font-medium dark:text-white text-blue-600 inline" ref={ref2} />
    </div>
  )
}

export default AnimatedHero