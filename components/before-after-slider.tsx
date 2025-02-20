"use client"

import { useState, useEffect, useCallback } from "react"
import Image from "next/image"

interface BeforeAfterSliderProps {
  beforeImage: string
  afterImage: string
  beforeLabel?: string
  afterLabel?: string
}

export function BeforeAfterSlider({
  beforeImage,
  afterImage,
  beforeLabel = "Before",
  afterLabel = "After",
}: BeforeAfterSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50)
  const [isDragging, setIsDragging] = useState(false)

  const handleMove = useCallback(
    (e: MouseEvent | TouchEvent) => {
      if (!isDragging) return

      const sliderRect = (e.currentTarget as HTMLDivElement).getBoundingClientRect()
      const x = "touches" in e ? e.touches[0].clientX : e.clientX
      const newPosition = ((x - sliderRect.left) / sliderRect.width) * 100

      setSliderPosition(Math.max(0, Math.min(100, newPosition)))
    },
    [isDragging],
  )

  const handleMouseDown = () => setIsDragging(true)
  const handleMouseUp = () => setIsDragging(false)

  useEffect(() => {
    const handleMoveEvent = (e: MouseEvent | TouchEvent) => handleMove(e)
    const handleMouseUpEvent = () => handleMouseUp()

    document.addEventListener("mousemove", handleMoveEvent)
    document.addEventListener("touchmove", handleMoveEvent)
    document.addEventListener("mouseup", handleMouseUpEvent)
    document.addEventListener("touchend", handleMouseUpEvent)

    return () => {
      document.removeEventListener("mousemove", handleMoveEvent)
      document.removeEventListener("touchmove", handleMoveEvent)
      document.removeEventListener("mouseup", handleMouseUpEvent)
      document.removeEventListener("touchend", handleMouseUpEvent)
    }
  }, [handleMove])

  return (
    <div className="relative w-full h-[400px] overflow-hidden">
      <div className="absolute inset-0">
        <Image src={afterImage || "/placeholder.svg"} alt="After" layout="fill" objectFit="cover" />
      </div>
      <div className="absolute inset-0" style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}>
        <Image src={beforeImage || "/placeholder.svg"} alt="Before" layout="fill" objectFit="cover" />
      </div>
      <div
        className="absolute inset-y-0 w-1 bg-white cursor-ew-resize"
        style={{ left: `${sliderPosition}%` }}
        onMouseDown={handleMouseDown}
        onTouchStart={handleMouseDown}
      >
        <div className="absolute top-1/2 left-1/2 w-8 h-8 -mt-4 -ml-4 bg-white rounded-full shadow-lg flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="15 18 9 12 15 6" />
            <polyline points="9 18 3 12 9 6" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-4 left-4 bg-black bg-opacity-50 text-white px-2 py-1 rounded">{beforeLabel}</div>
      <div className="absolute bottom-4 right-4 bg-black bg-opacity-50 text-white px-2 py-1 rounded">{afterLabel}</div>
    </div>
  )
}

