'use client'
import React, { useEffect, useState } from "react"
import { setTimeout } from "timers"
import { useScramble } from 'use-scramble'

const AnimatedHero = () => {
  const [isToogle, setIsToogle] = useState(false)
  const { ref: ref2 } = useScramble({
    text: isToogle ? '-' : 'Bahtiar Subrata',
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
    text: isToogle ? 'I am Front End Developer' : `Hello.. My Name is Tiar, よろしく !`,
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
      <p className="text-4xl 2xl:text-6xl font-sans font-medium dark:text-red-300 text-blue-400" ref={ref} />
      <span ref={ref2} />
    </div>
  )
}

export default AnimatedHero