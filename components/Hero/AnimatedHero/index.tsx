'use client'
import React, { useEffect, useState } from "react"
import { setTimeout } from "timers"
import { useScramble } from 'use-scramble'

const AnimatedHero = () => {
  const [text, setText] = useState(false)
  const { ref: ref2 } = useScramble({
    text: 'Bahtiar Subrata',
    range: [65, 125],
    speed: 0.75,
    tick: 1,
    step: 6,
    scramble: 5,
    seed: 0,
    chance: 1,
    overdrive: false,
    overflow: true,
  })
  const { ref } = useScramble({
    text: text ? 'I am Front End Developer' : `Hello.. My Name is Tiar, よろしく !`,
    range: [65, 125],
    speed: 10,
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
      setText(!text)
    }, 5000)
  }, [text])

  return (
    <div>
      <p className="text-[45px] font-sans font-medium" ref={ref} />
      <h1 ref={ref2} />
    </div>
  )
}

export default AnimatedHero