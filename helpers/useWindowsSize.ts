import { useState, useEffect } from 'react'

export type WindowType = {
  width: number
  height: number
}

export default function useWindowSize(): WindowType {
  const [windowSize, setWindowSize] = useState<WindowType>(() => ({
    width: 0,
    height: 0,
  }))
  const [firstRender, setFirstRender] = useState<boolean>(true)

  useEffect(() => {
    if(firstRender) {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }
    setFirstRender(false)

    const handleResize = (): void => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }

    handleResize()

    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener('resize', handleResize)
  }, [firstRender])
  return windowSize
}
