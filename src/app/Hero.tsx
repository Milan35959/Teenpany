'use client'
import React from 'react'
import {ChevronRight,ChevronLeft} from "lucide-react"
import { useState, useEffect, useCallback } from "react"
const Hero = () => {
  const backgroundImages = [
    "/assets/bg1.avif?height=200&width=500",
    "/assets/bg2.avif?height=200&width=500&text=Image+2",
    "/assets/bg3.avif?height=200&width=500&text=Image+3",
  ]

  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const nextImage = useCallback(() => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length)
  }, [backgroundImages.length])

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + backgroundImages.length) % backgroundImages.length)
  }

  useEffect(() => {
    const intervalId = setInterval(nextImage, 5000) // Change image every 5 seconds
    return () => clearInterval(intervalId)
  }, [nextImage])
  return (
    <div>
     <section id="home" className="relative h-[800px]">
        <div className="absolute inset-0 bg-black/50 z-0"></div>
        {backgroundImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
              currentImageIndex === index ? "opacity-100" : "opacity-0"
            }`}
            style={{ backgroundImage: `url(${image})` }}
          ></div>
        ))}
        <div className="relative z-20 container mx-auto px-4 h-full flex flex-col justify-center items-center text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">Welcome to Jack Daniels</h2>
          <p className="text-xl text-white mb-8">Discover our exquisite collection of premium liquors</p>
          <a
            href="#products"
            className="bg-gray-300 text-gray-900 px-8 py-3 rounded-full font-bold hover:bg-gray-600 transition duration-300"
          >
            Shop Now
          </a>
        </div>
        <button
          onClick={prevImage}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 z-30 bg-white/30 p-2 rounded-full hover:bg-white/50 transition duration-300"
        >
          <ChevronLeft className="text-white" size={24} />
        </button>
        <button
          onClick={nextImage}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 z-30 bg-white/30 p-2 rounded-full hover:bg-white/50 transition duration-300"
        >
          <ChevronRight className="text-white" size={24} />
        </button>
      </section>
    </div>
  )
}

export default Hero
